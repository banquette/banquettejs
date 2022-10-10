/*!
 * Banquette UtilsObject v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');

/**
 * Add a value to an object if it's not undefined.
 */
function addToObjectIfDefined(obj, key, value) {
    if (!isUndefined.isUndefined(value)) {
        obj[key] = value;
    }
}

exports.addToObjectIfDefined = addToObjectIfDefined;
