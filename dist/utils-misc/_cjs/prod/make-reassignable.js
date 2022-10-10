/*!
 * Banquette UtilsMisc v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/is-object"),t=require("@banquette/utils-type/_cjs/prod/is-undefined"),n=Symbol();exports.isReassignable=function isReassignable(s){return e.isObject(s)&&!t.isUndefined(s[n])},exports.makeReassignable=function makeReassignable(s){if(!e.isObject(s)||!t.isUndefined(s.__bt_reassignable))return s;var r={};return Object.defineProperty(r,"__bt_reassignable",{enumerable:!1,configurable:!0,writable:!0,value:s}),new Proxy(r,{get:function(e,t,i){return"__bt_reassignable"===t?s:t===n?r.__bt_reassignable:Reflect.get(r.__bt_reassignable,t,i)},set:function(e,t,s){return t===n?r.__bt_reassignable=s[n]:Reflect.set(r.__bt_reassignable,t,s,r.__bt_reassignable),!0},getPrototypeOf:function(e){return Object.getPrototypeOf(e.__bt_reassignable)},ownKeys:function(e){return Reflect.ownKeys(e.__bt_reassignable)},has:function(e,t){return t in e.__bt_reassignable},getOwnPropertyDescriptor:function(e,t){return Object.getOwnPropertyDescriptor(e.__bt_reassignable,t)}})},exports.reassign=function reassign(s,r){e.isObject(s)&&!t.isUndefined(s[n])&&(s[n]=r)},exports.unmakeReassignable=function unmakeReassignable(s){return e.isObject(s)&&!t.isUndefined(s[n])?s[n]:s};
