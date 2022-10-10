/*!
 * Banquette Http v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../_virtual/_tslib.js"),t=require("@banquette/dependency-injection/_cjs/prod/decorator/inject.decorator"),r=require("@banquette/dependency-injection/_cjs/prod/decorator/module.decorator"),s=require("@banquette/exception/_cjs/prod/usage.exception"),o=require("@banquette/promise/_cjs/prod/observable-promise"),n=require("@banquette/utils-misc/_cjs/prod/proxy"),i=require("@banquette/utils-type/_cjs/prod/is-undefined"),a=require("../constants.js"),p=require("../event/status-change.event.js"),u=require("../event/transfer-progress.event.js"),d=require("../exception/network.exception.js"),h=require("../exception/request-canceled.exception.js"),c=require("../exception/request-timeout.exception.js"),l=require("../network-watcher.service.js"),x=require("./adapter-response.js"),g=function(){function XhrAdapter(e){this.networkWatcher=e,this.canceled=!1}return XhrAdapter.prototype.execute=function(e){var t=this;return new o.ObservablePromise((function(r,o,i){if(t.xhr)o(new s.UsageException("An XHR object is already defined.You must create a new instance of the adapter for each request."));else{t.request=e,t.promiseResolve=r,t.promiseReject=o,t.promiseProgress=i,t.updateProgressStatus(a.HttpRequestProgressStatus.Preparing),t.xhr=new XMLHttpRequest,t.xhr.addEventListener("abort",n.proxy(t.onAbort,t)),t.xhr.addEventListener("error",n.proxy(t.onError,t)),t.xhr.addEventListener("load",n.proxy(t.onComplete,t)),t.xhr.addEventListener("timeout",n.proxy(t.onTimeout,t)),t.xhr.addEventListener("progress",n.proxy(t.onProgress,t)),t.xhr.upload.addEventListener("loadstart",n.proxy(t.onProgress,t)),t.xhr.upload.addEventListener("progress",n.proxy(t.onProgress,t)),t.xhr.upload.addEventListener("load",n.proxy(t.onProgress,t)),t.xhr.open(e.method,e.staticUrl,!0),t.xhr.timeout=e.timeout,t.xhr.withCredentials=e.withCredentials,null!==e.mimeType&&t.xhr.overrideMimeType(e.mimeType);for(var p=e.headers.all(),u=0,d=Object.keys(p);u<d.length;u++){var h=d[u];t.xhr.setRequestHeader(h,p[h])}t.xhr.send(e.payload),t.canceled&&t.cancel()}}))},XhrAdapter.prototype.cancel=function(){this.xhr?this.xhr.abort():this.canceled=!0},XhrAdapter.prototype.onComplete=function(){this.updateProgressStatus(a.HttpRequestProgressStatus.Closed),this.promiseResolve(new x.AdapterResponse(this.xhr.status,this.xhr.responseURL,this.xhr.responseText||null,this.xhr.responseType,this.convertHeadersStringToObject(this.xhr.getAllResponseHeaders())))},XhrAdapter.prototype.onError=function(){this.updateProgressStatus(a.HttpRequestProgressStatus.Closed),this.promiseReject(new d.NetworkException(!this.networkWatcher.isOnline()))},XhrAdapter.prototype.onProgress=function(e){if("loadstart"===e.type?this.updateProgressStatus(a.HttpRequestProgressStatus.Uploading):"load"===e.type&&this.updateProgressStatus(a.HttpRequestProgressStatus.Downloading),e.lengthComputable){var t=new u.TransferProgressEvent(this.request,this.requestProgressStatus,e.loaded,e.total,.01*Math.round(e.loaded/e.total*1e4));this.promiseProgress(t)}},XhrAdapter.prototype.onAbort=function(){this.updateProgressStatus(a.HttpRequestProgressStatus.Closed),this.promiseReject(new h.RequestCanceledException)},XhrAdapter.prototype.onTimeout=function(){this.updateProgressStatus(a.HttpRequestProgressStatus.Closed),this.promiseReject(new c.RequestTimeoutException(this.xhr.timeout))},XhrAdapter.prototype.convertHeadersStringToObject=function(e){var t={};return e.trim().split(/[\r\n]+/).forEach((function(e){var r=e.split(": ");t[r.shift()]=r.join(": ")})),t},XhrAdapter.prototype.updateProgressStatus=function(e){(i.isUndefined(this.requestProgressStatus)||e>this.requestProgressStatus)&&(this.promiseProgress(new p.StatusChangeEvent(this.request,e)),this.requestProgressStatus=e)},XhrAdapter=e.__decorate([r.Module(),e.__param(0,t.Inject(l.NetworkWatcherService)),e.__metadata("design:paramtypes",[l.NetworkWatcherService])],XhrAdapter)}();exports.XhrAdapter=g;
