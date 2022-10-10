/*!
 * Banquette UtilsObject v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isObject = require('@banquette/utils-type/_cjs/dev/is-object');

/**
 * Remove all the keys from {obj} that are not defined in {mask};
 */
function filterWithMask(obj, mask) {
    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var key = _a[_i];
        if (!(key in mask)) {
            delete obj[key];
            continue;
        }
        if (isObject.isObject(obj[key]) && isObject.isObject(mask[key])) {
            obj[key] = filterWithMask(obj[key], mask[key]);
        }
    }
    return obj;
}

exports.filterWithMask = filterWithMask;
