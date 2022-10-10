/*!
 * Banquette Http v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/config/_cjs/prod/config/configuration.service"),t=require("@banquette/dependency-injection/_cjs/prod/injector"),r=require("./adapter/xhr.adapter.js"),a=Symbol("http");t.Injector.Get(e.ConfigurationService).register(a,{adapter:r.XhrAdapter,maxSimultaneousRequests:3,requestRetryDelay:"auto",requestRetryCount:5,requestTimeout:1e4,queryString:{arrayFormat:"brackets",indices:!0,format:"RFC3986",encodeValuesOnly:!1,allowDots:!1,charset:"utf-8"}},!0),exports.HttpConfigurationSymbol=a;
