/*!
 * Banquette Api v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@banquette/model/_cjs/dev/decorator/utils');
var raw = require('@banquette/model/_cjs/dev/transformer/type/raw');
var api = require('../transformer/api.js');

function Api(transformer) {
    return utils.createRelationAwareTransformableDecorator(api.ApiTransformerSymbol, transformer, raw.Raw());
}

exports.Api = Api;
