/*!
 * Banquette Validation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/is-promise-like"),r=require("../create-validator.js");exports.Callback=function(t,a,i){return r.createValidator({validate:function(r){try{var a=t(r);e.isPromiseLike(a)&&r.result.delayResponse(a)}catch(e){r.result.fail(e)}return r.result}},a,i)};
