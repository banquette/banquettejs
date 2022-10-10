/*!
 * Banquette UtilsType v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isFunction = require('./is-function.js');
var isObject = require('./is-object.js');
var isUndefined = require('./is-undefined.js');

/**
 * Test if the input is a valid momentjs date.
 */
function isValidMomentDate(value) {
    return isObject.isObject(value) &&
        (!isUndefined.isUndefined(value.isMoment) || !isUndefined.isUndefined(value._isAMomentObject)) &&
        ((isFunction.isFunction(value.isValid) && value.isValid()) || value._isValid === true);
}

exports.isValidMomentDate = isValidMomentDate;
