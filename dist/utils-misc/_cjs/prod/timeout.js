/*!
 * Banquette UtilsMisc v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./_virtual/_tslib.js");function waitForDelay(e){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){return[2,new Promise((function(t){setTimeout(t,e)}))]}))}))}exports.waitForDelay=waitForDelay,exports.waitForNextCycle=function waitForNextCycle(){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){return[2,waitForDelay(0)]}))}))};
