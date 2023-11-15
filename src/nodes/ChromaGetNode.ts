import type {
  ChartNode,
  NodeInputDefinition,
  NodeOutputDefinition,
  PluginNodeImpl,
  PortId,
  Rivet,
} from "@ironclad/rivet-core";
import { ChromaClient } from "chromadb";

export type ChromaGetNode = ChartNode<
  "chromaGet",
  {
    collectionName: string;
    useCollectionNameInput?: boolean;

    ids: string[];
    useIdsInput?: boolean;

    createCollectionIfNotExists: boolean;

    where: string;
    useWhereInput?: boolean;

    whereDocument: string;
    useWhereDocumentInput?: boolean;

    limit: number;
    useLimitInput?: boolean;

    offset: number;
    useOffsetInput?: boolean;
  }
>;

export function chromaGetNode(rivet: typeof Rivet) {
  const impl: PluginNodeImpl<ChromaGetNode> = {
    create(): ChromaGetNode {
      const node: ChromaGetNode = {
        id: rivet.newId(),
        data: {
          collectionName: "new-collection",
          createCollectionIfNotExists: true,
          useCollectionNameInput: false,
          where: "",
          useWhereInput: false,
          whereDocument: "",
          useWhereDocumentInput: false,
          limit: 10,
          offset: 0,
          ids: [],
        },
        title: "Chroma Get",
        type: "chromaGet",
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
          description: "The name of the collection to get items from.",
        });
      }

      if (data.useIdsInput) {
        inputs.push({
          id: "ids" as PortId,
          dataType: "string[]",
          title: "IDs",
          description: "The IDs of the items to get.",
        });
      }

      if (data.useWhereInput) {
        inputs.push({
          id: "where" as PortId,
          dataType: "object",
          title: "Where",
          description:
            "A Where type dict used to filter the retrieval, e.g. { 'name': 'John' }",
        });
      }

      if (data.useWhereDocumentInput) {
        inputs.push({
          id: "whereDocument" as PortId,
          dataType: "string",
          title: "Where Document",
          description:
            'A WhereDocument type dict used to filter the retrieval by the document content, e.g. { "$contains": { "text": "John" } }',
        });
      }

      if (data.useLimitInput) {
        inputs.push({
          id: "limit" as PortId,
          dataType: "number",
          title: "Limit",
          description: "The maximum number of items to return.",
        });
      }

      if (data.useOffsetInput) {
        inputs.push({
          id: "offset" as PortId,
          dataType: "number",
          title: "Offset",
          description: "The number of items to skip before returning results.",
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
          dataKey: "limit",
          label: "Limit",
          useInputToggleDataKey: "useLimitInput",
          helperMessage: "The maximum number of items to return.",
        },
        {
          type: "number",
          dataKey: "offset",
          label: "Offset",
          useInputToggleDataKey: "useOffsetInput",
          helperMessage:
            "The number of items to skip before returning results.",
        },
        {
          type: "stringList",
          dataKey: "ids",
          label: "IDs",
          useInputToggleDataKey: "useIdsInput",
          helperMessage: "The IDs of the items to get.",
        },
        {
          type: "code",
          dataKey: "where",
          label: "Where",
          useInputToggleDataKey: "useWhereInput",
          helperMessage:
            'A Where type dict used to filter the retrieval, e.g. { "name": "John" }',
          language: "json",
        },
        {
          type: "code",
          dataKey: "whereDocument",
          label: "Where Document",
          useInputToggleDataKey: "useWhereDocumentInput",
          helperMessage:
            'A WhereDocument type dict used to filter the retrieval by the document content, e.g. { "$contains": { "text": "John" } }',
          language: "json",
        },
      ];
    },

    getUIData() {
      return {
        contextMenuTitle: "Chroma Get",
        infoBoxTitle: "Chroma Get Node",
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

      const ids = rivet.getInputOrData(data, inputData, "ids", "string[]");
      const limit = rivet.getInputOrData(data, inputData, "limit", "number");
      const offset = rivet.getInputOrData(data, inputData, "offset", "number");

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

      const response = await collection.get({
        ids: ids.length ? ids : undefined,
        limit,
        offset,
        where,
        whereDocument,
      });

      if (response.error) {
        throw new Error(response.error);
      }

      return {
        ["ids" as PortId]: {
          type: "string[]",
          value: response.ids,
        },
        ["items" as PortId]: {
          type: "object[]",
          value: response.ids.map((id, i) => ({
            id,
            metadata: response.metadatas[i],
            document: response.documents[i],
          })),
        },
      };
    },
  };

  return rivet.pluginNodeDefinition(impl, "Chroma Get");
}
