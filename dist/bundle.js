// node_modules/chromadb/dist/chromadb.mjs
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var defaultFetch = fetch;
var BASE_PATH = "";
var BaseAPI = class {
  constructor(configuration, basePath = BASE_PATH, fetch2 = defaultFetch) {
    this.basePath = basePath;
    this.fetch = fetch2;
    if (configuration) {
      this.configuration = configuration;
      this.basePath = configuration.basePath || this.basePath;
    }
  }
};
var RequiredError = class _RequiredError extends Error {
  constructor(field, msg) {
    super(msg);
    this.field = field;
    Object.setPrototypeOf(this, _RequiredError.prototype);
    this.name = "RequiredError";
  }
};
var ApiApiFetchParamCreator = function(configuration) {
  return {
    /**
     * @summary Add
     * @param {string} collectionId
     * @param {Api.AddEmbedding} request
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    add(collectionId, request, options = {}) {
      if (collectionId === null || collectionId === void 0) {
        throw new RequiredError("collectionId", "Required parameter collectionId was null or undefined when calling add.");
      }
      if (request === null || request === void 0) {
        throw new RequiredError("request", "Required parameter request was null or undefined when calling add.");
      }
      let localVarPath = `/api/v1/collections/{collection_id}/add`.replace("{collection_id}", encodeURIComponent(String(collectionId)));
      const localVarPathQueryStart = localVarPath.indexOf("?");
      const localVarRequestOptions = Object.assign({ method: "POST" }, options);
      const localVarHeaderParameter = options.headers ? new Headers(options.headers) : new Headers();
      const localVarQueryParameter = new URLSearchParams(localVarPathQueryStart !== -1 ? localVarPath.substring(localVarPathQueryStart + 1) : "");
      if (localVarPathQueryStart !== -1) {
        localVarPath = localVarPath.substring(0, localVarPathQueryStart);
      }
      localVarHeaderParameter.set("Content-Type", "application/json");
      localVarRequestOptions.headers = localVarHeaderParameter;
      if (request !== void 0) {
        localVarRequestOptions.body = JSON.stringify(request || {});
      }
      const localVarQueryParameterString = localVarQueryParameter.toString();
      if (localVarQueryParameterString) {
        localVarPath += "?" + localVarQueryParameterString;
      }
      return {
        url: localVarPath,
        options: localVarRequestOptions
      };
    },
    /**
     * @summary Delete
     * @param {string} collectionId
     * @param {Api.DeleteEmbedding} request
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    aDelete(collectionId, request, options = {}) {
      if (collectionId === null || collectionId === void 0) {
        throw new RequiredError("collectionId", "Required parameter collectionId was null or undefined when calling aDelete.");
      }
      if (request === null || request === void 0) {
        throw new RequiredError("request", "Required parameter request was null or undefined when calling aDelete.");
      }
      let localVarPath = `/api/v1/collections/{collection_id}/delete`.replace("{collection_id}", encodeURIComponent(String(collectionId)));
      const localVarPathQueryStart = localVarPath.indexOf("?");
      const localVarRequestOptions = Object.assign({ method: "POST" }, options);
      const localVarHeaderParameter = options.headers ? new Headers(options.headers) : new Headers();
      const localVarQueryParameter = new URLSearchParams(localVarPathQueryStart !== -1 ? localVarPath.substring(localVarPathQueryStart + 1) : "");
      if (localVarPathQueryStart !== -1) {
        localVarPath = localVarPath.substring(0, localVarPathQueryStart);
      }
      localVarHeaderParameter.set("Content-Type", "application/json");
      localVarRequestOptions.headers = localVarHeaderParameter;
      if (request !== void 0) {
        localVarRequestOptions.body = JSON.stringify(request || {});
      }
      const localVarQueryParameterString = localVarQueryParameter.toString();
      if (localVarQueryParameterString) {
        localVarPath += "?" + localVarQueryParameterString;
      }
      return {
        url: localVarPath,
        options: localVarRequestOptions
      };
    },
    /**
     * @summary Get
     * @param {string} collectionId
     * @param {Api.GetEmbedding} request
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    aGet(collectionId, request, options = {}) {
      if (collectionId === null || collectionId === void 0) {
        throw new RequiredError("collectionId", "Required parameter collectionId was null or undefined when calling aGet.");
      }
      if (request === null || request === void 0) {
        throw new RequiredError("request", "Required parameter request was null or undefined when calling aGet.");
      }
      let localVarPath = `/api/v1/collections/{collection_id}/get`.replace("{collection_id}", encodeURIComponent(String(collectionId)));
      const localVarPathQueryStart = localVarPath.indexOf("?");
      const localVarRequestOptions = Object.assign({ method: "POST" }, options);
      const localVarHeaderParameter = options.headers ? new Headers(options.headers) : new Headers();
      const localVarQueryParameter = new URLSearchParams(localVarPathQueryStart !== -1 ? localVarPath.substring(localVarPathQueryStart + 1) : "");
      if (localVarPathQueryStart !== -1) {
        localVarPath = localVarPath.substring(0, localVarPathQueryStart);
      }
      localVarHeaderParameter.set("Content-Type", "application/json");
      localVarRequestOptions.headers = localVarHeaderParameter;
      if (request !== void 0) {
        localVarRequestOptions.body = JSON.stringify(request || {});
      }
      const localVarQueryParameterString = localVarQueryParameter.toString();
      if (localVarQueryParameterString) {
        localVarPath += "?" + localVarQueryParameterString;
      }
      return {
        url: localVarPath,
        options: localVarRequestOptions
      };
    },
    /**
     * @summary Count
     * @param {string} collectionId
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    count(collectionId, options = {}) {
      if (collectionId === null || collectionId === void 0) {
        throw new RequiredError("collectionId", "Required parameter collectionId was null or undefined when calling count.");
      }
      let localVarPath = `/api/v1/collections/{collection_id}/count`.replace("{collection_id}", encodeURIComponent(String(collectionId)));
      const localVarPathQueryStart = localVarPath.indexOf("?");
      const localVarRequestOptions = Object.assign({ method: "GET" }, options);
      const localVarHeaderParameter = options.headers ? new Headers(options.headers) : new Headers();
      const localVarQueryParameter = new URLSearchParams(localVarPathQueryStart !== -1 ? localVarPath.substring(localVarPathQueryStart + 1) : "");
      if (localVarPathQueryStart !== -1) {
        localVarPath = localVarPath.substring(0, localVarPathQueryStart);
      }
      localVarRequestOptions.headers = localVarHeaderParameter;
      const localVarQueryParameterString = localVarQueryParameter.toString();
      if (localVarQueryParameterString) {
        localVarPath += "?" + localVarQueryParameterString;
      }
      return {
        url: localVarPath,
        options: localVarRequestOptions
      };
    },
    /**
     * @summary Create Collection
     * @param {Api.CreateCollection} request
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCollection(request, options = {}) {
      if (request === null || request === void 0) {
        throw new RequiredError("request", "Required parameter request was null or undefined when calling createCollection.");
      }
      let localVarPath = `/api/v1/collections`;
      const localVarPathQueryStart = localVarPath.indexOf("?");
      const localVarRequestOptions = Object.assign({ method: "POST" }, options);
      const localVarHeaderParameter = options.headers ? new Headers(options.headers) : new Headers();
      const localVarQueryParameter = new URLSearchParams(localVarPathQueryStart !== -1 ? localVarPath.substring(localVarPathQueryStart + 1) : "");
      if (localVarPathQueryStart !== -1) {
        localVarPath = localVarPath.substring(0, localVarPathQueryStart);
      }
      localVarHeaderParameter.set("Content-Type", "application/json");
      localVarRequestOptions.headers = localVarHeaderParameter;
      if (request !== void 0) {
        localVarRequestOptions.body = JSON.stringify(request || {});
      }
      const localVarQueryParameterString = localVarQueryParameter.toString();
      if (localVarQueryParameterString) {
        localVarPath += "?" + localVarQueryParameterString;
      }
      return {
        url: localVarPath,
        options: localVarRequestOptions
      };
    },
    /**
     * @summary Delete Collection
     * @param {string} collectionName
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCollection(collectionName, options = {}) {
      if (collectionName === null || collectionName === void 0) {
        throw new RequiredError("collectionName", "Required parameter collectionName was null or undefined when calling deleteCollection.");
      }
      let localVarPath = `/api/v1/collections/{collection_name}`.replace("{collection_name}", encodeURIComponent(String(collectionName)));
      const localVarPathQueryStart = localVarPath.indexOf("?");
      const localVarRequestOptions = Object.assign({ method: "DELETE" }, options);
      const localVarHeaderParameter = options.headers ? new Headers(options.headers) : new Headers();
      const localVarQueryParameter = new URLSearchParams(localVarPathQueryStart !== -1 ? localVarPath.substring(localVarPathQueryStart + 1) : "");
      if (localVarPathQueryStart !== -1) {
        localVarPath = localVarPath.substring(0, localVarPathQueryStart);
      }
      localVarRequestOptions.headers = localVarHeaderParameter;
      const localVarQueryParameterString = localVarQueryParameter.toString();
      if (localVarQueryParameterString) {
        localVarPath += "?" + localVarQueryParameterString;
      }
      return {
        url: localVarPath,
        options: localVarRequestOptions
      };
    },
    /**
     * @summary Get Collection
     * @param {string} collectionName
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCollection(collectionName, options = {}) {
      if (collectionName === null || collectionName === void 0) {
        throw new RequiredError("collectionName", "Required parameter collectionName was null or undefined when calling getCollection.");
      }
      let localVarPath = `/api/v1/collections/{collection_name}`.replace("{collection_name}", encodeURIComponent(String(collectionName)));
      const localVarPathQueryStart = localVarPath.indexOf("?");
      const localVarRequestOptions = Object.assign({ method: "GET" }, options);
      const localVarHeaderParameter = options.headers ? new Headers(options.headers) : new Headers();
      const localVarQueryParameter = new URLSearchParams(localVarPathQueryStart !== -1 ? localVarPath.substring(localVarPathQueryStart + 1) : "");
      if (localVarPathQueryStart !== -1) {
        localVarPath = localVarPath.substring(0, localVarPathQueryStart);
      }
      localVarRequestOptions.headers = localVarHeaderParameter;
      const localVarQueryParameterString = localVarQueryParameter.toString();
      if (localVarQueryParameterString) {
        localVarPath += "?" + localVarQueryParameterString;
      }
      return {
        url: localVarPath,
        options: localVarRequestOptions
      };
    },
    /**
     * @summary Get Nearest Neighbors
     * @param {string} collectionId
     * @param {Api.QueryEmbedding} request
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    getNearestNeighbors(collectionId, request, options = {}) {
      if (collectionId === null || collectionId === void 0) {
        throw new RequiredError("collectionId", "Required parameter collectionId was null or undefined when calling getNearestNeighbors.");
      }
      if (request === null || request === void 0) {
        throw new RequiredError("request", "Required parameter request was null or undefined when calling getNearestNeighbors.");
      }
      let localVarPath = `/api/v1/collections/{collection_id}/query`.replace("{collection_id}", encodeURIComponent(String(collectionId)));
      const localVarPathQueryStart = localVarPath.indexOf("?");
      const localVarRequestOptions = Object.assign({ method: "POST" }, options);
      const localVarHeaderParameter = options.headers ? new Headers(options.headers) : new Headers();
      const localVarQueryParameter = new URLSearchParams(localVarPathQueryStart !== -1 ? localVarPath.substring(localVarPathQueryStart + 1) : "");
      if (localVarPathQueryStart !== -1) {
        localVarPath = localVarPath.substring(0, localVarPathQueryStart);
      }
      localVarHeaderParameter.set("Content-Type", "application/json");
      localVarRequestOptions.headers = localVarHeaderParameter;
      if (request !== void 0) {
        localVarRequestOptions.body = JSON.stringify(request || {});
      }
      const localVarQueryParameterString = localVarQueryParameter.toString();
      if (localVarQueryParameterString) {
        localVarPath += "?" + localVarQueryParameterString;
      }
      return {
        url: localVarPath,
        options: localVarRequestOptions
      };
    },
    /**
     * @summary Heartbeat
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    heartbeat(options = {}) {
      let localVarPath = `/api/v1/heartbeat`;
      const localVarPathQueryStart = localVarPath.indexOf("?");
      const localVarRequestOptions = Object.assign({ method: "GET" }, options);
      const localVarHeaderParameter = options.headers ? new Headers(options.headers) : new Headers();
      const localVarQueryParameter = new URLSearchParams(localVarPathQueryStart !== -1 ? localVarPath.substring(localVarPathQueryStart + 1) : "");
      if (localVarPathQueryStart !== -1) {
        localVarPath = localVarPath.substring(0, localVarPathQueryStart);
      }
      localVarRequestOptions.headers = localVarHeaderParameter;
      const localVarQueryParameterString = localVarQueryParameter.toString();
      if (localVarQueryParameterString) {
        localVarPath += "?" + localVarQueryParameterString;
      }
      return {
        url: localVarPath,
        options: localVarRequestOptions
      };
    },
    /**
     * @summary List Collections
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCollections(options = {}) {
      let localVarPath = `/api/v1/collections`;
      const localVarPathQueryStart = localVarPath.indexOf("?");
      const localVarRequestOptions = Object.assign({ method: "GET" }, options);
      const localVarHeaderParameter = options.headers ? new Headers(options.headers) : new Headers();
      const localVarQueryParameter = new URLSearchParams(localVarPathQueryStart !== -1 ? localVarPath.substring(localVarPathQueryStart + 1) : "");
      if (localVarPathQueryStart !== -1) {
        localVarPath = localVarPath.substring(0, localVarPathQueryStart);
      }
      localVarRequestOptions.headers = localVarHeaderParameter;
      const localVarQueryParameterString = localVarQueryParameter.toString();
      if (localVarQueryParameterString) {
        localVarPath += "?" + localVarQueryParameterString;
      }
      return {
        url: localVarPath,
        options: localVarRequestOptions
      };
    },
    /**
     * @summary Reset
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    reset(options = {}) {
      let localVarPath = `/api/v1/reset`;
      const localVarPathQueryStart = localVarPath.indexOf("?");
      const localVarRequestOptions = Object.assign({ method: "POST" }, options);
      const localVarHeaderParameter = options.headers ? new Headers(options.headers) : new Headers();
      const localVarQueryParameter = new URLSearchParams(localVarPathQueryStart !== -1 ? localVarPath.substring(localVarPathQueryStart + 1) : "");
      if (localVarPathQueryStart !== -1) {
        localVarPath = localVarPath.substring(0, localVarPathQueryStart);
      }
      localVarRequestOptions.headers = localVarHeaderParameter;
      const localVarQueryParameterString = localVarQueryParameter.toString();
      if (localVarQueryParameterString) {
        localVarPath += "?" + localVarQueryParameterString;
      }
      return {
        url: localVarPath,
        options: localVarRequestOptions
      };
    },
    /**
     * @summary Root
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    root(options = {}) {
      let localVarPath = `/api/v1`;
      const localVarPathQueryStart = localVarPath.indexOf("?");
      const localVarRequestOptions = Object.assign({ method: "GET" }, options);
      const localVarHeaderParameter = options.headers ? new Headers(options.headers) : new Headers();
      const localVarQueryParameter = new URLSearchParams(localVarPathQueryStart !== -1 ? localVarPath.substring(localVarPathQueryStart + 1) : "");
      if (localVarPathQueryStart !== -1) {
        localVarPath = localVarPath.substring(0, localVarPathQueryStart);
      }
      localVarRequestOptions.headers = localVarHeaderParameter;
      const localVarQueryParameterString = localVarQueryParameter.toString();
      if (localVarQueryParameterString) {
        localVarPath += "?" + localVarQueryParameterString;
      }
      return {
        url: localVarPath,
        options: localVarRequestOptions
      };
    },
    /**
     * @summary Update
     * @param {string} collectionId
     * @param {Api.UpdateEmbedding} request
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    update(collectionId, request, options = {}) {
      if (collectionId === null || collectionId === void 0) {
        throw new RequiredError("collectionId", "Required parameter collectionId was null or undefined when calling update.");
      }
      if (request === null || request === void 0) {
        throw new RequiredError("request", "Required parameter request was null or undefined when calling update.");
      }
      let localVarPath = `/api/v1/collections/{collection_id}/update`.replace("{collection_id}", encodeURIComponent(String(collectionId)));
      const localVarPathQueryStart = localVarPath.indexOf("?");
      const localVarRequestOptions = Object.assign({ method: "POST" }, options);
      const localVarHeaderParameter = options.headers ? new Headers(options.headers) : new Headers();
      const localVarQueryParameter = new URLSearchParams(localVarPathQueryStart !== -1 ? localVarPath.substring(localVarPathQueryStart + 1) : "");
      if (localVarPathQueryStart !== -1) {
        localVarPath = localVarPath.substring(0, localVarPathQueryStart);
      }
      localVarHeaderParameter.set("Content-Type", "application/json");
      localVarRequestOptions.headers = localVarHeaderParameter;
      if (request !== void 0) {
        localVarRequestOptions.body = JSON.stringify(request || {});
      }
      const localVarQueryParameterString = localVarQueryParameter.toString();
      if (localVarQueryParameterString) {
        localVarPath += "?" + localVarQueryParameterString;
      }
      return {
        url: localVarPath,
        options: localVarRequestOptions
      };
    },
    /**
     * @summary Update Collection
     * @param {string} collectionId
     * @param {Api.UpdateCollection} request
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCollection(collectionId, request, options = {}) {
      if (collectionId === null || collectionId === void 0) {
        throw new RequiredError("collectionId", "Required parameter collectionId was null or undefined when calling updateCollection.");
      }
      if (request === null || request === void 0) {
        throw new RequiredError("request", "Required parameter request was null or undefined when calling updateCollection.");
      }
      let localVarPath = `/api/v1/collections/{collection_id}`.replace("{collection_id}", encodeURIComponent(String(collectionId)));
      const localVarPathQueryStart = localVarPath.indexOf("?");
      const localVarRequestOptions = Object.assign({ method: "PUT" }, options);
      const localVarHeaderParameter = options.headers ? new Headers(options.headers) : new Headers();
      const localVarQueryParameter = new URLSearchParams(localVarPathQueryStart !== -1 ? localVarPath.substring(localVarPathQueryStart + 1) : "");
      if (localVarPathQueryStart !== -1) {
        localVarPath = localVarPath.substring(0, localVarPathQueryStart);
      }
      localVarHeaderParameter.set("Content-Type", "application/json");
      localVarRequestOptions.headers = localVarHeaderParameter;
      if (request !== void 0) {
        localVarRequestOptions.body = JSON.stringify(request || {});
      }
      const localVarQueryParameterString = localVarQueryParameter.toString();
      if (localVarQueryParameterString) {
        localVarPath += "?" + localVarQueryParameterString;
      }
      return {
        url: localVarPath,
        options: localVarRequestOptions
      };
    },
    /**
     * @summary Upsert
     * @param {string} collectionId
     * @param {Api.AddEmbedding} request
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    upsert(collectionId, request, options = {}) {
      if (collectionId === null || collectionId === void 0) {
        throw new RequiredError("collectionId", "Required parameter collectionId was null or undefined when calling upsert.");
      }
      if (request === null || request === void 0) {
        throw new RequiredError("request", "Required parameter request was null or undefined when calling upsert.");
      }
      let localVarPath = `/api/v1/collections/{collection_id}/upsert`.replace("{collection_id}", encodeURIComponent(String(collectionId)));
      const localVarPathQueryStart = localVarPath.indexOf("?");
      const localVarRequestOptions = Object.assign({ method: "POST" }, options);
      const localVarHeaderParameter = options.headers ? new Headers(options.headers) : new Headers();
      const localVarQueryParameter = new URLSearchParams(localVarPathQueryStart !== -1 ? localVarPath.substring(localVarPathQueryStart + 1) : "");
      if (localVarPathQueryStart !== -1) {
        localVarPath = localVarPath.substring(0, localVarPathQueryStart);
      }
      localVarHeaderParameter.set("Content-Type", "application/json");
      localVarRequestOptions.headers = localVarHeaderParameter;
      if (request !== void 0) {
        localVarRequestOptions.body = JSON.stringify(request || {});
      }
      const localVarQueryParameterString = localVarQueryParameter.toString();
      if (localVarQueryParameterString) {
        localVarPath += "?" + localVarQueryParameterString;
      }
      return {
        url: localVarPath,
        options: localVarRequestOptions
      };
    },
    /**
     * @summary Version
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    version(options = {}) {
      let localVarPath = `/api/v1/version`;
      const localVarPathQueryStart = localVarPath.indexOf("?");
      const localVarRequestOptions = Object.assign({ method: "GET" }, options);
      const localVarHeaderParameter = options.headers ? new Headers(options.headers) : new Headers();
      const localVarQueryParameter = new URLSearchParams(localVarPathQueryStart !== -1 ? localVarPath.substring(localVarPathQueryStart + 1) : "");
      if (localVarPathQueryStart !== -1) {
        localVarPath = localVarPath.substring(0, localVarPathQueryStart);
      }
      localVarRequestOptions.headers = localVarHeaderParameter;
      const localVarQueryParameterString = localVarQueryParameter.toString();
      if (localVarQueryParameterString) {
        localVarPath += "?" + localVarQueryParameterString;
      }
      return {
        url: localVarPath,
        options: localVarRequestOptions
      };
    }
  };
};
var ApiApiFp = function(configuration) {
  return {
    /**
     * @summary Add
     * @param {string} collectionId
     * @param {Api.AddEmbedding} request
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    add(collectionId, request, options) {
      const localVarFetchArgs = ApiApiFetchParamCreator(configuration).add(collectionId, request, options);
      return (fetch2 = defaultFetch, basePath = BASE_PATH) => {
        return fetch2(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
          const contentType = response.headers.get("Content-Type");
          const mimeType = contentType ? contentType.replace(/;.*/, "") : void 0;
          if (response.status === 201) {
            if (mimeType === "application/json") {
              return response.json();
            }
            throw response;
          }
          if (response.status === 422) {
            if (mimeType === "application/json") {
              throw response;
            }
            throw response;
          }
          throw response;
        });
      };
    },
    /**
     * @summary Delete
     * @param {string} collectionId
     * @param {Api.DeleteEmbedding} request
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    aDelete(collectionId, request, options) {
      const localVarFetchArgs = ApiApiFetchParamCreator(configuration).aDelete(collectionId, request, options);
      return (fetch2 = defaultFetch, basePath = BASE_PATH) => {
        return fetch2(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
          const contentType = response.headers.get("Content-Type");
          const mimeType = contentType ? contentType.replace(/;.*/, "") : void 0;
          if (response.status === 200) {
            if (mimeType === "application/json") {
              return response.json();
            }
            throw response;
          }
          if (response.status === 422) {
            if (mimeType === "application/json") {
              throw response;
            }
            throw response;
          }
          throw response;
        });
      };
    },
    /**
     * @summary Get
     * @param {string} collectionId
     * @param {Api.GetEmbedding} request
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    aGet(collectionId, request, options) {
      const localVarFetchArgs = ApiApiFetchParamCreator(configuration).aGet(collectionId, request, options);
      return (fetch2 = defaultFetch, basePath = BASE_PATH) => {
        return fetch2(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
          const contentType = response.headers.get("Content-Type");
          const mimeType = contentType ? contentType.replace(/;.*/, "") : void 0;
          if (response.status === 200) {
            if (mimeType === "application/json") {
              return response.json();
            }
            throw response;
          }
          if (response.status === 422) {
            if (mimeType === "application/json") {
              throw response;
            }
            throw response;
          }
          throw response;
        });
      };
    },
    /**
     * @summary Count
     * @param {string} collectionId
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    count(collectionId, options) {
      const localVarFetchArgs = ApiApiFetchParamCreator(configuration).count(collectionId, options);
      return (fetch2 = defaultFetch, basePath = BASE_PATH) => {
        return fetch2(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
          const contentType = response.headers.get("Content-Type");
          const mimeType = contentType ? contentType.replace(/;.*/, "") : void 0;
          if (response.status === 200) {
            if (mimeType === "application/json") {
              return response.json();
            }
            throw response;
          }
          if (response.status === 422) {
            if (mimeType === "application/json") {
              throw response;
            }
            throw response;
          }
          throw response;
        });
      };
    },
    /**
     * @summary Create Collection
     * @param {Api.CreateCollection} request
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCollection(request, options) {
      const localVarFetchArgs = ApiApiFetchParamCreator(configuration).createCollection(request, options);
      return (fetch2 = defaultFetch, basePath = BASE_PATH) => {
        return fetch2(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
          const contentType = response.headers.get("Content-Type");
          const mimeType = contentType ? contentType.replace(/;.*/, "") : void 0;
          if (response.status === 200) {
            if (mimeType === "application/json") {
              return response.json();
            }
            throw response;
          }
          if (response.status === 422) {
            if (mimeType === "application/json") {
              throw response;
            }
            throw response;
          }
          throw response;
        });
      };
    },
    /**
     * @summary Delete Collection
     * @param {string} collectionName
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCollection(collectionName, options) {
      const localVarFetchArgs = ApiApiFetchParamCreator(configuration).deleteCollection(collectionName, options);
      return (fetch2 = defaultFetch, basePath = BASE_PATH) => {
        return fetch2(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
          const contentType = response.headers.get("Content-Type");
          const mimeType = contentType ? contentType.replace(/;.*/, "") : void 0;
          if (response.status === 200) {
            if (mimeType === "application/json") {
              return response.json();
            }
            throw response;
          }
          if (response.status === 422) {
            if (mimeType === "application/json") {
              throw response;
            }
            throw response;
          }
          throw response;
        });
      };
    },
    /**
     * @summary Get Collection
     * @param {string} collectionName
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCollection(collectionName, options) {
      const localVarFetchArgs = ApiApiFetchParamCreator(configuration).getCollection(collectionName, options);
      return (fetch2 = defaultFetch, basePath = BASE_PATH) => {
        return fetch2(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
          const contentType = response.headers.get("Content-Type");
          const mimeType = contentType ? contentType.replace(/;.*/, "") : void 0;
          if (response.status === 200) {
            if (mimeType === "application/json") {
              return response.json();
            }
            throw response;
          }
          if (response.status === 422) {
            if (mimeType === "application/json") {
              throw response;
            }
            throw response;
          }
          throw response;
        });
      };
    },
    /**
     * @summary Get Nearest Neighbors
     * @param {string} collectionId
     * @param {Api.QueryEmbedding} request
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    getNearestNeighbors(collectionId, request, options) {
      const localVarFetchArgs = ApiApiFetchParamCreator(configuration).getNearestNeighbors(collectionId, request, options);
      return (fetch2 = defaultFetch, basePath = BASE_PATH) => {
        return fetch2(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
          const contentType = response.headers.get("Content-Type");
          const mimeType = contentType ? contentType.replace(/;.*/, "") : void 0;
          if (response.status === 200) {
            if (mimeType === "application/json") {
              return response.json();
            }
            throw response;
          }
          if (response.status === 422) {
            if (mimeType === "application/json") {
              throw response;
            }
            throw response;
          }
          throw response;
        });
      };
    },
    /**
     * @summary Heartbeat
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    heartbeat(options) {
      const localVarFetchArgs = ApiApiFetchParamCreator(configuration).heartbeat(options);
      return (fetch2 = defaultFetch, basePath = BASE_PATH) => {
        return fetch2(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
          const contentType = response.headers.get("Content-Type");
          const mimeType = contentType ? contentType.replace(/;.*/, "") : void 0;
          if (response.status === 200) {
            if (mimeType === "application/json") {
              return response.json();
            }
            throw response;
          }
          throw response;
        });
      };
    },
    /**
     * @summary List Collections
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCollections(options) {
      const localVarFetchArgs = ApiApiFetchParamCreator(configuration).listCollections(options);
      return (fetch2 = defaultFetch, basePath = BASE_PATH) => {
        return fetch2(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
          const contentType = response.headers.get("Content-Type");
          const mimeType = contentType ? contentType.replace(/;.*/, "") : void 0;
          if (response.status === 200) {
            if (mimeType === "application/json") {
              return response.json();
            }
            throw response;
          }
          throw response;
        });
      };
    },
    /**
     * @summary Reset
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    reset(options) {
      const localVarFetchArgs = ApiApiFetchParamCreator(configuration).reset(options);
      return (fetch2 = defaultFetch, basePath = BASE_PATH) => {
        return fetch2(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
          const contentType = response.headers.get("Content-Type");
          const mimeType = contentType ? contentType.replace(/;.*/, "") : void 0;
          if (response.status === 200) {
            if (mimeType === "application/json") {
              return response.json();
            }
            throw response;
          }
          throw response;
        });
      };
    },
    /**
     * @summary Root
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    root(options) {
      const localVarFetchArgs = ApiApiFetchParamCreator(configuration).root(options);
      return (fetch2 = defaultFetch, basePath = BASE_PATH) => {
        return fetch2(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
          const contentType = response.headers.get("Content-Type");
          const mimeType = contentType ? contentType.replace(/;.*/, "") : void 0;
          if (response.status === 200) {
            if (mimeType === "application/json") {
              return response.json();
            }
            throw response;
          }
          throw response;
        });
      };
    },
    /**
     * @summary Update
     * @param {string} collectionId
     * @param {Api.UpdateEmbedding} request
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    update(collectionId, request, options) {
      const localVarFetchArgs = ApiApiFetchParamCreator(configuration).update(collectionId, request, options);
      return (fetch2 = defaultFetch, basePath = BASE_PATH) => {
        return fetch2(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
          const contentType = response.headers.get("Content-Type");
          const mimeType = contentType ? contentType.replace(/;.*/, "") : void 0;
          if (response.status === 200) {
            if (mimeType === "application/json") {
              return response.json();
            }
            throw response;
          }
          if (response.status === 422) {
            if (mimeType === "application/json") {
              throw response;
            }
            throw response;
          }
          throw response;
        });
      };
    },
    /**
     * @summary Update Collection
     * @param {string} collectionId
     * @param {Api.UpdateCollection} request
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCollection(collectionId, request, options) {
      const localVarFetchArgs = ApiApiFetchParamCreator(configuration).updateCollection(collectionId, request, options);
      return (fetch2 = defaultFetch, basePath = BASE_PATH) => {
        return fetch2(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
          const contentType = response.headers.get("Content-Type");
          const mimeType = contentType ? contentType.replace(/;.*/, "") : void 0;
          if (response.status === 200) {
            if (mimeType === "application/json") {
              return response.json();
            }
            throw response;
          }
          if (response.status === 422) {
            if (mimeType === "application/json") {
              throw response;
            }
            throw response;
          }
          throw response;
        });
      };
    },
    /**
     * @summary Upsert
     * @param {string} collectionId
     * @param {Api.AddEmbedding} request
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    upsert(collectionId, request, options) {
      const localVarFetchArgs = ApiApiFetchParamCreator(configuration).upsert(collectionId, request, options);
      return (fetch2 = defaultFetch, basePath = BASE_PATH) => {
        return fetch2(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
          const contentType = response.headers.get("Content-Type");
          const mimeType = contentType ? contentType.replace(/;.*/, "") : void 0;
          if (response.status === 200) {
            if (mimeType === "application/json") {
              return response.json();
            }
            throw response;
          }
          if (response.status === 422) {
            if (mimeType === "application/json") {
              throw response;
            }
            throw response;
          }
          throw response;
        });
      };
    },
    /**
     * @summary Version
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    version(options) {
      const localVarFetchArgs = ApiApiFetchParamCreator(configuration).version(options);
      return (fetch2 = defaultFetch, basePath = BASE_PATH) => {
        return fetch2(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
          const contentType = response.headers.get("Content-Type");
          const mimeType = contentType ? contentType.replace(/;.*/, "") : void 0;
          if (response.status === 200) {
            if (mimeType === "application/json") {
              return response.json();
            }
            throw response;
          }
          throw response;
        });
      };
    }
  };
};
var ApiApi = class extends BaseAPI {
  /**
   * @summary Add
   * @param {string} collectionId
   * @param {Api.AddEmbedding} request
   * @param {RequestInit} [options] Override http request option.
   * @throws {RequiredError}
   */
  add(collectionId, request, options) {
    return ApiApiFp(this.configuration).add(collectionId, request, options)(this.fetch, this.basePath);
  }
  /**
   * @summary Delete
   * @param {string} collectionId
   * @param {Api.DeleteEmbedding} request
   * @param {RequestInit} [options] Override http request option.
   * @throws {RequiredError}
   */
  aDelete(collectionId, request, options) {
    return ApiApiFp(this.configuration).aDelete(collectionId, request, options)(this.fetch, this.basePath);
  }
  /**
   * @summary Get
   * @param {string} collectionId
   * @param {Api.GetEmbedding} request
   * @param {RequestInit} [options] Override http request option.
   * @throws {RequiredError}
   */
  aGet(collectionId, request, options) {
    return ApiApiFp(this.configuration).aGet(collectionId, request, options)(this.fetch, this.basePath);
  }
  /**
   * @summary Count
   * @param {string} collectionId
   * @param {RequestInit} [options] Override http request option.
   * @throws {RequiredError}
   */
  count(collectionId, options) {
    return ApiApiFp(this.configuration).count(collectionId, options)(this.fetch, this.basePath);
  }
  /**
   * @summary Create Collection
   * @param {Api.CreateCollection} request
   * @param {RequestInit} [options] Override http request option.
   * @throws {RequiredError}
   */
  createCollection(request, options) {
    return ApiApiFp(this.configuration).createCollection(request, options)(this.fetch, this.basePath);
  }
  /**
   * @summary Delete Collection
   * @param {string} collectionName
   * @param {RequestInit} [options] Override http request option.
   * @throws {RequiredError}
   */
  deleteCollection(collectionName, options) {
    return ApiApiFp(this.configuration).deleteCollection(collectionName, options)(this.fetch, this.basePath);
  }
  /**
   * @summary Get Collection
   * @param {string} collectionName
   * @param {RequestInit} [options] Override http request option.
   * @throws {RequiredError}
   */
  getCollection(collectionName, options) {
    return ApiApiFp(this.configuration).getCollection(collectionName, options)(this.fetch, this.basePath);
  }
  /**
   * @summary Get Nearest Neighbors
   * @param {string} collectionId
   * @param {Api.QueryEmbedding} request
   * @param {RequestInit} [options] Override http request option.
   * @throws {RequiredError}
   */
  getNearestNeighbors(collectionId, request, options) {
    return ApiApiFp(this.configuration).getNearestNeighbors(collectionId, request, options)(this.fetch, this.basePath);
  }
  /**
   * @summary Heartbeat
   * @param {RequestInit} [options] Override http request option.
   * @throws {RequiredError}
   */
  heartbeat(options) {
    return ApiApiFp(this.configuration).heartbeat(options)(this.fetch, this.basePath);
  }
  /**
   * @summary List Collections
   * @param {RequestInit} [options] Override http request option.
   * @throws {RequiredError}
   */
  listCollections(options) {
    return ApiApiFp(this.configuration).listCollections(options)(this.fetch, this.basePath);
  }
  /**
   * @summary Reset
   * @param {RequestInit} [options] Override http request option.
   * @throws {RequiredError}
   */
  reset(options) {
    return ApiApiFp(this.configuration).reset(options)(this.fetch, this.basePath);
  }
  /**
   * @summary Root
   * @param {RequestInit} [options] Override http request option.
   * @throws {RequiredError}
   */
  root(options) {
    return ApiApiFp(this.configuration).root(options)(this.fetch, this.basePath);
  }
  /**
   * @summary Update
   * @param {string} collectionId
   * @param {Api.UpdateEmbedding} request
   * @param {RequestInit} [options] Override http request option.
   * @throws {RequiredError}
   */
  update(collectionId, request, options) {
    return ApiApiFp(this.configuration).update(collectionId, request, options)(this.fetch, this.basePath);
  }
  /**
   * @summary Update Collection
   * @param {string} collectionId
   * @param {Api.UpdateCollection} request
   * @param {RequestInit} [options] Override http request option.
   * @throws {RequiredError}
   */
  updateCollection(collectionId, request, options) {
    return ApiApiFp(this.configuration).updateCollection(collectionId, request, options)(this.fetch, this.basePath);
  }
  /**
   * @summary Upsert
   * @param {string} collectionId
   * @param {Api.AddEmbedding} request
   * @param {RequestInit} [options] Override http request option.
   * @throws {RequiredError}
   */
  upsert(collectionId, request, options) {
    return ApiApiFp(this.configuration).upsert(collectionId, request, options)(this.fetch, this.basePath);
  }
  /**
   * @summary Version
   * @param {RequestInit} [options] Override http request option.
   * @throws {RequiredError}
   */
  version(options) {
    return ApiApiFp(this.configuration).version(options)(this.fetch, this.basePath);
  }
};
var Api;
((Api2) => {
  let GetEmbedding;
  ((GetEmbedding2) => {
    let Include;
    ((Include2) => {
      let EnumValueEnum;
      ((EnumValueEnum5) => {
        EnumValueEnum5["Documents"] = "documents";
      })(EnumValueEnum = Include2.EnumValueEnum || (Include2.EnumValueEnum = {}));
      let EnumValueEnum2;
      ((EnumValueEnum22) => {
        EnumValueEnum22["Embeddings"] = "embeddings";
      })(EnumValueEnum2 = Include2.EnumValueEnum2 || (Include2.EnumValueEnum2 = {}));
      let EnumValueEnum3;
      ((EnumValueEnum32) => {
        EnumValueEnum32["Metadatas"] = "metadatas";
      })(EnumValueEnum3 = Include2.EnumValueEnum3 || (Include2.EnumValueEnum3 = {}));
      let EnumValueEnum4;
      ((EnumValueEnum42) => {
        EnumValueEnum42["Distances"] = "distances";
      })(EnumValueEnum4 = Include2.EnumValueEnum4 || (Include2.EnumValueEnum4 = {}));
    })(Include = GetEmbedding2.Include || (GetEmbedding2.Include = {}));
  })(GetEmbedding = Api2.GetEmbedding || (Api2.GetEmbedding = {}));
  let QueryEmbedding;
  ((QueryEmbedding2) => {
    let Include;
    ((Include2) => {
      let EnumValueEnum;
      ((EnumValueEnum5) => {
        EnumValueEnum5["Documents"] = "documents";
      })(EnumValueEnum = Include2.EnumValueEnum || (Include2.EnumValueEnum = {}));
      let EnumValueEnum2;
      ((EnumValueEnum22) => {
        EnumValueEnum22["Embeddings"] = "embeddings";
      })(EnumValueEnum2 = Include2.EnumValueEnum2 || (Include2.EnumValueEnum2 = {}));
      let EnumValueEnum3;
      ((EnumValueEnum32) => {
        EnumValueEnum32["Metadatas"] = "metadatas";
      })(EnumValueEnum3 = Include2.EnumValueEnum3 || (Include2.EnumValueEnum3 = {}));
      let EnumValueEnum4;
      ((EnumValueEnum42) => {
        EnumValueEnum42["Distances"] = "distances";
      })(EnumValueEnum4 = Include2.EnumValueEnum4 || (Include2.EnumValueEnum4 = {}));
    })(Include = QueryEmbedding2.Include || (QueryEmbedding2.Include = {}));
  })(QueryEmbedding = Api2.QueryEmbedding || (Api2.QueryEmbedding = {}));
})(Api || (Api = {}));
var Configuration = class {
  constructor(param = {}) {
    this.apiKey = param.apiKey;
    this.username = param.username;
    this.password = param.password;
    this.authorization = param.authorization;
    this.basePath = param.basePath;
  }
};
function toArray(obj) {
  if (Array.isArray(obj)) {
    return obj;
  } else {
    return [obj];
  }
}
function toArrayOfArrays(obj) {
  if (Array.isArray(obj[0])) {
    return obj;
  } else {
    return [obj];
  }
}
function repack(value) {
  if (Boolean(value) && typeof value === "object") {
    if (Array.isArray(value)) {
      return new Array(...value);
    } else {
      return __spreadValues({}, value);
    }
  } else {
    return value;
  }
}
async function handleError(error) {
  if (error instanceof Response) {
    try {
      const res = await error.json();
      if ("error" in res) {
        return { error: res.error };
      }
    } catch (e) {
      return {
        //@ts-ignore
        error: e && typeof e === "object" && "message" in e ? e.message : "unknown error"
      };
    }
  }
  return { error };
}
async function handleSuccess(response) {
  switch (true) {
    case response instanceof Response:
      return repack(await response.json());
    case typeof response === "string":
      return repack(response);
    default:
      return repack(response);
  }
}
var Collection = class {
  /**
   * @ignore
   */
  constructor(name, id, api, metadata, embeddingFunction) {
    this.name = name;
    this.id = id;
    this.metadata = metadata;
    this.api = api;
    if (embeddingFunction !== void 0)
      this.embeddingFunction = embeddingFunction;
  }
  /**
   * @ignore
   */
  setName(name) {
    this.name = name;
  }
  /**
   * @ignore
   */
  setMetadata(metadata) {
    this.metadata = metadata;
  }
  /**
   * @ignore
   */
  async validate(require_embeddings_or_documents, ids, embeddings, metadatas, documents) {
    if (require_embeddings_or_documents) {
      if (embeddings === void 0 && documents === void 0) {
        throw new Error(
          "embeddings and documents cannot both be undefined"
        );
      }
    }
    if (embeddings === void 0 && documents !== void 0) {
      const documentsArray2 = toArray(documents);
      if (this.embeddingFunction !== void 0) {
        embeddings = await this.embeddingFunction.generate(documentsArray2);
      } else {
        throw new Error(
          "embeddingFunction is undefined. Please configure an embedding function"
        );
      }
    }
    if (embeddings === void 0)
      throw new Error("embeddings is undefined but shouldnt be");
    const idsArray = toArray(ids);
    const embeddingsArray = toArrayOfArrays(embeddings);
    let metadatasArray;
    if (metadatas === void 0) {
      metadatasArray = void 0;
    } else {
      metadatasArray = toArray(metadatas);
    }
    let documentsArray;
    if (documents === void 0) {
      documentsArray = void 0;
    } else {
      documentsArray = toArray(documents);
    }
    for (let i = 0; i < idsArray.length; i += 1) {
      if (typeof idsArray[i] !== "string") {
        throw new Error(
          `Expected ids to be strings, found ${typeof idsArray[i]} at index ${i}`
        );
      }
    }
    if (embeddingsArray !== void 0 && idsArray.length !== embeddingsArray.length || metadatasArray !== void 0 && idsArray.length !== metadatasArray.length || documentsArray !== void 0 && idsArray.length !== documentsArray.length) {
      throw new Error(
        "ids, embeddings, metadatas, and documents must all be the same length"
      );
    }
    const uniqueIds = new Set(idsArray);
    if (uniqueIds.size !== idsArray.length) {
      const duplicateIds = idsArray.filter((item, index) => idsArray.indexOf(item) !== index);
      throw new Error(
        `Expected IDs to be unique, found duplicates for: ${duplicateIds}`
      );
    }
    return [idsArray, embeddingsArray, metadatasArray, documentsArray];
  }
  /**
   * Add items to the collection
   * @param {Object} params - The parameters for the query.
   * @param {ID | IDs} [params.ids] - IDs of the items to add.
   * @param {Embedding | Embeddings} [params.embeddings] - Optional embeddings of the items to add.
   * @param {Metadata | Metadatas} [params.metadatas] - Optional metadata of the items to add.
   * @param {Document | Documents} [params.documents] - Optional documents of the items to add.
  * @returns {Promise<AddResponse>} - The response from the API. True if successful.
   *
   * @example
   * ```typescript
   * const response = await collection.add({
   *   ids: ["id1", "id2"],
   *   embeddings: [[1, 2, 3], [4, 5, 6]],
   *   metadatas: [{ "key": "value" }, { "key": "value" }],
   *   documents: ["document1", "document2"]
   * });
   * ```
   */
  async add({
    ids,
    embeddings,
    metadatas,
    documents
  }) {
    const [idsArray, embeddingsArray, metadatasArray, documentsArray] = await this.validate(
      true,
      ids,
      embeddings,
      metadatas,
      documents
    );
    const response = await this.api.add(
      this.id,
      {
        // @ts-ignore
        ids: idsArray,
        embeddings: embeddingsArray,
        // We know this is defined because of the validate function
        // @ts-ignore
        documents: documentsArray,
        // @ts-ignore
        metadatas: metadatasArray
      },
      this.api.options
    ).then(handleSuccess).catch(handleError);
    return response;
  }
  /**
   * Upsert items to the collection
   * @param {Object} params - The parameters for the query.
   * @param {ID | IDs} [params.ids] - IDs of the items to add.
   * @param {Embedding | Embeddings} [params.embeddings] - Optional embeddings of the items to add.
   * @param {Metadata | Metadatas} [params.metadatas] - Optional metadata of the items to add.
   * @param {Document | Documents} [params.documents] - Optional documents of the items to add.
   * @returns {Promise<boolean>} - The response from the API. True if successful.
   *
   * @example
   * ```typescript
   * const response = await collection.upsert({
   *   ids: ["id1", "id2"],
   *   embeddings: [[1, 2, 3], [4, 5, 6]],
   *   metadatas: [{ "key": "value" }, { "key": "value" }],
   *   documents: ["document1", "document2"],
   * });
   * ```
   */
  async upsert({
    ids,
    embeddings,
    metadatas,
    documents
  }) {
    const [idsArray, embeddingsArray, metadatasArray, documentsArray] = await this.validate(
      true,
      ids,
      embeddings,
      metadatas,
      documents
    );
    const response = await this.api.upsert(
      this.id,
      {
        //@ts-ignore
        ids: idsArray,
        embeddings: embeddingsArray,
        // We know this is defined because of the validate function
        //@ts-ignore
        documents: documentsArray,
        //@ts-ignore
        metadatas: metadatasArray
      },
      this.api.options
    ).then(handleSuccess).catch(handleError);
    return response;
  }
  /**
   * Count the number of items in the collection
   * @returns {Promise<number>} - The response from the API.
   *
   * @example
   * ```typescript
   * const response = await collection.count();
   * ```
   */
  async count() {
    const response = await this.api.count(this.id, this.api.options);
    return handleSuccess(response);
  }
  /**
   * Modify the collection name or metadata
   * @param {Object} params - The parameters for the query.
   * @param {string} [params.name] - Optional new name for the collection.
   * @param {CollectionMetadata} [params.metadata] - Optional new metadata for the collection.
   * @returns {Promise<void>} - The response from the API.
   *
   * @example
   * ```typescript
   * const response = await collection.modify({
   *   name: "new name",
   *   metadata: { "key": "value" },
   * });
   * ```
   */
  async modify({
    name,
    metadata
  } = {}) {
    const response = await this.api.updateCollection(
      this.id,
      {
        new_name: name,
        new_metadata: metadata
      },
      this.api.options
    ).then(handleSuccess).catch(handleError);
    this.setName(name || this.name);
    this.setMetadata(metadata || this.metadata);
    return response;
  }
  /**
   * Get items from the collection
   * @param {Object} params - The parameters for the query.
   * @param {ID | IDs} [params.ids] - Optional IDs of the items to get.
   * @param {Where} [params.where] - Optional where clause to filter items by.
   * @param {PositiveInteger} [params.limit] - Optional limit on the number of items to get.
   * @param {PositiveInteger} [params.offset] - Optional offset on the items to get.
   * @param {IncludeEnum[]} [params.include] - Optional list of items to include in the response.
   * @param {WhereDocument} [params.whereDocument] - Optional where clause to filter items by.
   * @returns {Promise<GetResponse>} - The response from the server.
   *
   * @example
   * ```typescript
   * const response = await collection.get({
   *   ids: ["id1", "id2"],
   *   where: { "key": "value" },
   *   limit: 10,
   *   offset: 0,
   *   include: ["embeddings", "metadatas", "documents"],
   *   whereDocument: { $contains: "value" },
   * });
   * ```
   */
  async get({
    ids,
    where,
    limit,
    offset,
    include,
    whereDocument
  } = {}) {
    let idsArray = void 0;
    if (ids !== void 0)
      idsArray = toArray(ids);
    return await this.api.aGet(this.id, {
      ids: idsArray,
      where,
      limit,
      offset,
      //@ts-ignore
      include,
      where_document: whereDocument
    }, this.api.options).then(handleSuccess).catch(handleError);
  }
  /**
   * Update the embeddings, documents, and/or metadatas of existing items
   * @param {Object} params - The parameters for the query.
   * @param {ID | IDs} [params.ids] - The IDs of the items to update.
   * @param {Embedding | Embeddings} [params.embeddings] - Optional embeddings to update.
   * @param {Metadata | Metadatas} [params.metadatas] - Optional metadatas to update.
   * @param {Document | Documents} [params.documents] - Optional documents to update.
   * @returns {Promise<boolean>} - The API Response. True if successful. Else, error.
   *
   * @example
   * ```typescript
   * const response = await collection.update({
   *   ids: ["id1", "id2"],
   *   embeddings: [[1, 2, 3], [4, 5, 6]],
   *   metadatas: [{ "key": "value" }, { "key": "value" }],
   *   documents: ["new document 1", "new document 2"],
   * });
   * ```
   */
  async update({
    ids,
    embeddings,
    metadatas,
    documents
  }) {
    if (embeddings === void 0 && documents === void 0 && metadatas === void 0) {
      throw new Error(
        "embeddings, documents, and metadatas cannot all be undefined"
      );
    } else if (embeddings === void 0 && documents !== void 0) {
      const documentsArray = toArray(documents);
      if (this.embeddingFunction !== void 0) {
        embeddings = await this.embeddingFunction.generate(documentsArray);
      } else {
        throw new Error(
          "embeddingFunction is undefined. Please configure an embedding function"
        );
      }
    }
    if (metadatas !== void 0)
      metadatas = toArray(metadatas);
    if (documents !== void 0)
      documents = toArray(documents);
    var resp = await this.api.update(
      this.id,
      {
        ids: toArray(ids),
        embeddings: embeddings ? toArrayOfArrays(embeddings) : void 0,
        documents,
        metadatas
      },
      this.api.options
    ).then(handleSuccess).catch(handleError);
    return resp;
  }
  /**
   * Performs a query on the collection using the specified parameters.
   *
   * @param {Object} params - The parameters for the query.
   * @param {Embedding | Embeddings} [params.queryEmbeddings] - Optional query embeddings to use for the search.
   * @param {PositiveInteger} [params.nResults] - Optional number of results to return (default is 10).
   * @param {Where} [params.where] - Optional query condition to filter results based on metadata values.
   * @param {string | string[]} [params.queryTexts] - Optional query text(s) to search for in the collection.
   * @param {WhereDocument} [params.whereDocument] - Optional query condition to filter results based on document content.
   * @param {IncludeEnum[]} [params.include] - Optional array of fields to include in the result, such as "metadata" and "document".
   *
   * @returns {Promise<QueryResponse>} A promise that resolves to the query results.
   * @throws {Error} If there is an issue executing the query.
   * @example
   * // Query the collection using embeddings
   * const results = await collection.query({
   *   queryEmbeddings: [[0.1, 0.2, ...], ...],
   *   nResults: 10,
   *   where: {"name": {"$eq": "John Doe"}},
   *   include: ["metadata", "document"]
   * });
   * @example
   * ```js
   * // Query the collection using query text
   * const results = await collection.query({
   *   queryTexts: "some text",
   *   nResults: 10,
   *   where: {"name": {"$eq": "John Doe"}},
   *   include: ["metadata", "document"]
   * });
   * ```
   *
   */
  async query({
    queryEmbeddings,
    nResults,
    where,
    queryTexts,
    whereDocument,
    include
  }) {
    if (nResults === void 0)
      nResults = 10;
    if (queryEmbeddings === void 0 && queryTexts === void 0) {
      throw new Error(
        "queryEmbeddings and queryTexts cannot both be undefined"
      );
    } else if (queryEmbeddings === void 0 && queryTexts !== void 0) {
      const queryTextsArray = toArray(queryTexts);
      if (this.embeddingFunction !== void 0) {
        queryEmbeddings = await this.embeddingFunction.generate(queryTextsArray);
      } else {
        throw new Error(
          "embeddingFunction is undefined. Please configure an embedding function"
        );
      }
    }
    if (queryEmbeddings === void 0)
      throw new Error("embeddings is undefined but shouldnt be");
    const query_embeddingsArray = toArrayOfArrays(queryEmbeddings);
    return await this.api.getNearestNeighbors(this.id, {
      query_embeddings: query_embeddingsArray,
      where,
      n_results: nResults,
      where_document: whereDocument,
      //@ts-ignore
      include
    }, this.api.options).then(handleSuccess).catch(handleError);
  }
  /**
   * Peek inside the collection
   * @param {Object} params - The parameters for the query.
   * @param {PositiveInteger} [params.limit] - Optional number of results to return (default is 10).
   * @returns {Promise<GetResponse>} A promise that resolves to the query results.
   * @throws {Error} If there is an issue executing the query.
   *
   * @example
   * ```typescript
   * const results = await collection.peek({
   *   limit: 10
   * });
   * ```
   */
  async peek({ limit } = {}) {
    if (limit === void 0)
      limit = 10;
    const response = await this.api.aGet(this.id, {
      limit
    }, this.api.options);
    return handleSuccess(response);
  }
  /**
   * Deletes items from the collection.
   * @param {Object} params - The parameters for deleting items from the collection.
   * @param {ID | IDs} [params.ids] - Optional ID or array of IDs of items to delete.
   * @param {Where} [params.where] - Optional query condition to filter items to delete based on metadata values.
   * @param {WhereDocument} [params.whereDocument] - Optional query condition to filter items to delete based on document content.
   * @returns {Promise<string[]>} A promise that resolves to the IDs of the deleted items.
   * @throws {Error} If there is an issue deleting items from the collection.
   *
   * @example
   * ```typescript
   * const results = await collection.delete({
   *   ids: "some_id",
   *   where: {"name": {"$eq": "John Doe"}},
   *   whereDocument: {"$contains":"search_string"}
   * });
   * ```
   */
  async delete({
    ids,
    where,
    whereDocument
  } = {}) {
    let idsArray = void 0;
    if (ids !== void 0)
      idsArray = toArray(ids);
    return await this.api.aDelete(this.id, { ids: idsArray, where, where_document: whereDocument }, this.api.options).then(handleSuccess).catch(handleError);
  }
};
var SecretStr = class {
  constructor(secret) {
    this.secret = secret;
  }
  getSecret() {
    return this.secret;
  }
};
var base64Encode = (str) => {
  return Buffer.from(str).toString("base64");
};
var BasicAuthCredentials = class {
  constructor(_creds) {
    this.credentials = new SecretStr(base64Encode(_creds));
  }
  getCredentials() {
    return this.credentials;
  }
};
var BasicAuthClientAuthResponse = class {
  constructor(credentials) {
    this.credentials = credentials;
  }
  getAuthInfo() {
    return { key: "Authorization", value: "Basic " + this.credentials.getCredentials().getSecret() };
  }
  getAuthInfoType() {
    return "header";
  }
};
var BasicAuthCredentialsProvider = class {
  /**
   * Creates a new BasicAuthCredentialsProvider. This provider loads credentials from provided text credentials or from the environment variable CHROMA_CLIENT_AUTH_CREDENTIALS.
   * @param _creds - The credentials
   * @throws {Error} If neither credentials provider or text credentials are supplied.
   */
  constructor(_creds) {
    if (_creds === void 0 && !process.env.CHROMA_CLIENT_AUTH_CREDENTIALS)
      throw new Error("Credentials must be supplied via environment variable (CHROMA_CLIENT_AUTH_CREDENTIALS) or passed in as configuration.");
    this.credentials = new BasicAuthCredentials(_creds != null ? _creds : process.env.CHROMA_CLIENT_AUTH_CREDENTIALS);
  }
  getCredentials() {
    return this.credentials;
  }
};
var BasicAuthClientAuthProvider = class {
  /**
   * Creates a new BasicAuthClientAuthProvider.
   * @param options - The options for the authentication provider.
   * @param options.textCredentials - The credentials for the authentication provider.
   * @param options.credentialsProvider - The credentials provider for the authentication provider.
   * @throws {Error} If neither credentials provider or text credentials are supplied.
   */
  constructor(options) {
    if (!options.credentialsProvider && !options.textCredentials) {
      throw new Error("Either credentials provider or text credentials must be supplied.");
    }
    this.credentialsProvider = options.credentialsProvider || new BasicAuthCredentialsProvider(options.textCredentials);
  }
  authenticate() {
    return new BasicAuthClientAuthResponse(this.credentialsProvider.getCredentials());
  }
};
var TokenAuthCredentials = class {
  constructor(_creds) {
    this.credentials = new SecretStr(_creds);
  }
  getCredentials() {
    return this.credentials;
  }
};
var TokenCredentialsProvider = class {
  constructor(_creds) {
    if (_creds === void 0 && !process.env.CHROMA_CLIENT_AUTH_CREDENTIALS)
      throw new Error("Credentials must be supplied via environment variable (CHROMA_CLIENT_AUTH_CREDENTIALS) or passed in as configuration.");
    this.credentials = new TokenAuthCredentials(_creds != null ? _creds : process.env.CHROMA_CLIENT_AUTH_CREDENTIALS);
  }
  getCredentials() {
    return this.credentials;
  }
};
var TokenClientAuthProvider = class {
  constructor(options) {
    if (!options.credentialsProvider && !options.textCredentials) {
      throw new Error("Either credentials provider or text credentials must be supplied.");
    }
    if (options.providerOptions === void 0 || !options.providerOptions.hasOwnProperty("headerType")) {
      this.providerOptions = { headerType: "AUTHORIZATION" };
    } else {
      this.providerOptions = { headerType: options.providerOptions.headerType };
    }
    this.credentialsProvider = options.credentialsProvider || new TokenCredentialsProvider(options.textCredentials);
  }
  authenticate() {
    return new TokenClientAuthResponse(this.credentialsProvider.getCredentials(), this.providerOptions.headerType);
  }
};
var TokenHeader = {
  AUTHORIZATION: (value) => ({ key: "Authorization", value: `Bearer ${value}` }),
  X_CHROMA_TOKEN: (value) => ({ key: "X-Chroma-Token", value })
};
var TokenClientAuthResponse = class {
  constructor(credentials, headerType = "AUTHORIZATION") {
    this.credentials = credentials;
    this.headerType = headerType;
  }
  getAuthInfo() {
    if (this.headerType === "AUTHORIZATION") {
      return TokenHeader.AUTHORIZATION(this.credentials.getCredentials().getSecret());
    } else if (this.headerType === "X_CHROMA_TOKEN") {
      return TokenHeader.X_CHROMA_TOKEN(this.credentials.getCredentials().getSecret());
    } else {
      throw new Error("Invalid header type: " + this.headerType + ". Valid types are: " + Object.keys(TokenHeader).join(", "));
    }
  }
  getAuthInfoType() {
    return "header";
  }
};
var IsomorphicFetchClientAuthProtocolAdapter = class {
  /**
   * Creates a new adapter of IsomorphicFetchClientAuthProtocolAdapter.
   * @param api - The API to wrap.
   * @param authConfiguration - The configuration for the authentication provider.
   */
  constructor(api, authConfiguration) {
    this.api = api;
    switch (authConfiguration.provider) {
      case "basic":
        this.authProvider = new BasicAuthClientAuthProvider({
          textCredentials: authConfiguration.credentials,
          credentialsProvider: authConfiguration.credentialsProvider
        });
        break;
      case "token":
        this.authProvider = new TokenClientAuthProvider({
          textCredentials: authConfiguration.credentials,
          credentialsProvider: authConfiguration.credentialsProvider,
          providerOptions: authConfiguration.providerOptions
        });
        break;
      default:
        this.authProvider = void 0;
        break;
    }
    if (this.authProvider !== void 0) {
      this.wrapperApi = this.wrapMethods(this.api);
    }
  }
  getApi() {
    var _a;
    return (_a = this.wrapperApi) != null ? _a : this.api;
  }
  getAllMethods(obj) {
    let methods = [];
    let currentObj = obj;
    do {
      const objMethods = Object.getOwnPropertyNames(currentObj).filter((name) => typeof currentObj[name] === "function" && name !== "constructor");
      methods = methods.concat(objMethods);
      currentObj = Object.getPrototypeOf(currentObj);
    } while (currentObj);
    return methods;
  }
  wrapMethods(obj) {
    let self = this;
    const methodNames = Object.getOwnPropertyNames(Object.getPrototypeOf(obj)).filter((name) => typeof obj[name] === "function" && name !== "constructor");
    return new Proxy(obj, {
      get(target, prop) {
        if (methodNames.includes(prop)) {
          return new Proxy(target[prop], {
            apply(fn, thisArg, args) {
              const modifiedArgs = args.map((arg) => {
                if (arg && typeof arg === "object" && "method" in arg) {
                  return self.injectCredentials(arg);
                }
                return arg;
              });
              if (Object.keys(modifiedArgs[modifiedArgs.length - 1]).length === 0) {
                modifiedArgs[modifiedArgs.length - 1] = self.injectCredentials({});
              } else {
                modifiedArgs[modifiedArgs.length - 1] = self.injectCredentials(modifiedArgs[modifiedArgs.length - 1]);
              }
              return fn.apply(thisArg, modifiedArgs);
            }
          });
        }
        return target[prop];
      }
    });
  }
  injectCredentials(injectionContext) {
    var _a;
    const authInfo = (_a = this.authProvider) == null ? void 0 : _a.authenticate().getAuthInfo();
    if (authInfo) {
      const { key, value } = authInfo;
      injectionContext = __spreadProps(__spreadValues({}, injectionContext), {
        headers: {
          [key]: value
        }
      });
    }
    return injectionContext;
  }
};
var ChromaClient = class {
  /**
   * Creates a new ChromaClient instance.
   * @param {Object} params - The parameters for creating a new client
   * @param {string} [params.path] - The base path for the Chroma API.
   * @returns {ChromaClient} A new ChromaClient instance.
   *
   * @example
   * ```typescript
   * const client = new ChromaClient({
   *   path: "http://localhost:8000"
   * });
   * ```
   */
  constructor({
    path,
    fetchOptions,
    auth
  } = {}) {
    if (path === void 0)
      path = "http://localhost:8000";
    const apiConfig = new Configuration({
      basePath: path
    });
    if (auth !== void 0) {
      this.apiAdapter = new IsomorphicFetchClientAuthProtocolAdapter(new ApiApi(apiConfig), auth);
      this.api = this.apiAdapter.getApi();
    } else {
      this.api = new ApiApi(apiConfig);
    }
    this.api.options = fetchOptions != null ? fetchOptions : {};
  }
  /**
   * Resets the state of the object by making an API call to the reset endpoint.
   *
   * @returns {Promise<boolean>} A promise that resolves when the reset operation is complete.
   * @throws {Error} If there is an issue resetting the state.
   *
   * @example
   * ```typescript
   * await client.reset();
   * ```
   */
  async reset() {
    return await this.api.reset(this.api.options);
  }
  /**
   * Returns the version of the Chroma API.
   * @returns {Promise<string>} A promise that resolves to the version of the Chroma API.
   *
   * @example
   * ```typescript
   * const version = await client.version();
   * ```
   */
  async version() {
    const response = await this.api.version(this.api.options);
    return await handleSuccess(response);
  }
  /**
   * Returns a heartbeat from the Chroma API.
   * @returns {Promise<number>} A promise that resolves to the heartbeat from the Chroma API.
   *
   * @example
   * ```typescript
   * const heartbeat = await client.heartbeat();
   * ```
   */
  async heartbeat() {
    const response = await this.api.heartbeat(this.api.options);
    let ret = await handleSuccess(response);
    return ret["nanosecond heartbeat"];
  }
  /**
   * Creates a new collection with the specified properties.
   *
   * @param {Object} params - The parameters for creating a new collection.
   * @param {string} params.name - The name of the collection.
   * @param {CollectionMetadata} [params.metadata] - Optional metadata associated with the collection.
   * @param {IEmbeddingFunction} [params.embeddingFunction] - Optional custom embedding function for the collection.
   *
   * @returns {Promise<Collection>} A promise that resolves to the created collection.
   * @throws {Error} If there is an issue creating the collection.
   *
   * @example
   * ```typescript
   * const collection = await client.createCollection({
   *   name: "my_collection",
   *   metadata: {
   *     "description": "My first collection"
   *   }
   * });
   * ```
   */
  async createCollection({
    name,
    metadata,
    embeddingFunction
  }) {
    const newCollection = await this.api.createCollection({
      name,
      metadata
    }, this.api.options).then(handleSuccess).catch(handleError);
    if (newCollection.error) {
      throw new Error(newCollection.error);
    }
    return new Collection(name, newCollection.id, this.api, metadata, embeddingFunction);
  }
  /**
   * Gets or creates a collection with the specified properties.
   *
   * @param {Object} params - The parameters for creating a new collection.
   * @param {string} params.name - The name of the collection.
   * @param {CollectionMetadata} [params.metadata] - Optional metadata associated with the collection.
   * @param {IEmbeddingFunction} [params.embeddingFunction] - Optional custom embedding function for the collection.
   *
   * @returns {Promise<Collection>} A promise that resolves to the got or created collection.
   * @throws {Error} If there is an issue getting or creating the collection.
   *
   * @example
   * ```typescript
   * const collection = await client.getOrCreateCollection({
   *   name: "my_collection",
   *   metadata: {
   *     "description": "My first collection"
   *   }
   * });
   * ```
   */
  async getOrCreateCollection({
    name,
    metadata,
    embeddingFunction
  }) {
    const newCollection = await this.api.createCollection({
      name,
      metadata,
      "get_or_create": true
    }, this.api.options).then(handleSuccess).catch(handleError);
    if (newCollection.error) {
      throw new Error(newCollection.error);
    }
    return new Collection(
      name,
      newCollection.id,
      this.api,
      newCollection.metadata,
      embeddingFunction
    );
  }
  /**
   * Lists all collections.
   *
   * @returns {Promise<CollectionType[]>} A promise that resolves to a list of collection names.
   * @throws {Error} If there is an issue listing the collections.
   *
   * @example
   * ```typescript
   * const collections = await client.listCollections();
   * ```
   */
  async listCollections() {
    const response = await this.api.listCollections(this.api.options);
    return handleSuccess(response);
  }
  /**
   * Gets a collection with the specified name.
   * @param {Object} params - The parameters for getting a collection.
   * @param {string} params.name - The name of the collection.
   * @param {IEmbeddingFunction} [params.embeddingFunction] - Optional custom embedding function for the collection.
   * @returns {Promise<Collection>} A promise that resolves to the collection.
   * @throws {Error} If there is an issue getting the collection.
   *
   * @example
   * ```typescript
   * const collection = await client.getCollection({
   *   name: "my_collection"
   * });
   * ```
   */
  async getCollection({
    name,
    embeddingFunction
  }) {
    const response = await this.api.getCollection(name, this.api.options).then(handleSuccess).catch(handleError);
    if (response.error) {
      throw new Error(response.error);
    }
    return new Collection(
      response.name,
      response.id,
      this.api,
      response.metadata,
      embeddingFunction
    );
  }
  /**
   * Deletes a collection with the specified name.
   * @param {Object} params - The parameters for deleting a collection.
   * @param {string} params.name - The name of the collection.
   * @returns {Promise<void>} A promise that resolves when the collection is deleted.
   * @throws {Error} If there is an issue deleting the collection.
   *
   * @example
   * ```typescript
   * await client.deleteCollection({
   *  name: "my_collection"
   * });
   * ```
   */
  async deleteCollection({
    name
  }) {
    return await this.api.deleteCollection(name, this.api.options).then(handleSuccess).catch(handleError);
  }
};
var IncludeEnum = /* @__PURE__ */ ((IncludeEnum2) => {
  IncludeEnum2["Documents"] = "documents";
  IncludeEnum2["Embeddings"] = "embeddings";
  IncludeEnum2["Metadatas"] = "metadatas";
  IncludeEnum2["Distances"] = "distances";
  return IncludeEnum2;
})(IncludeEnum || {});

