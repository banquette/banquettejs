/*!
 * Banquette UtilsObject v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isArray = require('@banquette/utils-type/_cjs/dev/is-array');
var isPojo = require('@banquette/utils-type/_cjs/dev/is-pojo');
var isPrimitive = require('@banquette/utils-type/_cjs/dev/is-primitive');

var stack = [];
/**
 * Recursively clone a value.
 */
function cloneDeepPrimitive(value, depth) {
    if (depth === void 0) { depth = 0; }
    if (isPrimitive.isPrimitive(value) || stack.indexOf(value) > -1) {
        return value;
    }
    try {
        stack.push(value);
        if (isArray.isArray(value)) {
            var output = [];
            for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                var item = value_1[_i];
                output.push(cloneDeepPrimitive(item, depth + 1));
            }
            return output;
        }
        if (isPojo.isPojo(value, false)) {
            var output = {};
            for (var _a = 0, _b = Object.keys(value); _a < _b.length; _a++) {
                var key = _b[_a];
                output[key] = cloneDeepPrimitive(value[key], depth + 1);
            }
            return output;
        }
        // All non primitive values, expect pojo and arrays are not cloned.
        // So functions, promises, buffers, etc. will be returned as is.
        return value;
    }
    finally {
        stack.pop();
    }
}

exports.cloneDeepPrimitive = cloneDeepPrimitive;
