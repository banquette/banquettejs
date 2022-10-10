/*!
 * Banquette Http v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./constants.js"),s=function(){function HttpResponse(s,e,i){void 0===e&&(e=t.HttpResponseStatus.Pending),this.id=++HttpResponse.MaxId,this.status=t.HttpResponseStatus.Pending,this.isPending=!0,this.isSuccess=!1,this.isError=!1,this.isCanceled=!1,this.error=null,this.request=s,this.promise=i,this.setStatus(e)}return HttpResponse.prototype.setStatus=function(s){this.status=s,this.isPending=this.status===t.HttpResponseStatus.Pending,this.isSuccess=this.status===t.HttpResponseStatus.Success,this.isError=this.status===t.HttpResponseStatus.Error,this.isCanceled=this.status===t.HttpResponseStatus.Canceled},HttpResponse.prototype.copyFrom=function(t){this.setStatus(t.status),this.url=t.url,this.error=t.error,this.result=t.result,this.httpStatusText=t.httpStatusText,this.httpStatusCode=t.httpStatusCode},HttpResponse.MaxId=0,HttpResponse}();exports.HttpResponse=s;
