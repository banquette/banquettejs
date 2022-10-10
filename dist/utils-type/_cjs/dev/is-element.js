/*!
 * Banquette UtilsType v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isObject = require('./is-object.js');

/**
 * Determines if a reference is a DOM element (or wrapped jQuery element).
 */
function isElement(value) {
    return !!(isObject.isObject(value) &&
        (value.nodeName // We are a direct element.
            || (value.prop && value.attr && value.find))); // We have an on and find method part of jQuery API.
}

exports.isElement = isElement;