// src/nodes/ChromaAddNode.ts
function chromaAddNode(rivet) {
  const impl = {
    create() {
      const node = {
        id: rivet.newId(),
        data: {
          collectionName: "new-collection",
          createCollectionIfNotExists: true,
          id: "",
          useCollectionNameInput: false,
          useIdInput: true,
          upsert: true,
          metadata: []
        },
        title: "Chroma Add",
        type: "chromaAdd",
        visualData: {
          x: 0,
          y: 0,
          width: 200
        }
      };
      return node;
    },
    getInputDefinitions(data) {
      const inputs = [];
      if (data.useCollectionNameInput) {
        inputs.push({
          id: "collectionName",
          dataType: "string",
          title: "Collection Name",
          description: "The name of the collection to add an item to."
        });
      }
      if (data.useIdInput) {
        inputs.push({
          id: "id",
          dataType: "string",
          title: "ID",
          description: "The ID of the item to delete from the collection",
          coerced: true
        });
      }
      inputs.push({
        id: "embedding",
        dataType: "vector",
        title: "Embedding",
        description: "The embedding of the item to add to the collection."
      });
      inputs.push({
        id: "document",
        dataType: "string",
        title: "Document",
        description: "The document to associate with the item in the collection."
      });
      if (data.useMetadataInput) {
        inputs.push({
          id: "metadata",
          dataType: "object",
          title: "Metadata",
          description: "Metadata to attach to the item. Must be an object with string values."
        });
      }
      return inputs;
    },
    getOutputDefinitions() {
      return [
        {
          id: "id",
          dataType: "string",
          title: "ID",
          description: "The ID of the item that was added."
        }
      ];
    },
    getBody(data) {
      return rivet.dedent`
        Collection: ${data.useCollectionNameInput ? "(From Input)" : data.collectionName}
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
          helperMessage: "The collection to add the item to."
        },
        {
          type: "toggle",
          dataKey: "createCollectionIfNotExists",
          label: "Create Collection If Not Exists",
          helperMessage: "If the collection does not exist, create it."
        },
        {
          type: "toggle",
          dataKey: "upsert",
          label: "Upsert",
          helperMessage: "If true, will update the item if it already exists in the collection."
        },
        {
          type: "keyValuePair",
          dataKey: "metadata",
          label: "Metadata",
          useInputToggleDataKey: "useMetadataInput",
          helperMessage: "Metadata to attach to the item.",
          keyPlaceholder: "Key",
          valuePlaceholder: "Value"
        }
      ];
    },
    getUIData() {
      return {
        contextMenuTitle: "Chroma Add",
        infoBoxTitle: "Chroma Add Node",
        infoBoxBody: "Adds an item to a collection in Chroma.",
        group: "Chroma"
      };
    },
    async process(data, inputData, context) {
      const client = new ChromaClient({
        path: context.getPluginConfig("databaseUri") || "http://localhost:8000"
      });
      let metadata = data.metadata.reduce(
        (acc, { key, value }) => {
          acc[key] = value;
          return acc;
        },
        {}
      );
      if (data.useMetadataInput) {
        metadata = rivet.coerceType(
          inputData["metadata"],
          "object"
        );
      }
      if (Object.keys(metadata).length === 0) {
        metadata = void 0;
      }
      const collectionName = rivet.getInputOrData(
        data,
        inputData,
        "collectionName"
      );
      const collection = data.createCollectionIfNotExists ? await client.getOrCreateCollection({
        name: collectionName
      }) : await client.getCollection({
        name: collectionName
      });
      const id = rivet.getInputOrData(data, inputData, "id");
      const document = rivet.coerceType(
        inputData["document"],
        "string"
      );
      const embedding = rivet.coerceType(
        inputData["embedding"],
        "vector"
      );
      if (data.upsert) {
        await collection.upsert({
          ids: [id],
          embeddings: [embedding],
          documents: document ? [document] : void 0,
          metadatas: metadata ? [metadata] : void 0
        });
      } else {
        await collection.add({
          ids: [id],
          embeddings: [embedding],
          documents: document ? [document] : void 0,
          metadatas: metadata ? [metadata] : void 0
        });
      }
      return {
        ["id"]: {
          type: "string",
          value: id
        }
      };
    }
  };
  return rivet.pluginNodeDefinition(impl, "Chroma Add");
}

// src/nodes/ChromaDeleteNode.ts
function chromaDeleteNode(rivet) {
  const impl = {
    create() {
      const node = {
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
          useWhereDocumentInput: false
        },
        title: "Chroma Delete",
        type: "chromaDelete",
        visualData: {
          x: 0,
          y: 0,
          width: 250
        }
      };
      return node;
    },
    getInputDefinitions(data) {
      const inputs = [];
      if (data.useCollectionNameInput) {
        inputs.push({
          id: "collectionName",
          dataType: "string",
          title: "Collection Name",
          description: "The name of the collection to delete an item from."
        });
      }
      if (data.useIdInput) {
        inputs.push({
          id: "id",
          dataType: "string",
          title: "ID",
          description: "The ID of the item to delete from the collection",
          coerced: true
        });
      }
      if (data.useWhereInput) {
        inputs.push({
          id: "where",
          dataType: "object",
          title: "Where",
          description: "A Where type dict used to filter the deletion, e.g. { 'name': 'John' }"
        });
      }
      if (data.useWhereDocumentInput) {
        inputs.push({
          id: "whereDocument",
          dataType: "string",
          title: "Where Document",
          description: 'A WhereDocument type dict used to filter the deletion by the document content, e.g. { "$contains": { "text": "John" } }'
        });
      }
      return inputs;
    },
    getOutputDefinitions() {
      return [
        {
          id: "ids",
          dataType: "string[]",
          title: "IDs",
          description: "The IDs of the items that were deleted."
        }
      ];
    },
    getBody(data) {
      const parts = [];
      parts.push(
        `Collection: ${data.useCollectionNameInput ? "(From Input)" : data.collectionName}`
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
          `Where Document: ${data.useWhereDocumentInput ? "(From Input)" : data.whereDocument.trim()}`
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
          helperMessage: "The collection to delete an item from."
        },
        {
          type: "toggle",
          dataKey: "createCollectionIfNotExists",
          label: "Create Collection If Not Exists",
          helperMessage: "If the collection does not exist, create it."
        },
        {
          type: "code",
          dataKey: "where",
          label: "Where",
          useInputToggleDataKey: "useWhereInput",
          helperMessage: 'A Where type dict used to filter the deletion, e.g. { "name": "John" }',
          language: "json"
        },
        {
          type: "code",
          dataKey: "whereDocument",
          label: "Where Document",
          useInputToggleDataKey: "useWhereDocumentInput",
          helperMessage: 'A WhereDocument type dict used to filter the deletion by the document content, e.g. { "$contains": { "text": "John" } }',
          language: "json"
        }
      ];
    },
    getUIData() {
      return {
        contextMenuTitle: "Chroma Delete",
        infoBoxTitle: "Chroma Delete Node",
        infoBoxBody: "Deletes one or more items from a collection in Chroma.",
        group: "Chroma"
      };
    },
    async process(data, inputData, context) {
      const client = new ChromaClient({
        path: context.getPluginConfig("databaseUri") || "http://localhost:8000"
      });
      const collectionName = rivet.getInputOrData(
        data,
        inputData,
        "collectionName"
      );
      let id = rivet.getInputOrData(data, inputData, "id");
      if (!id.trim()) {
        id = void 0;
      }
      let where = void 0;
      if (data.useWhereInput) {
        where = rivet.coerceType(
          inputData["where"],
          "object"
        );
      } else {
        try {
          where = JSON.parse(data.where);
        } catch (e) {
          where = void 0;
        }
      }
      let whereDocument = void 0;
      if (data.useWhereDocumentInput) {
        whereDocument = rivet.coerceType(
          inputData["whereDocument"],
          "object"
        );
      } else {
        try {
          whereDocument = JSON.parse(data.whereDocument);
        } catch (e) {
          whereDocument = void 0;
        }
      }
      const collection = data.createCollectionIfNotExists ? await client.getOrCreateCollection({
        name: collectionName
      }) : await client.getCollection({
        name: collectionName
      });
      const ids = await collection.delete({
        ids: id ? [id] : void 0,
        where,
        whereDocument
      });
      return {
        ["ids"]: {
          type: "string[]",
          value: ids
        }
      };
    }
  };
  return rivet.pluginNodeDefinition(impl, "Chroma Delete");
}

// src/nodes/ChromaGetNode.ts
function chromaGetNode(rivet) {
  const impl = {
    create() {
      const node = {
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
          ids: []
        },
        title: "Chroma Get",
        type: "chromaGet",
        visualData: {
          x: 0,
          y: 0,
          width: 200
        }
      };
      return node;
    },
    getInputDefinitions(data) {
      const inputs = [];
      if (data.useCollectionNameInput) {
        inputs.push({
          id: "collectionName",
          dataType: "string",
          title: "Collection Name",
          description: "The name of the collection to get items from."
        });
      }
      if (data.useIdsInput) {
        inputs.push({
          id: "ids",
          dataType: "string[]",
          title: "IDs",
          description: "The IDs of the items to get."
        });
      }
      if (data.useWhereInput) {
        inputs.push({
          id: "where",
          dataType: "object",
          title: "Where",
          description: "A Where type dict used to filter the retrieval, e.g. { 'name': 'John' }"
        });
      }
      if (data.useWhereDocumentInput) {
        inputs.push({
          id: "whereDocument",
          dataType: "string",
          title: "Where Document",
          description: 'A WhereDocument type dict used to filter the retrieval by the document content, e.g. { "$contains": { "text": "John" } }'
        });
      }
      if (data.useLimitInput) {
        inputs.push({
          id: "limit",
          dataType: "number",
          title: "Limit",
          description: "The maximum number of items to return."
        });
      }
      if (data.useOffsetInput) {
        inputs.push({
          id: "offset",
          dataType: "number",
          title: "Offset",
          description: "The number of items to skip before returning results."
        });
      }
      return inputs;
    },
    getOutputDefinitions() {
      return [
        {
          id: "ids",
          dataType: "string[]",
          title: "IDs",
          description: "The IDs of the items that were retrieved."
        },
        {
          id: "items",
          dataType: "object[]",
          title: "Items",
          description: "The items that were retrieved."
        }
      ];
    },
    getBody(data) {
      const parts = [];
      parts.push(
        `Collection: ${data.useCollectionNameInput ? "(From Input)" : data.collectionName}`
      );
      if (data.useWhereInput || data.where.trim()) {
        parts.push(
          `Where: ${data.useWhereInput ? "(From Input)" : data.where.trim()}`
        );
      }
      if (data.useWhereDocumentInput || data.whereDocument.trim()) {
        parts.push(
          `Where Document: ${data.useWhereDocumentInput ? "(From Input)" : data.whereDocument.trim()}`
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
          helperMessage: "The collection to add the item to."
        },
        {
          type: "toggle",
          dataKey: "createCollectionIfNotExists",
          label: "Create Collection If Not Exists",
          helperMessage: "If the collection does not exist, create it."
        },
        {
          type: "number",
          dataKey: "limit",
          label: "Limit",
          useInputToggleDataKey: "useLimitInput",
          helperMessage: "The maximum number of items to return."
        },
        {
          type: "number",
          dataKey: "offset",
          label: "Offset",
          useInputToggleDataKey: "useOffsetInput",
          helperMessage: "The number of items to skip before returning results."
        },
        {
          type: "stringList",
          dataKey: "ids",
          label: "IDs",
          useInputToggleDataKey: "useIdsInput",
          helperMessage: "The IDs of the items to get."
        },
        {
          type: "code",
          dataKey: "where",
          label: "Where",
          useInputToggleDataKey: "useWhereInput",
          helperMessage: 'A Where type dict used to filter the retrieval, e.g. { "name": "John" }',
          language: "json"
        },
        {
          type: "code",
          dataKey: "whereDocument",
          label: "Where Document",
          useInputToggleDataKey: "useWhereDocumentInput",
          helperMessage: 'A WhereDocument type dict used to filter the retrieval by the document content, e.g. { "$contains": { "text": "John" } }',
          language: "json"
        }
      ];
    },
    getUIData() {
      return {
        contextMenuTitle: "Chroma Get",
        infoBoxTitle: "Chroma Get Node",
        infoBoxBody: "Retrieves items from Chroma.",
        group: "Chroma"
      };
    },
    async process(data, inputData, context) {
      const client = new ChromaClient({
        path: context.getPluginConfig("databaseUri") || "http://localhost:8000"
      });
      const collectionName = rivet.getInputOrData(
        data,
        inputData,
        "collectionName"
      );
      const ids = rivet.getInputOrData(data, inputData, "ids", "string[]");
      const limit = rivet.getInputOrData(data, inputData, "limit", "number");
      const offset = rivet.getInputOrData(data, inputData, "offset", "number");
      let where = void 0;
      if (data.useWhereInput) {
        where = rivet.coerceType(
          inputData["where"],
          "object"
        );
      } else {
        try {
          where = JSON.parse(data.where);
        } catch (e) {
          where = void 0;
        }
      }
      let whereDocument = void 0;
      if (data.useWhereDocumentInput) {
        whereDocument = rivet.coerceType(
          inputData["whereDocument"],
          "object"
        );
      } else {
        try {
          whereDocument = JSON.parse(data.whereDocument);
        } catch (e) {
          whereDocument = void 0;
        }
      }
      const collection = data.createCollectionIfNotExists ? await client.getOrCreateCollection({
        name: collectionName
      }) : await client.getCollection({
        name: collectionName
      });
      const response = await collection.get({
        ids: ids.length ? ids : void 0,
        limit,
        offset,
        where,
        whereDocument
      });
      if (response.error) {
        throw new Error(response.error);
      }
      return {
        ["ids"]: {
          type: "string[]",
          value: response.ids
        },
        ["items"]: {
          type: "object[]",
          value: response.ids.map((id, i) => ({
            id,
            metadata: response.metadatas[i],
            document: response.documents[i]
          }))
        }
      };
    }
  };
  return rivet.pluginNodeDefinition(impl, "Chroma Get");
}

// src/nodes/ChromaQueryNode.ts
function chromaQueryNode(rivet) {
  const impl = {
    create() {
      const node = {
        id: rivet.newId(),
        data: {
          collectionName: "new-collection",
          createCollectionIfNotExists: true,
          useCollectionNameInput: false,
          where: "",
          useWhereInput: false,
          whereDocument: "",
          useWhereDocumentInput: false,
          nResults: 10
        },
        title: "Chroma Query",
        type: "chromaQuery",
        visualData: {
          x: 0,
          y: 0,
          width: 200
        }
      };
      return node;
    },
    getInputDefinitions(data) {
      const inputs = [];
      inputs.push({
        id: "embedding",
        dataType: "vector",
        title: "Embedding",
        description: "The embedding to query for similar items."
      });
      if (data.useCollectionNameInput) {
        inputs.push({
          id: "collectionName",
          dataType: "string",
          title: "Collection Name",
          description: "The name of the collection to get items from."
        });
      }
      if (data.useWhereInput) {
        inputs.push({
          id: "where",
          dataType: "object",
          title: "Where",
          description: "A Where type dict used to filter the deletion, e.g. { 'name': 'John' }"
        });
      }
      if (data.useWhereDocumentInput) {
        inputs.push({
          id: "whereDocument",
          dataType: "string",
          title: "Where Document",
          description: 'A WhereDocument type dict used to filter the deletion by the document content, e.g. { "$contains": { "text": "John" } }'
        });
      }
      if (data.useNResultsInput) {
        inputs.push({
          id: "nResults",
          dataType: "number",
          title: "Number of Results",
          description: "The number of results to return."
        });
      }
      return inputs;
    },
    getOutputDefinitions() {
      return [
        {
          id: "ids",
          dataType: "string[]",
          title: "IDs",
          description: "The IDs of the items that were retrieved."
        },
        {
          id: "items",
          dataType: "object[]",
          title: "Items",
          description: "The items that were retrieved."
        }
      ];
    },
    getBody(data) {
      const parts = [];
      parts.push(
        `Collection: ${data.useCollectionNameInput ? "(From Input)" : data.collectionName}`
      );
      if (data.useWhereInput || data.where.trim()) {
        parts.push(
          `Where: ${data.useWhereInput ? "(From Input)" : data.where.trim()}`
        );
      }
      if (data.useWhereDocumentInput || data.whereDocument.trim()) {
        parts.push(
          `Where Document: ${data.useWhereDocumentInput ? "(From Input)" : data.whereDocument.trim()}`
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
          helperMessage: "The collection to add the item to."
        },
        {
          type: "toggle",
          dataKey: "createCollectionIfNotExists",
          label: "Create Collection If Not Exists",
          helperMessage: "If the collection does not exist, create it."
        },
        {
          type: "number",
          dataKey: "nResults",
          label: "Num Results",
          useInputToggleDataKey: "useNResultsInput",
          helperMessage: "The number of results to return."
        },
        {
          type: "code",
          dataKey: "where",
          label: "Where",
          useInputToggleDataKey: "useWhereInput",
          helperMessage: 'A Where type dict used to filter the deletion, e.g. { "name": "John" }',
          language: "json"
        },
        {
          type: "code",
          dataKey: "whereDocument",
          label: "Where Document",
          useInputToggleDataKey: "useWhereDocumentInput",
          helperMessage: 'A WhereDocument type dict used to filter the deletion by the document content, e.g. { "$contains": { "text": "John" } }',
          language: "json"
        }
      ];
    },
    getUIData() {
      return {
        contextMenuTitle: "Chroma Query",
        infoBoxTitle: "Chroma Query Node",
        infoBoxBody: "Retrieves items from Chroma.",
        group: "Chroma"
      };
    },
    async process(data, inputData, context) {
      const client = new ChromaClient({
        path: context.getPluginConfig("databaseUri") || "http://localhost:8000"
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
        inputData["embedding"],
        "vector"
      );
      let where = void 0;
      if (data.useWhereInput) {
        where = rivet.coerceType(
          inputData["where"],
          "object"
        );
      } else {
        try {
          where = JSON.parse(data.where);
        } catch (e) {
          where = void 0;
        }
      }
      let whereDocument = void 0;
      if (data.useWhereDocumentInput) {
        whereDocument = rivet.coerceType(
          inputData["whereDocument"],
          "object"
        );
      } else {
        try {
          whereDocument = JSON.parse(data.whereDocument);
        } catch (e) {
          whereDocument = void 0;
        }
      }
      const collection = data.createCollectionIfNotExists ? await client.getOrCreateCollection({
        name: collectionName
      }) : await client.getCollection({
        name: collectionName
      });
      const response = await collection.query({
        nResults,
        queryEmbeddings: embedding ? [embedding] : void 0,
        where,
        whereDocument,
        include: [
          IncludeEnum.Distances,
          IncludeEnum.Documents,
          IncludeEnum.Metadatas
        ]
      });
      return {
        ["ids"]: {
          type: "string[]",
          value: response.ids[0]
        },
        ["items"]: {
          type: "object[]",
          value: response.ids[0].map((id, i) => ({
            id,
            metadata: response.metadatas[0][i],
            document: response.documents[0][i],
            distance: response.distances?.[0][i]
          }))
        }
      };
    }
  };
  return rivet.pluginNodeDefinition(impl, "Chroma Query");
}

// src/nodes/ChromaUpdateNode.ts
function chromaUpdateNode(rivet) {
  const impl = {
    create() {
      const node = {
        id: rivet.newId(),
        data: {
          collectionName: "new-collection",
          createCollectionIfNotExists: true,
          id: "",
          metadata: [],
          useCollectionNameInput: false,
          useIdInput: true,
          useMetadataInput: true
        },
        title: "Chroma Update",
        type: "chromaUpdate",
        visualData: {
          x: 0,
          y: 0,
          width: 250
        }
      };
      return node;
    },
    getInputDefinitions(data) {
      const inputs = [];
      if (data.useCollectionNameInput) {
        inputs.push({
          id: "collectionName",
          dataType: "string",
          title: "Collection Name",
          description: "The name of the collection containing the item to update."
        });
      }
      if (data.useIdInput) {
        inputs.push({
          id: "id",
          dataType: "string",
          title: "ID",
          description: "The ID of the item to update in the collection.",
          coerced: true
        });
      }
      inputs.push({
        id: "embedding",
        dataType: "vector",
        title: "Embedding",
        description: "The embedding for the item to store in the collection.",
        required: true
      });
      if (data.useMetadataInput) {
        inputs.push({
          id: "metadata",
          dataType: "object",
          title: "Metadata",
          description: "Metadata to store with the item. Must be an object with string values.",
          required: false
        });
      }
      return inputs;
    },
    getOutputDefinitions() {
      return [
        {
          id: "id",
          dataType: "string",
          title: "ID",
          description: "The ID of the item that was updated."
        }
      ];
    },
    getBody(data) {
      return rivet.dedent`
        Collection: ${data.useCollectionNameInput ? "(From Input)" : data.collectionName}
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
          helperMessage: "The collection containing the item to update."
        },
        {
          type: "toggle",
          dataKey: "createCollectionIfNotExists",
          label: "Create Collection If Not Exists",
          helperMessage: "If the collection does not exist, create it."
        },
        {
          type: "keyValuePair",
          label: "Metadata",
          dataKey: "metadata",
          useInputToggleDataKey: "useMetadataInput",
          helperMessage: "Replaces the metadata for the item with the metadata here.",
          keyPlaceholder: "Key",
          valuePlaceholder: "Value"
        }
      ];
    },
    getUIData() {
      return {
        contextMenuTitle: "Chroma Update",
        infoBoxTitle: "Chroma Update Node",
        infoBoxBody: "Updates an existing item in a Chroma collection.",
        group: "Chroma"
      };
    },
    async process(data, inputData, context) {
      const client = new ChromaClient({
        path: context.getPluginConfig("databaseUri") || "http://localhost:8000"
      });
      let metadata = data.metadata.reduce(
        (acc, { key, value }) => {
          acc[key] = value;
          return acc;
        },
        {}
      );
      if (data.useMetadataInput) {
        metadata = rivet.coerceType(
          inputData["metadata"],
          "object"
        );
      }
      if (Object.keys(metadata).length === 0) {
        metadata = void 0;
      }
      const collectionName = rivet.getInputOrData(
        data,
        inputData,
        "collectionName"
      );
      const embedding = rivet.coerceType(
        inputData["embedding"],
        "vector"
      );
      const collection = data.createCollectionIfNotExists ? await client.getOrCreateCollection({
        name: collectionName
      }) : await client.getCollection({
        name: collectionName
      });
      const id = rivet.getInputOrData(data, inputData, "id");
      await collection.update({
        ids: [id],
        embeddings: [embedding],
        metadatas: metadata ? [metadata] : void 0
      });
      return {
        ["id"]: {
          type: "string",
          value: id
        }
      };
    }
  };
  return rivet.pluginNodeDefinition(impl, "Chroma Update");
}

