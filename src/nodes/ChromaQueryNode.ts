import type {
  ChartNode,
  NodeInputDefinition,
  NodeOutputDefinition,
  PluginNodeImpl,
  PortId,
  Rivet,
} from "@ironclad/rivet-core";
import { ChromaClient, IncludeEnum } from "chromadb";

export type ChromaQueryNode = ChartNode<
  "chromaQuery",
  {
    collectionName: string;
    useCollectionNameInput?: boolean;

    createCollectionIfNotExists: boolean;

    where: string;
    useWhereInput?: boolean;

    whereDocument: string;
    useWhereDocumentInput?: boolean;

    nResults: number;
    useNResultsInput?: boolean;
  }
>;

export function chromaQueryNode(rivet: typeof Rivet) {
  const impl: PluginNodeImpl<ChromaQueryNode> = {
    create(): ChromaQueryNode {
      const node: ChromaQueryNode = {
        id: rivet.newId(),
        data: {
          collectionName: "new-collection",
          createCollectionIfNotExists: true,
          useCollectionNameInput: false,
          where: "",
          useWhereInput: false,
          whereDocument: "",
          useWhereDocumentInput: false,
          nResults: 10,
        },
        title: "Chroma Query",
        type: "chromaQuery",
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

      inputs.push({
        id: "embedding" as PortId,
        dataType: "vector",
        title: "Embedding",
        description: "The embedding to query for similar items.",
      });

      if (data.useCollectionNameInput) {
        inputs.push({
          id: "collectionName" as PortId,
          dataType: "string",
          title: "Collection Name",
          description: "The name of the collection to get items from.",
        });
      }

      if (data.useWhereInput) {
        inputs.push({
          id: "where" as PortId,
          dataType: "object",
          title: "Where",
          description:
            "A Where type dict used to filter the deletion, e.g. { 'name': 'John' }",
        });
      }

      if (data.useWhereDocumentInput) {
        inputs.push({
          id: "whereDocument" as PortId,
          dataType: "string",
          title: "Where Document",
          description:
            'A WhereDocument type dict used to filter the deletion by the document content, e.g. { "$contains": { "text": "John" } }',
        });
      }

      if (data.useNResultsInput) {
        inputs.push({
          id: "nResults" as PortId,
          dataType: "number",
          title: "Number of Results",
          description: "The number of results to return.",
        });
      }

      return inputs;
    },

    getOutputDefinitions(): NodeOutputDefinition[] {
      return [
        {
          id: "ids" as PortId,
          dataType: "string[]",
          title: "IDs",
          description: "The IDs of the items that were retrieved.",
        },
        {
          id: "items" as PortId,
          dataType: "object[]",
          title: "Items",
          description: "The items that were retrieved.",
        },
      ];
    },

    getBody(data) {
      const parts: string[] = [];
      parts.push(
        `Collection: ${
          data.useCollectionNameInput ? "(From Input)" : data.collectionName
        }`
      );

      if (data.useWhereInput || data.where.trim()) {
        parts.push(
          `Where: ${data.useWhereInput ? "(From Input)" : data.where.trim()}`
        );
      }

      if (data.useWhereDocumentInput || data.whereDocument.trim()) {
        parts.push(
          `Where Document: ${
            data.useWhereDocumentInput
              ? "(From Input)"
              : data.whereDocument.trim()
          }`
        );
      }

      return parts.join("\n");
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
          type: "number",
          dataKey: "nResults",
          label: "Num Results",
          useInputToggleDataKey: "useNResultsInput",
          helperMessage: "The number of results to return.",
        },
        {
          type: "code",
          dataKey: "where",
          label: "Where",
          useInputToggleDataKey: "useWhereInput",
          helperMessage:
            'A Where type dict used to filter the deletion, e.g. { "name": "John" }',
          language: "json",
        },
        {
          type: "code",
          dataKey: "whereDocument",
          label: "Where Document",
          useInputToggleDataKey: "useWhereDocumentInput",
          helperMessage:
            'A WhereDocument type dict used to filter the deletion by the document content, e.g. { "$contains": { "text": "John" } }',
          language: "json",
        },
      ];
    },

    getUIData() {
      return {
        contextMenuTitle: "Chroma Query",
        infoBoxTitle: "Chroma Query Node",
        infoBoxBody: "Retrieves items from Chroma.",
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

      const nResults = rivet.getInputOrData(
        data,
        inputData,
        "nResults",
        "number"
      );
      const embedding = rivet.coerceTypeOptional(
        inputData["embedding" as PortId],
        "vector"
      );

      let where: Record<string, unknown> | undefined = undefined;
      if (data.useWhereInput) {
        where = rivet.coerceType(
          inputData["where" as PortId],
          "object"
        ) as Record<string, unknown>;
      } else {
        try {
          where = JSON.parse(data.where);
        } catch (e) {
          where = undefined;
        }
      }

      let whereDocument: Record<string, unknown> | undefined = undefined;
      if (data.useWhereDocumentInput) {
        whereDocument = rivet.coerceType(
          inputData["whereDocument" as PortId],
          "object"
        ) as Record<string, unknown>;
      } else {
        try {
          whereDocument = JSON.parse(data.whereDocument);
        } catch (e) {
          whereDocument = undefined;
        }
      }

      const collection = data.createCollectionIfNotExists
        ? await client.getOrCreateCollection({
            name: collectionName,
          })
        : await client.getCollection({
            name: collectionName,
          });

      const response = await collection.query({
        nResults,
        queryEmbeddings: embedding ? [embedding] : undefined,
        where,
        whereDocument,
        include: [
          IncludeEnum.Distances,
          IncludeEnum.Documents,
          IncludeEnum.Metadatas,
        ],
      });

      return {
        ["ids" as PortId]: {
          type: "string[]",
          value: response.ids[0],
        },
        ["items" as PortId]: {
          type: "object[]",
          value: response.ids[0].map((id, i) => ({
            id,
            metadata: response.metadatas[0][i],
            document: response.documents[0][i],
            distance: response.distances?.[0][i],
          })),
        },
      };
    },
  };

  return rivet.pluginNodeDefinition(impl, "Chroma Query");
}
