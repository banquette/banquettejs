/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isArray = require('@banquette/utils-type/_cjs/dev/is-array');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');

/**
 * Check if the input looks like a TiptapConfigurationInterface.
 */
function isTiptapConfiguration(input) {
    return isObject.isObject(input) && (isArray.isArray(input.toolbars) || isObject.isObject(input.modules) || isArray.isArray(input.extensions));
}

exports.isTiptapConfiguration = isTiptapConfiguration;
