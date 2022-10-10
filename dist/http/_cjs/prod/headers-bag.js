/*!
 * Banquette Http v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/is-undefined"),t=require("./constants.js"),r=function(){function HeadersBag(){this.bag={}}return HeadersBag.prototype.all=function(){return Object.assign({},this.bag)},HeadersBag.prototype.get=function(e,t){return void 0===t&&(t=null),e=this.normalizeName(e),this.bag[e]||t},HeadersBag.prototype.has=function(e){return null!==this.get(e)},HeadersBag.prototype.set=function(e,t){e=this.normalizeName(e),this.bag[e]=String(t)},HeadersBag.prototype.empty=function(){this.bag={}},HeadersBag.FromMap=function(e){for(var t=new HeadersBag,r=0,a=Object.keys(e);r<a.length;r++){var n=a[r];t.set(n,e[n])}return t},HeadersBag.prototype.normalizeName=function(r){var a=r.toLowerCase();return e.isUndefined(t.HttpHeadersExceptionsMap[a])?a.replace(/\s+/g,"-").split("-").map((function(e){return e[0].toUpperCase()+e.substr(1).toLowerCase()})).join("-"):t.HttpHeadersExceptionsMap[a]},HeadersBag}();exports.HeadersBag=r;
