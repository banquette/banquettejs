/*!
 * Banquette Http v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/dependency-injection/_cjs/prod/injector"),t=require("@banquette/event/_cjs/prod/event-dispatcher.service"),r=require("../constants.js"),n=Symbol("raw");e.Injector.Get(t.EventDispatcherService).subscribe(r.HttpEvents.BeforeRequest,(function onBeforeRequest(e){e.request.payloadType===n&&e.stopPropagation()}),16,null,[r.EncoderTag]),exports.PayloadTypeRaw=n;
