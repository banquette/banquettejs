/*!
 * Banquette UtilsType v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isScalar = require('./is-scalar.js');
var ensureString = require('./ensure-string.js');
var isObject = require('./is-object.js');
var isArray = require('./is-array.js');

/**
 * Ensure the input is a scalar value.
 * If not, converts it to string.
 */
function ensureScalarOrCompound(input) {
    if (isScalar.isScalar(input)) {
        return input;
    }
    if (isArray.isArray(input) || isObject.isObjectLiteral(input)) {
        for (var _i = 0, _a = Object.keys(input); _i < _a.length; _i++) {
            var key = _a[_i];
            input[key] = ensureScalarOrCompound(input[key]);
        }
        return input;
    }
    return ensureString.ensureString(input);
}

exports.ensureScalarOrCompound = ensureScalarOrCompound;
