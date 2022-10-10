/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/api/_cjs/prod/api.service"),r=require("@banquette/dependency-injection/_cjs/prod/injector"),t=require("@banquette/utils-misc/_cjs/prod/proxy"),i=require("@banquette/vue-typescript/_cjs/prod/vue-builder");exports.useApiGlobals=function useApiGlobals(){var p=r.Injector.Get(e.ApiService);i.VueBuilder.RegisterGlobalProperty("btApiBuild",t.proxy(p.build,p)),i.VueBuilder.RegisterGlobalProperty("btApiSend",t.proxy(p.send,p)),i.VueBuilder.RegisterGlobalProperty("btApiGet",t.proxy(p.get,p)),i.VueBuilder.RegisterGlobalProperty("btApiPost",t.proxy(p.post,p)),i.VueBuilder.RegisterGlobalProperty("btApiPut",t.proxy(p.put,p)),i.VueBuilder.RegisterGlobalProperty("btApiPatch",t.proxy(p.patch,p)),i.VueBuilder.RegisterGlobalProperty("btApiDelete",t.proxy(p.delete,p))};
