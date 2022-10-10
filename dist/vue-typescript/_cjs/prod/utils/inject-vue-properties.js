/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/is-undefined");exports.injectVueProperties=function injectVueProperties(r,s){for(var i=0,t=["render","ssrRender","__file","__cssModules","__scopeId","__hmrId"];i<t.length;i++){var n=t[i];!e.isUndefined(r[n])&&e.isUndefined(s[n])&&(s[n]=r[n])}};
