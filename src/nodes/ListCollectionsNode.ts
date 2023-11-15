import type {
  ChartNode,
  NodeInputDefinition,
  NodeOutputDefinition,
  PluginNodeImpl,
  PortId,
  Rivet,
} from "@ironclad/rivet-core";
import { ChromaClient } from "chromadb";

export type ListCollectionsNode = ChartNode<"chromaListCollections", {}>;

export function listCollectionsNode(rivet: typeof Rivet) {
  const impl: PluginNodeImpl<ListCollectionsNode> = {
    create(): ListCollectionsNode {
      const node: ListCollectionsNode = {
        id: rivet.newId(),
        data: {},
        title: "List Collections",
        type: "chromaListCollections",
        visualData: {
          x: 0,
          y: 0,
          width: 250,
        },
      };
      return node;
    },

    getInputDefinitions(): NodeInputDefinition[] {
      return [];
    },

    getOutputDefinitions(): NodeOutputDefinition[] {
      return [
        {
          id: "collectionNames" as PortId,
          dataType: "string[]",
          title: "Collection Names",
          description: "The names of all collections available in Chroma.",
        },
        {
          id: "collections" as PortId,
          dataType: "object[]",
          title: "Collections",
          description: "The full object information about all collections.",
        },
      ];
    },

    getBody() {
      return "";
    },

    getEditors() {
      return [];
    },

    getUIData() {
      return {
        contextMenuTitle: "List Collections",
        infoBoxTitle: "List Collections Node",
        infoBoxBody: "Lists all collections available in Chroma.",
        group: "Chroma",
      };
    },

    async process(_data, _inputData, context) {
      const client = new ChromaClient({
        path: context.getPluginConfig("databaseUri") || "http://localhost:8000",
      });

      const collections = await client.listCollections();

      return {
        ["collectionNames" as PortId]: {
          type: "string[]",
          value: collections.map((c) => c.name),
        },
        ["collections" as PortId]: {
          type: "object[]",
          value: collections,
        },
      };
    },
  };

  return rivet.pluginNodeDefinition(impl, "List Collections");
}
