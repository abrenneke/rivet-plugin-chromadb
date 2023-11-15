import type {
  ChartNode,
  NodeInputDefinition,
  NodeOutputDefinition,
  PluginNodeImpl,
  PortId,
  Rivet,
} from "@ironclad/rivet-core";
import { ChromaClient } from "chromadb";

export type ChromaUpdateNode = ChartNode<
  "chromaUpdate",
  {
    id: string;
    useIdInput?: boolean;

    collectionName: string;
    useCollectionNameInput?: boolean;

    createCollectionIfNotExists: boolean;

    metadata: { key: string; value: string }[];
    useMetadataInput?: boolean;
  }
>;

export function chromaUpdateNode(rivet: typeof Rivet) {
  const impl: PluginNodeImpl<ChromaUpdateNode> = {
    create(): ChromaUpdateNode {
      const node: ChromaUpdateNode = {
        id: rivet.newId(),
        data: {
          collectionName: "new-collection",
          createCollectionIfNotExists: true,
          id: "",
          metadata: [],
          useCollectionNameInput: false,
          useIdInput: true,
          useMetadataInput: true,
        },
        title: "Chroma Update",
        type: "chromaUpdate",
        visualData: {
          x: 0,
          y: 0,
          width: 250,
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
          description:
            "The name of the collection containing the item to update.",
        });
      }

      if (data.useIdInput) {
        inputs.push({
          id: "id" as PortId,
          dataType: "string",
          title: "ID",
          description: "The ID of the item to update in the collection.",
          coerced: true,
        });
      }

      inputs.push({
        id: "embedding" as PortId,
        dataType: "vector",
        title: "Embedding",
        description: "The embedding for the item to store in the collection.",
        required: true,
      });

      if (data.useMetadataInput) {
        inputs.push({
          id: "metadata" as PortId,
          dataType: "object",
          title: "Metadata",
          description:
            "Metadata to store with the item. Must be an object with string values.",
          required: false,
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
          description: "The ID of the item that was updated.",
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
          helperMessage: "The collection containing the item to update.",
        },
        {
          type: "toggle",
          dataKey: "createCollectionIfNotExists",
          label: "Create Collection If Not Exists",
          helperMessage: "If the collection does not exist, create it.",
        },
        {
          type: "string",
          label: "ID",
          dataKey: "id",
          useInputToggleDataKey: "useIdInput",
          helperMessage: "The ID of the item to update.",
        },
        {
          type: "keyValuePair",
          label: "Metadata",
          dataKey: "metadata",
          useInputToggleDataKey: "useMetadataInput",
          helperMessage:
            "Replaces the metadata for the item with the metadata here.",
          keyPlaceholder: "Key",
          valuePlaceholder: "Value",
        },
      ];
    },

    getUIData() {
      return {
        contextMenuTitle: "Chroma Update",
        infoBoxTitle: "Chroma Update Node",
        infoBoxBody: "Updates an existing item in a Chroma collection.",
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
      const embedding = rivet.coerceType(
        inputData["embedding" as PortId],
        "vector"
      );

      const collection = data.createCollectionIfNotExists
        ? await client.getOrCreateCollection({
            name: collectionName,
          })
        : await client.getCollection({
            name: collectionName,
          });

      const id = rivet.getInputOrData(data, inputData, "id");

      await collection.update({
        ids: [id],
        embeddings: [embedding],
        metadatas: metadata ? [metadata] : undefined,
      });

      return {
        ["id" as PortId]: {
          type: "string",
          value: id,
        },
      };
    },
  };

  return rivet.pluginNodeDefinition(impl, "Chroma Update");
}
