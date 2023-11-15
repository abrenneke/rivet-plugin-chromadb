import type {
  ChartNode,
  NodeInputDefinition,
  NodeOutputDefinition,
  PluginNodeImpl,
  PortId,
  Rivet,
} from "@ironclad/rivet-core";
import { ChromaClient } from "chromadb";

export type ChromaDeleteNode = ChartNode<
  "chromaDelete",
  {
    id: string;
    useIdInput?: boolean;

    collectionName: string;
    useCollectionNameInput?: boolean;

    createCollectionIfNotExists: boolean;

    where: string;
    useWhereInput?: boolean;

    whereDocument: string;
    useWhereDocumentInput?: boolean;
  }
>;

export function chromaDeleteNode(rivet: typeof Rivet) {
  const impl: PluginNodeImpl<ChromaDeleteNode> = {
    create(): ChromaDeleteNode {
      const node: ChromaDeleteNode = {
        id: rivet.newId(),
        data: {
          collectionName: "new-collection",
          createCollectionIfNotExists: true,
          id: "",
          useCollectionNameInput: false,
          useIdInput: true,
          where: "",
          useWhereInput: false,
          whereDocument: "",
          useWhereDocumentInput: false,
        },
        title: "Chroma Delete",
        type: "chromaDelete",
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
          description: "The name of the collection to delete an item from.",
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

      return inputs;
    },

    getOutputDefinitions(): NodeOutputDefinition[] {
      return [
        {
          id: "ids" as PortId,
          dataType: "string[]",
          title: "IDs",
          description: "The IDs of the items that were deleted.",
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

      if (data.useIdInput || data.id.trim()) {
        parts.push(`ID: ${data.useIdInput ? "(From Input)" : data.id.trim()}`);
      }

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
          helperMessage: "The collection to delete an item from.",
        },
        {
          type: "toggle",
          dataKey: "createCollectionIfNotExists",
          label: "Create Collection If Not Exists",
          helperMessage: "If the collection does not exist, create it.",
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
        contextMenuTitle: "Chroma Delete",
        infoBoxTitle: "Chroma Delete Node",
        infoBoxBody: "Deletes one or more items from a collection in Chroma.",
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

      let id: string | undefined = rivet.getInputOrData(data, inputData, "id");
      if (!id.trim()) {
        id = undefined;
      }

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

      const ids = await collection.delete({
        ids: id ? [id] : undefined,
        where,
        whereDocument,
      });

      return {
        ["ids" as PortId]: {
          type: "string[]",
          value: ids,
        },
      };
    },
  };

  return rivet.pluginNodeDefinition(impl, "Chroma Delete");
}
