/*!
 * Banquette Api v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./_virtual/_tslib.js"),t=require("@banquette/http/_cjs/prod/abstract-http-request.builder"),i=require("./api-request.factory.js"),r=function(t){function ApiRequestBuilder(){var e=null!==t&&t.apply(this,arguments)||this;return e._endpoint=null,e._model=null,e}return e.__extends(ApiRequestBuilder,t),ApiRequestBuilder.prototype.endpoint=function(e){return this._endpoint=e,this},ApiRequestBuilder.prototype.model=function(e){return this._model=e,this},ApiRequestBuilder.prototype.getRequest=function(){return i.ApiRequestFactory.Create({endpoint:this._endpoint,model:this._model,method:this._method,url:this._url,params:this._params,payload:this._payload,payloadType:this._payloadType,responseType:this._responseType,headers:this._headers,timeout:this._timeout,retry:this._retry,retryDelay:this._retryDelay,priority:this._priority||void 0,withCredentials:this._withCredentials||!1,mimeType:this._mimeType,tags:this._tags,extras:this._extras})},ApiRequestBuilder.Create=function(){return new ApiRequestBuilder},ApiRequestBuilder}(t.AbstractRequestBuilder);exports.ApiRequestBuilder=r;
