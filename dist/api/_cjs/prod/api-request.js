/*!
 * Banquette Api v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("@banquette/utils-type/_cjs/prod/is-undefined"),e=require("./api-endpoint-override.js"),i=function(){function ApiRequest(t,e,i,s,r,h,p,a,o,n,d,u,y,m,l,v,q){this.model=t,this.endpoint=e,this.url=i,this.method=s,this.params=r,this.payload=h,this.payloadType=p,this.responseType=a,this.headers=o,this.timeout=n,this.retry=d,this.retryDelay=u,this.priority=y,this.withCredentials=m,this.mimeType=l,this.tags=v,this.extras=q,this.id=++ApiRequest.MaxId}return ApiRequest.prototype.toEndpointOverride=function(){return new e.ApiEndpointOverride(this.method,this.paramsToPrimitives(),this.headers,this.timeout,this.retry,this.retryDelay,this.priority,this.withCredentials,this.mimeType,this.payloadType,this.responseType,this.tags,this.extras)},ApiRequest.prototype.paramsToPrimitives=function(){var e={};if(!t.isUndefined(this.params))for(var i=0,s=Object.keys(this.params);i<s.length;i++){var r=s[i];e[r]=this.params[r].value}return e},ApiRequest.MaxId=0,ApiRequest}();exports.ApiRequest=i;
