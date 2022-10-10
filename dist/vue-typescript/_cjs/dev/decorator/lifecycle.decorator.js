/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var isNonEmptyString = require('@banquette/utils-string/_cjs/dev/is-non-empty-string');
var ensureArray = require('@banquette/utils-type/_cjs/dev/ensure-array');
var isFunction = require('@banquette/utils-type/_cjs/dev/is-function');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var getOrCreateComponentMetadata = require('../utils/get-or-create-component-metadata.js');

/**
 * Mark a method as exposed to the template.
 */
function Lifecycle(type) {
    return function (prototype, propertyKey) {
        var data = getOrCreateComponentMetadata.getOrCreateComponentMetadata(prototype);
        if (!isNonEmptyString.isNonEmptyString(propertyKey) || !isFunction.isFunction(prototype.constructor.prototype[propertyKey])) {
            throw new usage_exception.UsageException('You can only use @Lifecycle() on methods.');
        }
        var types = ensureArray.ensureArray(type);
        for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
            var type_1 = types_1[_i];
            if (isUndefined.isUndefined(data.hooks[type_1])) {
                data.hooks[type_1] = [];
            }
            // @ts-ignore
            if (data.hooks[type_1].indexOf(propertyKey) < 0) {
                // @ts-ignore
                data.hooks[type_1].push(propertyKey);
            }
        }
    };
}

exports.Lifecycle = Lifecycle;
