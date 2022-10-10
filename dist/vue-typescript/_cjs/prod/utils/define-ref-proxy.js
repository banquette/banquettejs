/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-misc/_cjs/prod/make-reassignable");exports.defineRefProxy=function defineRefProxy(r,t,n,i){void 0===i&&(i=t),Object.defineProperty(r,t,{get:function(){return n[i].value},set:function(r){n[i].value=r,e.reassign(r,n[i].value)},enumerable:!0,configurable:!0})};
