/*!
 * Banquette Http v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/dependency-injection/_cjs/prod/injector"),t=require("@banquette/event/_cjs/prod/event-dispatcher.service"),n=require("@banquette/exception/_cjs/prod/usage.exception"),a=require("@banquette/utils-type/_cjs/prod/is-null-or-undefined"),r=require("@banquette/utils-type/_cjs/prod/is-object"),i=require("../constants.js"),o=Symbol("form-data");function buildFormData(e,t,n){if(!r.isObject(t)||t instanceof Date||t instanceof File)n&&t instanceof File?e.append(n,t,t.name):n&&e.append(n,a.isNullOrUndefined(t)?"":t);else for(var i=0,o=Object.keys(t);i<o.length;i++){var s=o[i];buildFormData(e,t[s],n?"".concat(n,"[").concat(s,"]"):s)}}e.Injector.Get(t.EventDispatcherService).subscribe(i.HttpEvents.BeforeRequest,(function onBeforeRequest(e){if(e.request.payloadType===o){var t=new FormData,i=e.request.payload;if(e.stopPropagation(),!e.request.tryCount&&!a.isNullOrUndefined(i)){if(!r.isObject(e.request.payload))throw new n.UsageException("An object is expected as input to encode the payload as FormData.");if(i instanceof HTMLFormElement)t=new FormData(i);else if(i instanceof HTMLInputElement&&"file"!==i.type)for(var s=0,u=null!==i.files?Array.from(i.files):[];s<u.length;s++){var l=u[s];t.append("file".concat(i.multiple?"s[]":""),l,l.name)}else buildFormData(t,i);e.request.payload=t}}}),0,null,[i.EncoderTag]),exports.PayloadTypeFormData=o;
