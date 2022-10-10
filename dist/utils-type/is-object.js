/*!
 * Banquette UtilsType v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isArray } from './is-array.js';

/**
 * Determines if a reference is an `Object`. Unlike `typeof` in JavaScript, `null`s are not
 * considered to be objects. Note that JavaScript arrays are objects.
 */
function isObject(value, strict) {
    if (strict === void 0) { strict = false; }
    // http://jsperf.com/isobject4
    return value !== null && (typeof value === "object" && (!strict || !isArray(value)));
}
/**
 * Test if the input is a literal object (created using the Object constructor directly).
 */
function isObjectLiteral(value) {
    return isObject(value) && Object.getPrototypeOf(value) === Object.prototype && value.toString() === '[object Object]';
}

export { isObject, isObjectLiteral };
