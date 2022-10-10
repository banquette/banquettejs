/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isFunction = require('@banquette/utils-type/_cjs/dev/is-function');
var getPropertyDescriptor = require('./get-property-descriptor.js');

function isFunctionGetterSafe(ctor, property) {
    var descriptor = getPropertyDescriptor.getPropertyDescriptor(ctor, property);
    if (!descriptor || descriptor.get || descriptor.set) {
        return false;
    }
    return isFunction.isFunction(descriptor.value);
}

exports.isFunctionGetterSafe = isFunctionGetterSafe;
