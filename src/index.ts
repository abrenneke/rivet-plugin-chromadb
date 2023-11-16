import type { RivetPlugin, RivetPluginInitializer } from "@ironclad/rivet-core";
import { chromaAddNode } from "./nodes/ChromaAddNode";
import { chromaDeleteNode } from "./nodes/ChromaDeleteNode";
import { chromaGetNode } from "./nodes/ChromaGetNode";
import { chromaQueryNode } from "./nodes/ChromaQueryNode";
import { chromaUpdateNode } from "./nodes/ChromaUpdateNode";
import { createCollectionNode } from "./nodes/CreateCollectionNode";
import { deleteCollectionNode } from "./nodes/DeleteCollectionNode";
import { listCollectionsNode } from "./nodes/ListCollectionsNode";

const plugin: RivetPluginInitializer = (rivet) => {
  const examplePlugin: RivetPlugin = {
    id: "chroma",
    name: "Chroma",

    configSpec: {
      databaseUri: {
        type: "string",
        label: "Database URI",
        description:
          "The URI of the database to use. Defaults to http://localhost:8000.",
        helperText:
          "The URI of the database to use. Defaults to http://localhost:8000.",
        pullEnvironmentVariable: "CHROMA_DB_URI",
      },
    },

    contextMenuGroups: [
      {
        id: "chroma",
        label: "Chroma",
      },
    ],

    register: (register) => {
      register(chromaAddNode(rivet));
      register(chromaDeleteNode(rivet));
      register(chromaGetNode(rivet));
      register(chromaQueryNode(rivet));
      register(chromaUpdateNode(rivet));
      register(createCollectionNode(rivet));
      register(deleteCollectionNode(rivet));
      register(listCollectionsNode(rivet));
    },
  };

  return examplePlugin;
};

export default plugin;
