/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var getObjectValue = require('@banquette/utils-object/_cjs/dev/get-object-value');
var isNonEmptyString = require('@banquette/utils-string/_cjs/dev/is-non-empty-string');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var getOrCreateComponentMetadata = require('../utils/get-or-create-component-metadata.js');

function Expose(optionsOrExposeAs, observe) {
    if (optionsOrExposeAs === void 0) { optionsOrExposeAs = null; }
    if (observe === void 0) { observe = true; }
    return function (prototype, propertyKey) {
        if (!isNonEmptyString.isNonEmptyString(propertyKey)) {
            throw new usage_exception.UsageException('You can only use @Expose() on properties or methods.');
        }
        var data = getOrCreateComponentMetadata.getOrCreateComponentMetadata(prototype);
        var isObj = optionsOrExposeAs !== null && isObject.isObject(optionsOrExposeAs);
        data.exposed[propertyKey] = {
            exposeAs: isObj ? getObjectValue.getObjectValue(optionsOrExposeAs, 'exposeAs', propertyKey) : (optionsOrExposeAs || propertyKey),
            observe: isObj ? getObjectValue.getObjectValue(optionsOrExposeAs, 'observe', observe) : observe
        };
    };
}

exports.Expose = Expose;
