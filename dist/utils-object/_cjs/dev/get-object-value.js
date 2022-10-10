/*!
 * Banquette UtilsObject v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ensureArray = require('@banquette/utils-type/_cjs/dev/ensure-array');
var ensureBoolean = require('@banquette/utils-type/_cjs/dev/ensure-boolean');
var ensureNumber = require('@banquette/utils-type/_cjs/dev/ensure-number');
var ensureObject = require('@banquette/utils-type/_cjs/dev/ensure-object');
var ensureString = require('@banquette/utils-type/_cjs/dev/ensure-string');
var isArray = require('@banquette/utils-type/_cjs/dev/is-array');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');

/**
 * Extract a value from an object and ensure it is a string.
 * If the key is not found, the default value is returned.
 */
function getObjectValueAsString(data, key, defaultValue) {
    return ensureString.ensureString(getObjectValue(data, key, defaultValue));
}
/**
 * Extract a value from an object and ensure it is a valid number.
 * If the key is not found, the default value is returned.
 */
function getObjectValueAsNumber(data, key, defaultValue) {
    return ensureNumber.ensureNumber(getObjectValue(data, key, defaultValue));
}
/**
 * Extract a value from an object and ensure it is a boolean.
 * If the key is not found, the default value is returned.
 */
function getObjectValueAsBoolean(data, key, defaultValue) {
    if (defaultValue === void 0) { defaultValue = false; }
    return ensureBoolean.ensureBoolean(getObjectValue(data, key, defaultValue));
}
/**
 * Extract a value from an object and ensure it is an array.
 * If the key is not found, the default value is returned.
 */
function getObjectValueAsArray(data, key, defaultValue) {
    if (defaultValue === void 0) { defaultValue = []; }
    return ensureArray.ensureArray(getObjectValue(data, key, defaultValue));
}
/**
 * Extract a value from an object and ensure it is an object.
 * If the key is not found, the default value is returned.
 */
function getObjectValueAsObject(data, key, defaultValue) {
    if (defaultValue === void 0) { defaultValue = null; }
    return ensureObject.ensureObject(getObjectValue(data, key, defaultValue));
}
/**
 * Try to get a value from an object and returns a default value if not found.
 * The "key" parameter can be an array for multi-dimensional search.
 * You can also write it as a string separated with "->".
 */
function getObjectValue(data, key, defaultValue) {
    if (defaultValue === void 0) { defaultValue = null; }
    if (!isArray.isArray(key)) {
        key = String(key).split("->");
    }
    var container = data;
    for (var _i = 0, key_1 = key; _i < key_1.length; _i++) {
        var item = key_1[_i];
        if (!isObject.isObject(container) || isUndefined.isUndefined(container[item])) {
            return defaultValue;
        }
        container = container[item];
    }
    return container;
}
/**
 * Try to find a value in an object.
 *
 * @deprecated Use getObjectValue instead.
 */
function getValueInObject(data, search, defaultValue) {
    if (defaultValue === void 0) { defaultValue = null; }
    return getObjectValue(data, search, defaultValue);
}

exports.getObjectValue = getObjectValue;
exports.getObjectValueAsArray = getObjectValueAsArray;
exports.getObjectValueAsBoolean = getObjectValueAsBoolean;
exports.getObjectValueAsNumber = getObjectValueAsNumber;
exports.getObjectValueAsObject = getObjectValueAsObject;
exports.getObjectValueAsString = getObjectValueAsString;
exports.getValueInObject = getValueInObject;
