import type {
  ChartNode,
  NodeInputDefinition,
  NodeOutputDefinition,
  PluginNodeImpl,
  PortId,
  Rivet,
} from "@ironclad/rivet-core";
import { ChromaClient } from "chromadb";

export type DeleteCollectionNode = ChartNode<
  "chromaDeleteCollection",
  {
    collectionName: string;
    useCollectionNameInput?: boolean;
  }
>;

export function deleteCollectionNode(rivet: typeof Rivet) {
  const impl: PluginNodeImpl<DeleteCollectionNode> = {
    create(): DeleteCollectionNode {
      const node: DeleteCollectionNode = {
        id: rivet.newId(),
        data: {
          collectionName: "new-collection",
        },
        title: "Delete Collection",
        type: "chromaDeleteCollection",
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
          description: "The name of the collection to delete.",
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
          description: "The name of the collection that was deleted.",
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
      ];
    },

    getUIData() {
      return {
        contextMenuTitle: "Delete Collection",
        infoBoxTitle: "Delete Collection Node",
        infoBoxBody: "Deletes a collection in Chroma",
        group: "Chroma",
      };
    },

    async process(data, inputData, context) {
      const client = new ChromaClient({
        path: context.getPluginConfig("databaseUri") || "http://localhost:8000",
      });

      const collectionName = rivet.getInputOrData(
        data,
        inputData,
        "collectionName"
      );

      await client.deleteCollection({ name: collectionName });

      return {
        ["collectionName" as PortId]: {
          type: "string",
          value: collectionName,
        },
      };
    },
  };

  return rivet.pluginNodeDefinition(impl, "Delete Collection");
}
