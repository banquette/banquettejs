/*!
 * Banquette UtilsObject v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isArray } from '@banquette/utils-type/is-array';
import { isPojo } from '@banquette/utils-type/is-pojo';
import { isPrimitive } from '@banquette/utils-type/is-primitive';

var stack = [];
/**
 * Recursively clone a value.
 */
function cloneDeepPrimitive(value, depth) {
    if (depth === void 0) { depth = 0; }
    if (isPrimitive(value) || stack.indexOf(value) > -1) {
        return value;
    }
    try {
        stack.push(value);
        if (isArray(value)) {
            var output = [];
            for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                var item = value_1[_i];
                output.push(cloneDeepPrimitive(item, depth + 1));
            }
            return output;
        }
        if (isPojo(value, false)) {
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

export { cloneDeepPrimitive };
