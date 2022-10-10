/*!
 * Banquette Exception v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/is-null-or-undefined"),t=function(){function Exception(e,t,s){this.message=e,this.previous=t,this.extra=s}return Object.defineProperty(Exception.prototype,"messagesStack",{get:function(){return e.isNullOrUndefined(this.previous)?[this.message]:[this.message].concat(this.previous.messagesStack)},enumerable:!1,configurable:!0}),Exception}();exports.Exception=t;
