/*!
 * Banquette Storage v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./_virtual/_tslib.js"),n=require("@banquette/exception/_cjs/prod/usage.exception"),e=function(e){function Constants(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(Constants,e),Constants.Get=function(t){return Constants.GetInstance().get(t)},Constants.Register=function(t,e){if(Constants.GetInstance().has(t))throw new n.UsageException("A constant named ".concat(t," is already defined."));Constants.GetInstance().set(t,e)},Constants.GetInstance=function(){return null===Constants.Instance&&(Constants.Instance=new Constants),Constants.Instance},Constants.Instance=null,Constants}(require("@banquette/utils-misc/_cjs/prod/var-holder").VarHolder);exports.Constants=e;
