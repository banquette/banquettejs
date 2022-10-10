/*!
 * Banquette UtilsType v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isArray } from './is-array.js';
import { isScalar } from './is-scalar.js';

var testObjValue = function (value) {
    if (isArray(value)) {
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var item = value_1[_i];
            if (!testObjValue(item)) {
                return false;
            }
        }
        return true;
    }
    return isScalar(value) || isPojo(value, true);
};
/**
 * Test if the input is a plain old javascript object.
 *
 * @param {any}     input
 * @param {boolean} deep  (optional, default: true) if true, the check will be done recursively on all properties of the object.
 *
 * @return {boolean}
 */
function isPojo(input, deep) {
    if (deep === void 0) { deep = true; }
    if (input === null || typeof input !== "object") {
        return false;
    }
    var proto = Object.getPrototypeOf(input);
    if (proto !== null && proto !== Object.prototype) {
        return false;
    }
    if (!deep) {
        return true;
    }
    for (var _i = 0, _a = Object.keys(input); _i < _a.length; _i++) {
        var key = _a[_i];
        if (!testObjValue(input[key])) {
            return false;
        }
    }
    return true;
}

export { isPojo };
