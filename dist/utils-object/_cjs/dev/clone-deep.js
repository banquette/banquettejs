/*!
 * Banquette UtilsObject v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isArray = require('@banquette/utils-type/_cjs/dev/is-array');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var extend = require('./extend.js');

/**
 * Recursively clone a value.
 */
function cloneDeep(value) {
    if (isArray.isArray(value)) {
        return extend.extend([], [value], true);
    }
    else if (isObject.isObject(value)) {
        return extend.extend({}, [value], true);
    }
    return value;
}

exports.cloneDeep = cloneDeep;
