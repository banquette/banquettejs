/*!
 * Banquette Model v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var primitive = require('./transformer/type/primitive.js');
var model = require('./transformer/type/model.js');
var collection = require('./transformer/type/collection.js');

/**
 * Used to keep the original type (inferred from the object properties)
 * while adding the Record<string, TransformerFactory> constraint.
 */
function TExtend(arg) {
    return arg;
}
/**
 * Shortcut object holding a reference on all transformers' symbols.
 * You are free to call the factory directly if you prefer.
 */
var T = TExtend({
    Primitive: primitive.Primitive,
    Model: model.Model,
    Collection: collection.Collection
});
/**
 * To extend "T":
 *
 * import { TExtend, T as Base } from "@banquette/model";
 * import { Test } from "transformer/test";
 *
 * export const T = TExtend({
 *     ...Base,
 *     Test
 * });
 *
 * Then when using "T", instead of importing it from `@banquette/model`, import your extended object.
 */

exports.T = T;
exports.TExtend = TExtend;
