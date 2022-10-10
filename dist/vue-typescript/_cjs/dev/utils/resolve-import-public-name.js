/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var isFunction = require('@banquette/utils-type/_cjs/dev/is-function');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isString = require('@banquette/utils-type/_cjs/dev/is-string');
var isType = require('@banquette/utils-type/_cjs/dev/is-type');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');

/**
 * Resolve the exposed name of a composable public element (prop, computed, method or data).
 * Can return `false` if the item should not be exposed
 */
function resolveImportPublicName(originalPrefix, originalName, prefixOrAlias) {
    if (!originalPrefix) {
        return originalName;
    }
    if (prefixOrAlias === null) {
        return originalPrefix + originalName;
    }
    if (prefixOrAlias === false) {
        return originalName;
    }
    if (isString.isString(prefixOrAlias)) {
        return prefixOrAlias + originalName;
    }
    if (isType.isType(prefixOrAlias, isObject.isObject)) {
        return !isUndefined.isUndefined(prefixOrAlias[originalName]) ? prefixOrAlias[originalName] : originalName;
    }
    if (isFunction.isFunction(prefixOrAlias)) {
        return prefixOrAlias(originalName);
    }
    throw new usage_exception.UsageException("Unable to resolve the public name of ".concat(originalName, ". Please check your decorator's configuration."));
}

exports.resolveImportPublicName = resolveImportPublicName;
