/*!
 * Banquette UtilsObject v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ensureArray = require('@banquette/utils-type/_cjs/dev/ensure-array');
var isArray = require('@banquette/utils-type/_cjs/dev/is-array');
var isConstructor = require('@banquette/utils-type/_cjs/dev/is-constructor');
var isDate = require('@banquette/utils-type/_cjs/dev/is-date');
var isElement = require('@banquette/utils-type/_cjs/dev/is-element');
var isFunction = require('@banquette/utils-type/_cjs/dev/is-function');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isPromiseLike = require('@banquette/utils-type/_cjs/dev/is-promise-like');
var isRegExp = require('@banquette/utils-type/_cjs/dev/is-reg-exp');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');

/**
 * Copy values from objs into dst, optionally recursively.
 * Promises are copied as is, so they will be shared between dst and objs.
 */
function extend(dst, objs, deep) {
    if (deep === void 0) { deep = true; }
    objs = ensureArray.ensureArray(objs);
    for (var i = 0, ii = objs.length; i < ii; ++i) {
        var obj = objs[i];
        if (!isObject.isObject(obj) && !isFunction.isFunction(obj)) {
            continue;
        }
        var keys = Object.keys(obj);
        for (var j = 0, jj = keys.length; j < jj; j++) {
            var key = keys[j];
            var descriptor = Object.getOwnPropertyDescriptor(obj, key);
            if (!isUndefined.isUndefined(descriptor) && (!isUndefined.isUndefined(descriptor.get) || !isUndefined.isUndefined(descriptor.set))) {
                Object.defineProperty(dst, key, descriptor);
                continue;
            }
            var src = obj[key];
            if (deep && isObject.isObject(src)) {
                if (isDate.isDate(src)) {
                    dst[key] = new Date(src.valueOf());
                }
                else if (isRegExp.isRegExp(src)) {
                    dst[key] = new RegExp(src);
                }
                else if (src.nodeName) {
                    dst[key] = src.cloneNode(true);
                }
                else if (isElement.isElement(src)) {
                    dst[key] = src.clone();
                }
                else if (isPromiseLike.isPromiseLike(src) || isConstructor.isConstructor(src)) {
                    dst[key] = src;
                }
                else {
                    var isar = isArray.isArray(src);
                    if (!isObject.isObject(dst[key])) {
                        dst[key] = isar ? [] : {};
                    }
                    if (isar) {
                        dst[key] = dst[key].concat(src);
                    }
                    else {
                        extend(dst[key], [src], true);
                    }
                }
            }
            else {
                dst[key] = src;
            }
        }
    }
    return dst;
}

exports.extend = extend;
