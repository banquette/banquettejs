/*!
 * Banquette Model v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('./utils.js');
var primitive = require('../transformer/type/primitive.js');
var json = require('../transformer/type/root/json.js');

function Json(transformer) {
    if (transformer === void 0) { transformer = primitive.Primitive(); }
    return utils.createTransformableDecorator(json.JsonTransformerSymbol, transformer);
}

exports.Json = Json;
