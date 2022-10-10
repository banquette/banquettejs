/*!
 * Banquette ObjectObserver v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var constant = require('./constant.js');

/**
 * Try to extract the observer instance from a value.
 */
function extractObserver(value) {
    return isObject.isObject(value) ? (value[constant.ObserverInstance] || null) : null;
}

exports.extractObserver = extractObserver;
