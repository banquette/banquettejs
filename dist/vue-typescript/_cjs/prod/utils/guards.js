/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("@banquette/utils-type/_cjs/prod/is-constructor"),e=require("@banquette/utils-type/_cjs/prod/is-function"),n=require("@banquette/utils-type/_cjs/prod/is-object"),o=require("../constants.js");function isComponentInstance(t){return n.isObject(t)&&"$"in t&&"$attrs"in t&&"$data"in t&&"$el"in t&&"$parent"in t}exports.isComponentInstance=isComponentInstance,exports.isDecoratedComponentConstructor=function isDecoratedComponentConstructor(e){return t.isConstructor(e)&&e.prototype.hasOwnProperty(o.DECORATORS_METADATA)},exports.isDecoratedComponentInstance=function isDecoratedComponentInstance(t){return isComponentInstance(t)&&o.COMPONENT_TS_INSTANCE in t.$&&o.COMPONENT_CTOR in t.$.type},exports.isDecoratedComponentPrototype=function isDecoratedComponentPrototype(t){return n.isObject(t)&&o.DECORATORS_METADATA in t},exports.isVccOpts=function isVccOpts(t){return n.isObject(t)&&(e.isFunction(t.render)||e.isFunction(t.ssrRender))&&o.COMPONENT_CTOR in t};
