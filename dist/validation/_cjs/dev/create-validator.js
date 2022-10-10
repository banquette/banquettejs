/*!
 * Banquette Validation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ensureArray = require('@banquette/utils-type/_cjs/dev/ensure-array');
var validationContext = require('./validation-context.js');

/**
 * A utility method that ensure te ValidationContext is always set when the validator is used.
 * You should use this method anytime you want to create a custom validator.
 */
function createValidator(validator, tags, groups) {
    return {
        tags: ensureArray.ensureArray(tags),
        groups: ensureArray.ensureArray(groups),
        validate: function (value, contextOrOptions) {
            return validator.validate(validationContext.ValidationContext.EnsureValidationContext(value, contextOrOptions));
        }
    };
}

exports.createValidator = createValidator;