// src/nodes/CreateCollectionNode.ts
function createCollectionNode(rivet) {
  const impl = {
    create() {
      const node = {
        id: rivet.newId(),
        data: {
          collectionName: "new-collection",
          ignoreIfExists: true,
          metadata: []
        },
        title: "Create Collection",
        type: "chromaCreateCollection",
        visualData: {
          x: 0,
          y: 0,
          width: 250
        }
      };
      return node;
    },
    getInputDefinitions(data) {
      const inputs = [];
      if (data.useCollectionNameInput) {
        inputs.push({
          id: "collectionName",
          dataType: "string",
          title: "Collection Name",
          description: "The name of the collection to create. The length must be between 3 and 64 characters. The name must start and end with a lowercase lerr or a digit, and it can contain dots, dashes, and underscores in between. The name must not contain two consecutive dots, and must not be a valid IP address."
        });
      }
      if (data.useMetadataInput) {
        inputs.push({
          id: "metadata",
          dataType: "object",
          title: "Metadata",
          description: "Metadata to attach to the collection. Must be an object with string values."
        });
      }
      return inputs;
    },
    getOutputDefinitions() {
      return [
        {
          id: "collectionName",
          dataType: "string",
          title: "Collection Name",
          description: "The name of the collection that was created."
        }
      ];
    },
    getBody(data) {
      return rivet.dedent`
        Collection: ${data.useCollectionNameInput ? "(From Input)" : data.collectionName}
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
          helperMessage: "Length must be between 3 and 64 characters. The name must start and end with a lowercase letter or a digit, and it can contain dots, dashes, and underscores in between. The name must not contain two consecutive dots, and must not be a valid IP address.",
          maxLength: 64,
          placeholder: "new-collection"
        },
        {
          type: "toggle",
          dataKey: "ignoreIfExists",
          label: "Ignore If Exists",
          helperMessage: "If the collection already exists, continue anyway."
        },
        {
          type: "keyValuePair",
          label: "Metadata",
          dataKey: "metadata",
          useInputToggleDataKey: "useMetadataInput",
          keyPlaceholder: "key",
          valuePlaceholder: "value",
          helperMessage: "Metadata to attach to the collection."
        }
      ];
    },
    getUIData() {
      return {
        contextMenuTitle: "Create Collection",
        infoBoxTitle: "Create Collection Node",
        infoBoxBody: "Creates a new collection in Chroma to store embeddings in.",
        group: "Chroma"
      };
    },
    async process(data, inputData, context) {
      const client = new ChromaClient({
        path: context.getPluginConfig("databaseUri") || "http://localhost:8000"
      });
      let metadata = data.metadata.reduce(
        (acc, { key, value }) => {
          acc[key] = value;
          return acc;
        },
        {}
      );
      if (data.useMetadataInput) {
        metadata = rivet.coerceType(
          inputData["metadata"],
          "object"
        );
      }
      if (Object.keys(metadata).length === 0) {
        metadata = void 0;
      }
      const collectionName = rivet.getInputOrData(
        data,
        inputData,
        "collectionName"
      );
      if (data.ignoreIfExists) {
        const collection2 = await client.getOrCreateCollection({
          name: collectionName,
          metadata
        });
        return {
          ["collectionName"]: {
            type: "string",
            value: collection2.name
          }
        };
      }
      const collection = await client.createCollection({
        name: collectionName,
        metadata
      });
      return {
        ["collectionName"]: {
          type: "string",
          value: collection.name
        }
      };
    }
  };
  return rivet.pluginNodeDefinition(impl, "Create Collection");
}

// src/nodes/DeleteCollectionNode.ts
function deleteCollectionNode(rivet) {
  const impl = {
    create() {
      const node = {
        id: rivet.newId(),
        data: {
          collectionName: "new-collection"
        },
        title: "Delete Collection",
        type: "chromaDeleteCollection",
        visualData: {
          x: 0,
          y: 0,
          width: 250
        }
      };
      return node;
    },
    getInputDefinitions(data) {
      const inputs = [];
      if (data.useCollectionNameInput) {
        inputs.push({
          id: "collectionName",
          dataType: "string",
          title: "Collection Name",
          description: "The name of the collection to delete."
        });
      }
      return inputs;
    },
    getOutputDefinitions() {
      return [
        {
          id: "collectionName",
          dataType: "string",
          title: "Collection Name",
          description: "The name of the collection that was deleted."
        }
      ];
    },
    getBody(data) {
      return rivet.dedent`
        Collection: ${data.useCollectionNameInput ? "(From Input)" : data.collectionName}
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
          helperMessage: "Length must be between 3 and 64 characters. The name must start and end with a lowercase letter or a digit, and it can contain dots, dashes, and underscores in between. The name must not contain two consecutive dots, and must not be a valid IP address.",
          maxLength: 64,
          placeholder: "new-collection"
        }
      ];
    },
    getUIData() {
      return {
        contextMenuTitle: "Delete Collection",
        infoBoxTitle: "Delete Collection Node",
        infoBoxBody: "Deletes a collection in Chroma",
        group: "Chroma"
      };
    },
    async process(data, inputData, context) {
      const client = new ChromaClient({
        path: context.getPluginConfig("databaseUri") || "http://localhost:8000"
      });
      const collectionName = rivet.getInputOrData(
        data,
        inputData,
        "collectionName"
      );
      await client.deleteCollection({ name: collectionName });
      return {
        ["collectionName"]: {
          type: "string",
          value: collectionName
        }
      };
    }
  };
  return rivet.pluginNodeDefinition(impl, "Delete Collection");
}

