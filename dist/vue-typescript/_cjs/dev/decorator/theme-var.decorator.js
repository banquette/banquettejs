/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var trim = require('@banquette/utils-string/_cjs/dev/format/trim');
var isNonEmptyString = require('@banquette/utils-string/_cjs/dev/is-non-empty-string');
var isFunction = require('@banquette/utils-type/_cjs/dev/is-function');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isType = require('@banquette/utils-type/_cjs/dev/is-type');
var getOrCreateComponentMetadata = require('../utils/get-or-create-component-metadata.js');

function ThemeVar(nameOrOptions, defaultValue) {
    return function (prototype, propertyKey) {
        if (!isNonEmptyString.isNonEmptyString(propertyKey) || isFunction.isFunction(prototype.constructor.prototype[propertyKey])) {
            throw new usage_exception.UsageException('You can only use @ThemeVar() on properties.');
        }
        if (!isType.isType(nameOrOptions, isObject.isObject)) {
            nameOrOptions = { name: nameOrOptions, defaultValue: defaultValue };
        }
        nameOrOptions.name = trim.trim(nameOrOptions.name);
        var data = getOrCreateComponentMetadata.getOrCreateComponentMetadata(prototype);
        data.themeVars[propertyKey] = nameOrOptions;
    };
}

exports.ThemeVar = ThemeVar;
