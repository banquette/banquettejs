/*!
 * Banquette UtilsObject v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { ensureArray } from '@banquette/utils-type/ensure-array';
import { ensureBoolean } from '@banquette/utils-type/ensure-boolean';
import { ensureNumber } from '@banquette/utils-type/ensure-number';
import { ensureObject } from '@banquette/utils-type/ensure-object';
import { ensureString } from '@banquette/utils-type/ensure-string';
import { isArray } from '@banquette/utils-type/is-array';
import { isObject } from '@banquette/utils-type/is-object';
import { isUndefined } from '@banquette/utils-type/is-undefined';

/**
 * Extract a value from an object and ensure it is a string.
 * If the key is not found, the default value is returned.
 */
function getObjectValueAsString(data, key, defaultValue) {
    return ensureString(getObjectValue(data, key, defaultValue));
}
/**
 * Extract a value from an object and ensure it is a valid number.
 * If the key is not found, the default value is returned.
 */
function getObjectValueAsNumber(data, key, defaultValue) {
    return ensureNumber(getObjectValue(data, key, defaultValue));
}
/**
 * Extract a value from an object and ensure it is a boolean.
 * If the key is not found, the default value is returned.
 */
function getObjectValueAsBoolean(data, key, defaultValue) {
    if (defaultValue === void 0) { defaultValue = false; }
    return ensureBoolean(getObjectValue(data, key, defaultValue));
}
/**
 * Extract a value from an object and ensure it is an array.
 * If the key is not found, the default value is returned.
 */
function getObjectValueAsArray(data, key, defaultValue) {
    if (defaultValue === void 0) { defaultValue = []; }
    return ensureArray(getObjectValue(data, key, defaultValue));
}
/**
 * Extract a value from an object and ensure it is an object.
 * If the key is not found, the default value is returned.
 */
function getObjectValueAsObject(data, key, defaultValue) {
    if (defaultValue === void 0) { defaultValue = null; }
    return ensureObject(getObjectValue(data, key, defaultValue));
}
/**
 * Try to get a value from an object and returns a default value if not found.
 * The "key" parameter can be an array for multi-dimensional search.
 * You can also write it as a string separated with "->".
 */
function getObjectValue(data, key, defaultValue) {
    if (defaultValue === void 0) { defaultValue = null; }
    if (!isArray(key)) {
        key = String(key).split("->");
    }
    var container = data;
    for (var _i = 0, key_1 = key; _i < key_1.length; _i++) {
        var item = key_1[_i];
        if (!isObject(container) || isUndefined(container[item])) {
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

export { getObjectValue, getObjectValueAsArray, getObjectValueAsBoolean, getObjectValueAsNumber, getObjectValueAsObject, getObjectValueAsString, getValueInObject };
