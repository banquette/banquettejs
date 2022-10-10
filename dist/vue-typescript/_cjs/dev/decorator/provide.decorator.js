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
 * Provide a property to child components.
 *
 * @param provideAs If set to `null`, the value is provided with the same name as the property the decorator has been put on.
 *                  If set to a `string`, the value is provided using it as name.
 * @param readonly  If `true` the value will not be writeable by child components.
 */
function Provide(provideAs, readonly) {
    if (provideAs === void 0) { provideAs = null; }
    if (readonly === void 0) { readonly = true; }
    return function (prototype, propertyKey) {
        var data = getOrCreateComponentMetadata.getOrCreateComponentMetadata(prototype);
        if (!isNonEmptyString.isNonEmptyString(propertyKey) || isFunction.isFunction(prototype.constructor.prototype[propertyKey])) {
            throw new usage_exception.UsageException('You can only use @Provide() on properties.');
        }
        data.provided[propertyKey] = {
            provideAs: provideAs || propertyKey,
            readonly: readonly
        };
    };
}

exports.Provide = Provide;
