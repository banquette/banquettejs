/*!
 * Banquette Api v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@banquette/model/_cjs/dev/decorator/utils');
var raw = require('@banquette/model/_cjs/dev/transformer/type/raw');
var http = require('../transformer/http.js');

function Http(transformer) {
    if (transformer === void 0) { transformer = raw.Raw(); }
    var transformable = utils.createTransformableDecorator(http.HttpTransformerSymbol, transformer);
    return function (prototype, propertyKey) {
        transformable(prototype, propertyKey);
    };
}

exports.Http = Http;
