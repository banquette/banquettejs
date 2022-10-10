/*!
 * Banquette UtilsType v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isScalar = require('./is-scalar.js');
var ensureString = require('./ensure-string.js');

/**
 * Ensure the input is a scalar value.
 * If not, converts it to string.
 */
function ensureScalar(input) {
    if (isScalar.isScalar(input)) {
        return input;
    }
    return ensureString.ensureString(input);
}

exports.ensureScalar = ensureScalar;
