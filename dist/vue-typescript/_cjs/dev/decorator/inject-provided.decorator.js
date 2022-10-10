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
var getOrCreateComponentMetadata = require('../utils/get-or-create-component-metadata.js');

/**
 * Inject a value provided by a parent component.
 *
 * @param target       name of the value to inject
 * @param defaultValue default value if none is found in parent components
 */
function InjectProvided(target, defaultValue) {
    return function (prototype, propertyKey) {
        var data = getOrCreateComponentMetadata.getOrCreateComponentMetadata(prototype);
        if (!isNonEmptyString.isNonEmptyString(propertyKey) || isFunction.isFunction(prototype.constructor.prototype[propertyKey])) {
            throw new usage_exception.UsageException('You can only use @InjectProvided() on properties.');
        }
        data.injected[propertyKey] = { target: target, defaultValue: defaultValue };
    };
}

exports.InjectProvided = InjectProvided;
