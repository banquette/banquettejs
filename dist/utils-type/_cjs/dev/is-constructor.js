/*!
 * Banquette UtilsType v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Test if the input value is an object constructor.
 */
function isConstructor(value) {
    return typeof (value) === 'function' && !!value.prototype && value.prototype.constructor === value;
}

exports.isConstructor = isConstructor;
