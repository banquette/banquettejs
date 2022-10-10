/*!
 * Banquette Http v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/dependency-injection/_cjs/prod/injector"),t=require("@banquette/event/_cjs/prod/event-dispatcher.service"),n=require("@banquette/exception/_cjs/prod/usage.exception"),a=require("@banquette/utils-type/_cjs/prod/is-null-or-undefined"),o=require("../constants.js"),r=Symbol("file");e.Injector.Get(t.EventDispatcherService).subscribe(o.HttpEvents.BeforeRequest,(function onBeforeRequest(e){if(e.request.payloadType===r){if(e.request.payload instanceof HTMLInputElement&&!a.isNullOrUndefined(e.request.payload.files)){if(e.request.payload.files.length>1)throw new n.UsageException("Only a single file can be uploaded by request using the PayloadTypeFile encoder. Use the PayloadFormData encoder to upload multiple files per request.");e.request.payload=e.request.payload.files.item(0)}if(!(e.request.payload instanceof File))throw new n.UsageException("No file has been found in the payload.");e.stopPropagation();var t=e.request.payload,o=Math.random().toString().substr(2),i="--",s="\r\n",l=i+o+s+'Content-Disposition: form-data;name="file";filename="'+encodeURIComponent(t.name)+'"'+"\r\nContent-Type: "+t.type+s+s,p="\r\n--"+o+i;e.request.headers.set("Content-Type","multipart/related;type=application/dicom;boundary=".concat(o)),e.request.headers.set("Accept","application/dicom+json"),e.request.payload=new Blob([new Blob([l]),t,new Blob([p])])}}),0,null,[o.EncoderTag]),exports.PayloadTypeFile=r;
