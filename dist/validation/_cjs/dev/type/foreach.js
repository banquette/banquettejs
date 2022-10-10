/*!
 * Banquette Validation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var isIterable = require('@banquette/utils-type/_cjs/dev/is-iterable');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var utils = require('../utils.js');
var validationContext = require('../validation-context.js');

/**
 * Execute a validator for each item in the validated value.
 */
function Foreach(validator) {
    var ensureContainer = function (path) {
        if (!utils.isValidatorContainer(validator)) {
            throw new usage_exception.UsageException("A ValidatorContainerInterface is expected for \"".concat(path, "\"."));
        }
        return validator;
    };
    return {
        length: 0,
        /**
         * Register a new validator into the container or one of its children.
         */
        set: function (path, validator) {
            ensureContainer(path).set(path, validator);
        },
        /**
         * Test if a validator has been registered for a given path.
         */
        has: function (path) {
            return ensureContainer(path).has(path);
        },
        /**
         * Remove a validator from the container or one of its children.
         */
        remove: function (path) {
            ensureContainer(path).remove(path);
        },
        /**
         * Validate a value.
         */
        validate: function (value, contextOrOptions) {
            var context = validationContext.ValidationContext.EnsureValidationContext(value, contextOrOptions);
            if (isIterable.isIterable(value) || (value !== null && isObject.isObject(value))) {
                for (var _i = 0, _a = Object.entries(value); _i < _a.length; _i++) {
                    var _b = _a[_i], k = _b[0], v = _b[1];
                    var subContext = context.createSubContext(k, v, [], context.groups);
                    if (subContext.shouldValidate(validator)) {
                        validator.validate(v, subContext);
                    }
                }
            }
            return context.result;
        }
    };
}

exports.Foreach = Foreach;
