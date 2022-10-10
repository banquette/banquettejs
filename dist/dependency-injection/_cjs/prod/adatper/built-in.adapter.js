/*!
 * Banquette DependencyInjection v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../built-in-container.js"),e=function(){function BuiltInAdapter(){this.container=null}return BuiltInAdapter.prototype.get=function(t){return this.getContainer().get(t)},BuiltInAdapter.prototype.getMultiple=function(t){return this.getContainer().getMultiple(t)},BuiltInAdapter.prototype.has=function(t){return this.getContainer().has(t)},BuiltInAdapter.prototype.getContainer=function(){return null===this.container&&(this.container=new t.BuiltInContainer),this.container},BuiltInAdapter.prototype.register=function(t){},BuiltInAdapter}();exports.BuiltInAdapter=e;
