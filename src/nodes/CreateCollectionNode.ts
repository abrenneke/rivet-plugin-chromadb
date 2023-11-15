import type {
  ChartNode,
  NodeInputDefinition,
  NodeOutputDefinition,
  PluginNodeImpl,
  PortId,
  Rivet,
} from "@ironclad/rivet-core";
import { ChromaClient } from "chromadb";

export type CreateCollectionNode = ChartNode<
  "chromaCreateCollection",
  {
    collectionName: string;
    useCollectionNameInput?: boolean;

    ignoreIfExists: boolean;

    metadata: { key: string; value: string }[];
    useMetadataInput?: boolean;
  }
>;

export function createCollectionNode(rivet: typeof Rivet) {
  const impl: PluginNodeImpl<CreateCollectionNode> = {
    create(): CreateCollectionNode {
      const node: CreateCollectionNode = {
        id: rivet.newId(),
        data: {
          collectionName: "new-collection",
          ignoreIfExists: true,
          metadata: [],
        },
        title: "Create Collection",
        type: "chromaCreateCollection",
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
            "The name of the collection to create. The length must be between 3 and 64 characters. The name must start and end with a lowercase lerr or a digit, and it can contain dots, dashes, and underscores in between. The name must not contain two consecutive dots, and must not be a valid IP address.",
        });
      }

      if (data.useMetadataInput) {
        inputs.push({
          id: "metadata" as PortId,
          dataType: "object",
          title: "Metadata",
          description:
            "Metadata to attach to the collection. Must be an object with string values.",
        });
      }

      return inputs;
    },

    getOutputDefinitions(): NodeOutputDefinition[] {
      return [
        {
          id: "collectionName" as PortId,
          dataType: "string",
          title: "Collection Name",
          description: "The name of the collection that was created.",
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
          autoFocus: true,
          helperMessage:
            "Length must be between 3 and 64 characters. The name must start and end with a lowercase letter or a digit, and it can contain dots, dashes, and underscores in between. The name must not contain two consecutive dots, and must not be a valid IP address.",
          maxLength: 64,
          placeholder: "new-collection",
        },
        {
          type: "toggle",
          dataKey: "ignoreIfExists",
          label: "Ignore If Exists",
          helperMessage: "If the collection already exists, continue anyway.",
        },
        {
          type: "keyValuePair",
          label: "Metadata",
          dataKey: "metadata",
          useInputToggleDataKey: "useMetadataInput",
          keyPlaceholder: "key",
          valuePlaceholder: "value",
          helperMessage: "Metadata to attach to the collection.",
        },
      ];
    },

    getUIData() {
      return {
        contextMenuTitle: "Create Collection",
        infoBoxTitle: "Create Collection Node",
        infoBoxBody:
          "Creates a new collection in Chroma to store embeddings in.",
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

      if (data.ignoreIfExists) {
        const collection = await client.getOrCreateCollection({
          name: collectionName,
          metadata,
        });

        return {
          ["collectionName" as PortId]: {
            type: "string",
            value: collection.name,
          },
        };
      }

      const collection = await client.createCollection({
        name: collectionName,
        metadata,
      });

      return {
        ["collectionName" as PortId]: {
          type: "string",
          value: collection.name,
        },
      };
    },
  };

  return rivet.pluginNodeDefinition(impl, "Create Collection");
}
