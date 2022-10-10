/*!
 * Banquette Model v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var primitive = require('../transformer/type/primitive.js');
var pojo = require('../transformer/type/root/pojo.js');
var utils = require('./utils.js');

function Pojo(transformer) {
    return utils.createRelationAwareTransformableDecorator(pojo.PojoTransformerSymbol, transformer, primitive.Primitive());
}

exports.Pojo = Pojo;
