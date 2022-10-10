/*!
 * Banquette Api v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";var e=require("@banquette/dependency-injection/_cjs/prod/injector"),t=require("@banquette/event/_cjs/prod/event-dispatcher.service"),r=require("@banquette/http/_cjs/prod/constants"),n=require("@banquette/model/_cjs/prod/transformer/transform.service"),s=require("@banquette/utils-type/_cjs/prod/is-object"),i=require("../constant.js"),o=require("../transformer/api.js"),u=e.Injector.Get(n.TransformService);e.Injector.Get(t.EventDispatcherService).subscribe(i.ApiEvents.BeforeRequest,(function onBeforeRequest(e){var t=e.httpEvent.request.payload;if(e.apiRequest.method!==r.HttpMethod.GET&&null!==e.apiRequest.model&&s.isObject(t)){var n=u.transform(t,o.ApiTransformerSymbol);if(null!==n.promise)return n.promise.then((function(){e.httpEvent.request.payload=n.result}));e.httpEvent.request.payload=n.result}}),0,null,[i.ApiProcessorTag]);
