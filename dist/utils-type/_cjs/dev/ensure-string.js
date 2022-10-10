/*!
 * Banquette UtilsType v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ensureSerializable = require('./ensure-serializable.js');
var isArray = require('./is-array.js');
var isNullOrUndefined = require('./is-null-or-undefined.js');
var isObject = require('./is-object.js');
var isString = require('./is-string.js');
var isSymbol = require('./is-symbol.js');
var utils = require('./utils.js');

/**
 * Ensure the input is converted to a string.
 *
 * Inspired by lodash/toString.
 * @see https://lodash.com/docs/4.17.15#toString
 */
function ensureString(input) {
    if (isNullOrUndefined.isNullOrUndefined(input)) {
        return '';
    }
    if (isString.isString(input)) {
        return input;
    }
    if (isObject.isObject(input)) {
        return JSON.stringify(ensureSerializable.ensureSerializable(input));
    }
    if (isArray.isArray(input)) {
        return JSON.stringify(input.map(toString));
    }
    if (isSymbol.isSymbol(input)) {
        return utils.getSymbolDescription(input);
    }
    var genericOutput = (input + '');
    return (genericOutput === '0' && (1 / input) == -(1 / 0)) ? '-0' : genericOutput;
}

exports.ensureString = ensureString;
