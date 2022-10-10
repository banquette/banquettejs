/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var isNonEmptyString = require('@banquette/utils-string/_cjs/dev/is-non-empty-string');
var isFunction = require('@banquette/utils-type/_cjs/dev/is-function');
var isNullOrUndefined = require('@banquette/utils-type/_cjs/dev/is-null-or-undefined');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var getOrCreateComponentMetadata = require('../utils/get-or-create-component-metadata.js');

function Import(composableOrOptions, prefixOrAlias) {
    return function (prototype, propertyKey) {
        var data = getOrCreateComponentMetadata.getOrCreateComponentMetadata(prototype);
        if (!isNonEmptyString.isNonEmptyString(propertyKey) || isFunction.isFunction(prototype.constructor.prototype[propertyKey])) {
            throw new usage_exception.UsageException('You can only use @Import() on properties.');
        }
        if (!isUndefined.isUndefined(data.imports[propertyKey])) {
            throw new usage_exception.UsageException("You cannot define multiple @Import on the same property (".concat(propertyKey, ")."));
        }
        var options = isFunction.isFunction(composableOrOptions) ? { composable: composableOrOptions } : composableOrOptions;
        options.prefixOrAlias = !isUndefined.isUndefined(options.prefixOrAlias) ? options.prefixOrAlias : prefixOrAlias;
        if (isNullOrUndefined.isNullOrUndefined(options.prefixOrAlias)) {
            options.prefixOrAlias = function (i) { return propertyKey + i[0].toUpperCase() + i.substring(1); };
        }
        data.imports[propertyKey] = options;
    };
}

exports.Import = Import;
