/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var getObjectValue = require('@banquette/utils-object/_cjs/dev/get-object-value');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var getOrCreateComponentMetadata = require('../utils/get-or-create-component-metadata.js');
var expose_decorator = require('./expose.decorator.js');

function Computed(optionsOrExposeAs, onTrigger, onTrack, exposeAs) {
    if (optionsOrExposeAs === void 0) { optionsOrExposeAs = {}; }
    if (exposeAs === void 0) { exposeAs = null; }
    return function (prototype, propertyKey) {
        if (isUndefined.isUndefined(propertyKey)) {
            throw new usage_exception.UsageException('You can only use @Computed() on properties.');
        }
        var data = getOrCreateComponentMetadata.getOrCreateComponentMetadata(prototype);
        var isObj = optionsOrExposeAs !== null && isObject.isObject(optionsOrExposeAs);
        data.computed[propertyKey] = {
            onTrigger: isObj ? getObjectValue.getObjectValue(optionsOrExposeAs, 'onTrigger', undefined) : (onTrigger || undefined),
            onTrack: isObj ? getObjectValue.getObjectValue(optionsOrExposeAs, 'onTrack', undefined) : (onTrack || undefined)
        };
        exposeAs = isObj ? getObjectValue.getObjectValue(optionsOrExposeAs, 'exposeAs', null) : optionsOrExposeAs;
        if (exposeAs !== false && isUndefined.isUndefined(data.exposed[propertyKey])) {
            expose_decorator.Expose(exposeAs)(prototype, propertyKey);
        }
    };
}

exports.Computed = Computed;