// src/nodes/ListCollectionsNode.ts
function listCollectionsNode(rivet) {
  const impl = {
    create() {
      const node = {
        id: rivet.newId(),
        data: {},
        title: "List Collections",
        type: "chromaListCollections",
        visualData: {
          x: 0,
          y: 0,
          width: 250
        }
      };
      return node;
    },
    getInputDefinitions() {
      return [];
    },
    getOutputDefinitions() {
      return [
        {
          id: "collectionNames",
          dataType: "string[]",
          title: "Collection Names",
          description: "The names of all collections available in Chroma."
        },
        {
          id: "collections",
          dataType: "object[]",
          title: "Collections",
          description: "The full object information about all collections."
        }
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
        group: "Chroma"
      };
    },
    async process(_data, _inputData, context) {
      const client = new ChromaClient({
        path: context.getPluginConfig("databaseUri") || "http://localhost:8000"
      });
      const collections = await client.listCollections();
      return {
        ["collectionNames"]: {
          type: "string[]",
          value: collections.map((c) => c.name)
        },
        ["collections"]: {
          type: "object[]",
          value: collections
        }
      };
    }
  };
  return rivet.pluginNodeDefinition(impl, "List Collections");
}

// src/index.ts
var plugin = (rivet) => {
  const examplePlugin = {
    id: "chroma",
    name: "Chroma",
    configSpec: {
      databaseUri: {
        type: "string",
        label: "Database URI",
        description: "The URI of the database to use. Defaults to http://localhost:8000.",
        pullEnvironmentVariable: "CHROMA_DB_URI"
      }
    },
    contextMenuGroups: [
      {
        id: "chroma",
        label: "Chroma"
      }
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
    }
  };
  return examplePlugin;
};
var src_default = plugin;
export {
  src_default as default
};
