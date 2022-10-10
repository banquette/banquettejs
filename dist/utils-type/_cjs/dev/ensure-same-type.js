/*!
 * Banquette UtilsType v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ensureArray = require('./ensure-array.js');
var ensureBoolean = require('./ensure-boolean.js');
var ensureNumber = require('./ensure-number.js');
var ensureObject = require('./ensure-object.js');
var ensureString = require('./ensure-string.js');
var isArray = require('./is-array.js');

/**
 * Ensure the input is converted to a the type of the reference value.
 */
function ensureSameType(input, referenceValue) {
    var targetType = referenceValue === null ? 'null' : typeof (referenceValue);
    switch (targetType) {
        case 'string': return ensureString.ensureString(input);
        case 'number':
        case 'bigint': return ensureNumber.ensureNumber(input);
        case 'boolean': return ensureBoolean.ensureBoolean(input);
        case 'object': {
            if (isArray.isArray(referenceValue)) {
                return ensureArray.ensureArray(input);
            }
            return ensureObject.ensureObject(input);
        }
    }
    return input;
}

exports.ensureSameType = ensureSameType;
