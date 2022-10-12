/*!
 * Banquette Http v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/dependency-injection/_cjs/prod/injector"),t=require("@banquette/event/_cjs/prod/event-dispatcher.service"),r=require("@banquette/exception/_cjs/prod/exception.factory"),n=require("@banquette/exception/_cjs/prod/usage.exception"),o=require("@banquette/utils-type/_cjs/prod/is-array"),a=require("@banquette/utils-type/_cjs/prod/is-null-or-undefined"),i=require("@banquette/utils-type/_cjs/prod/is-object"),s=require("../constants.js"),u=Symbol("json");e.Injector.Get(t.EventDispatcherService).subscribe(s.HttpEvents.BeforeRequest,(function onBeforeRequest(e){if(e.request.payloadType===u&&!e.request.tryCount){if(e.stopPropagation(),a.isNullOrUndefined(e.request.payload))e.request.payload="{}";else{if(!o.isArray(e.request.payload)&&!i.isObject(e.request.payload))throw new n.UsageException("Invalid payload for JSON encoding. An object or array is expected.");try{e.request.payload=JSON.stringify(e.request.payload)}catch(e){throw new n.UsageException("Failed to encode request payload to JSON.",r.ExceptionFactory.EnsureException(e))}}e.request.headers.set("Content-Type","application/json")}}),0,null,[s.EncoderTag]),exports.PayloadTypeJson=u;