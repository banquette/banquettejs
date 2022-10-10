/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var getObjectKeys = require('@banquette/utils-object/_cjs/dev/get-object-keys');
var isNonEmptyString = require('@banquette/utils-string/_cjs/dev/is-non-empty-string');
var isFunction = require('@banquette/utils-type/_cjs/dev/is-function');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var getOrCreateComponentMetadata = require('../utils/get-or-create-component-metadata.js');

/**
 * Allow you to define that a property of a component's class should be declared as a Vue prop.
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return function (prototype, propertyKey) {
        if (!isNonEmptyString.isNonEmptyString(propertyKey) || isFunction.isFunction(prototype.constructor.prototype[propertyKey])) {
            throw new usage_exception.UsageException('You can only use @Prop() on properties.');
        }
        var data = getOrCreateComponentMetadata.getOrCreateComponentMetadata(prototype);
        if (!isUndefined.isUndefined(data.props[propertyKey])) {
            for (var _i = 0, _a = getObjectKeys.getObjectKeys(options); _i < _a.length; _i++) {
                var key = _a[_i];
                data.props[propertyKey][key] = options[key];
            }
        }
        else {
            data.props[propertyKey] = _tslib.__assign(_tslib.__assign({}, options), { propertyName: propertyKey });
        }
    };
}

exports.Prop = Prop;
