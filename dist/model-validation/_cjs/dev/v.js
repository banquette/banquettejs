/*!
 * Banquette ModelValidation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('./_virtual/_tslib.js');
var v = require('@banquette/validation/_cjs/dev/v');
var model = require('./type/model.js');

var V = v.VExtend(_tslib.__assign(_tslib.__assign({}, v.V), { Model: model.Model }));

exports.V = V;
