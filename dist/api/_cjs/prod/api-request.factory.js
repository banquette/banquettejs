/*!
 * Banquette Api v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./api-request.js"),t=function(){function ApiRequestFactory(){}return ApiRequestFactory.Create=function(t){return new e.ApiRequest(t.model||null,t.endpoint||null,t.url||null,t.method,t.params,t.payload,t.payloadType,t.responseType,t.headers,t.timeout,t.retry,t.retryDelay,t.priority,t.withCredentials,t.mimeType,t.tags,t.extras)},ApiRequestFactory}();exports.ApiRequestFactory=t;
