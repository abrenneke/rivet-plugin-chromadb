import type {
  ChartNode,
  NodeInputDefinition,
  NodeOutputDefinition,
  PluginNodeImpl,
  PortId,
  Rivet,
} from "@ironclad/rivet-core";
import { ChromaClient } from "chromadb";

export type ChromaAddNode = ChartNode<
  "chromaAdd",
  {
    id: string;
    useIdInput?: boolean;

    collectionName: string;
    useCollectionNameInput?: boolean;

    upsert: boolean;

    createCollectionIfNotExists: boolean;

    metadata: { key: string; value: string }[];
    useMetadataInput?: boolean;
  }
>;

export function chromaAddNode(rivet: typeof Rivet) {
  const impl: PluginNodeImpl<ChromaAddNode> = {
    create(): ChromaAddNode {
      const node: ChromaAddNode = {
        id: rivet.newId(),
        data: {
          collectionName: "new-collection",
          createCollectionIfNotExists: true,
          id: "",
          useCollectionNameInput: false,
          useIdInput: true,
          upsert: true,
          metadata: [],
        },
        title: "Chroma Add",
        type: "chromaAdd",
        visualData: {
          x: 0,
          y: 0,
          width: 200,
        },
      };
      return node;
    },

    getInputDefinitions(data): NodeInputDefinition[] {
      const inputs: NodeInputDefinition[] = [];

      if (data.useCollectionNameInput) {
        inputs.push({
          id: "collectionName" as PortId,
          dataType: "string",
          title: "Collection Name",
          description: "The name of the collection to add an item to.",
        });
      }

      if (data.useIdInput) {
        inputs.push({
          id: "id" as PortId,
          dataType: "string",
          title: "ID",
          description: "The ID of the item to delete from the collection",
          coerced: true,
        });
      }

      inputs.push({
        id: "embedding" as PortId,
        dataType: "vector",
        title: "Embedding",
        description: "The embedding of the item to add to the collection.",
      });

      inputs.push({
        id: "document" as PortId,
        dataType: "string",
        title: "Document",
        description:
          "The document to associate with the item in the collection.",
      });

      if (data.useMetadataInput) {
        inputs.push({
          id: "metadata" as PortId,
          dataType: "object",
          title: "Metadata",
          description:
            "Metadata to attach to the item. Must be an object with string values.",
        });
      }

      return inputs;
    },

    getOutputDefinitions(): NodeOutputDefinition[] {
      return [
        {
          id: "id" as PortId,
          dataType: "string",
          title: "ID",
          description: "The ID of the item that was added.",
        },
      ];
    },

    getBody(data) {
      return rivet.dedent`
        Collection: ${
          data.useCollectionNameInput ? "(From Input)" : data.collectionName
        }
      `;
    },

    getEditors() {
      return [
        {
          type: "string",
          label: "Collection Name",
          dataKey: "collectionName",
          useInputToggleDataKey: "useCollectionNameInput",
          maxLength: 64,
          helperMessage: "The collection to add the item to.",
        },
        {
          type: "toggle",
          dataKey: "createCollectionIfNotExists",
          label: "Create Collection If Not Exists",
          helperMessage: "If the collection does not exist, create it.",
        },
        {
          type: "string",
          dataKey: "id",
          label: "ID",
          useInputToggleDataKey: "useIdInput",
          placeholder: "ID",
        },
        {
          type: "toggle",
          dataKey: "upsert",
          label: "Upsert",
          helperMessage:
            "If true, will update the item if it already exists in the collection.",
        },
        {
          type: "keyValuePair",
          dataKey: "metadata",
          label: "Metadata",
          useInputToggleDataKey: "useMetadataInput",
          helperMessage: "Metadata to attach to the item.",
          keyPlaceholder: "Key",
          valuePlaceholder: "Value",
        },
      ];
    },

    getUIData() {
      return {
        contextMenuTitle: "Chroma Add",
        infoBoxTitle: "Chroma Add Node",
        infoBoxBody: "Adds an item to a collection in Chroma.",
        group: "Chroma",
      };
    },

    async process(data, inputData, context) {
      const client = new ChromaClient({
        path: context.getPluginConfig("databaseUri") || "http://localhost:8000",
      });

      let metadata: Record<string, string> | undefined = data.metadata.reduce(
        (acc, { key, value }) => {
          acc[key] = value;
          return acc;
        },
        {} as Record<string, string>
      );

      if (data.useMetadataInput) {
        metadata = rivet.coerceType(
          inputData["metadata" as PortId],
          "object"
        ) as Record<string, string>;
      }

      if (Object.keys(metadata).length === 0) {
        metadata = undefined; // Chroma rejects empty metadata, so set to undefined.
      }

      const collectionName = rivet.getInputOrData(
        data,
        inputData,
        "collectionName"
      );

      const collection = data.createCollectionIfNotExists
        ? await client.getOrCreateCollection({
            name: collectionName,
          })
        : await client.getCollection({
            name: collectionName,
          });

      const id = rivet.getInputOrData(data, inputData, "id");
      const document = rivet.coerceTypeOptional(
        inputData["document" as PortId],
        "string"
      );
      let embedding = rivet.coerceTypeOptional(
        inputData["embedding" as PortId],
        "vector"
      );

      // Chroma rejects empty embeddings, so just use an empty array.
      if (!embedding) {
        embedding = [];
      }

      if (data.upsert) {
        await collection.upsert({
          ids: [id],
          embeddings: embedding,
          documents: document ? [document] : undefined,
          metadatas: metadata ? [metadata] : undefined,
        });
      } else {
        await collection.add({
          ids: [id],
          embeddings: embedding,
          documents: document ? [document] : undefined,
          metadatas: metadata ? [metadata] : undefined,
        });
      }

      return {
        ["id" as PortId]: {
          type: "string",
          value: id,
        },
      };
    },
  };

  return rivet.pluginNodeDefinition(impl, "Chroma Add");
}
