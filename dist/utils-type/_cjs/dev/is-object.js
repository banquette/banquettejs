/*!
 * Banquette UtilsType v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isArray = require('./is-array.js');

/**
 * Determines if a reference is an `Object`. Unlike `typeof` in JavaScript, `null`s are not
 * considered to be objects. Note that JavaScript arrays are objects.
 */
function isObject(value, strict) {
    if (strict === void 0) { strict = false; }
    // http://jsperf.com/isobject4
    return value !== null && (typeof value === "object" && (!strict || !isArray.isArray(value)));
}
/**
 * Test if the input is a literal object (created using the Object constructor directly).
 */
function isObjectLiteral(value) {
    return isObject(value) && Object.getPrototypeOf(value) === Object.prototype && value.toString() === '[object Object]';
}

exports.isObject = isObject;
exports.isObjectLiteral = isObjectLiteral;
