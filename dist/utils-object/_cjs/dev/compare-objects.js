/*!
 * Banquette UtilsObject v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isArray = require('@banquette/utils-type/_cjs/dev/is-array');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');

/**
 * Compares two objects and returns the difference between them.
 *
 * @param {object}  a
 * @param {object}  b
 * @param {boolean} keepBothValues (optional, default: false) if true, for each difference the old
 *                                 value is stored as a "before" key and the new value as a "after" key.
 *                                 if false, only the new value is returned with no additional object.
 *
 * @return {object}
 */
function compareObjects(a, b, keepBothValues) {
    if (keepBothValues === void 0) { keepBothValues = false; }
    var output = {};
    if (!isObject.isObject(a) || !isObject.isObject(b)) {
        return output;
    }
    for (var key in a) {
        if (a.hasOwnProperty && !a.hasOwnProperty(key)) {
            continue;
        }
        var value = a[key];
        if (!isUndefined.isUndefined(b[key])) {
            if ((isObject.isObjectLiteral(value) || isArray.isArray(value)) && (isObject.isObjectLiteral(b[key]) || isArray.isArray(b[key]))) {
                var subOutput = compareObjects(value, b[key], keepBothValues);
                if (Object.keys(subOutput).length > 0) {
                    output[key] = subOutput;
                }
            }
            else if (value !== b[key]) {
                if (keepBothValues) {
                    output[key] = {
                        a: value,
                        b: b[key],
                    };
                }
                else {
                    output[key] = b[key];
                }
            }
        }
        else if (isUndefined.isUndefined(value)) {
            // In this case both a and b are "undefined", so there is no difference after all.
            continue;
        }
        else if (keepBothValues) {
            output[key] = {
                a: value,
                b: undefined,
            };
        }
        else {
            output[key] = undefined;
        }
    }
    for (var key in b) {
        if (b.hasOwnProperty && !b.hasOwnProperty(key) || !isUndefined.isUndefined(a[key]) || isUndefined.isUndefined(b[key])) {
            continue;
        }
        if (keepBothValues) {
            output[key] = {
                a: undefined,
                b: b[key],
            };
        }
        else {
            output[key] = b[key];
        }
    }
    return output;
}

exports.compareObjects = compareObjects;
