/*!
 * Banquette Validation v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { UsageException } from '@banquette/exception/usage.exception';
import { isIterable } from '@banquette/utils-type/is-iterable';
import { isObject } from '@banquette/utils-type/is-object';
import { isValidatorContainer } from '../utils.js';
import { ValidationContext } from '../validation-context.js';

/**
 * Execute a validator for each item in the validated value.
 */
function Foreach(validator) {
    var ensureContainer = function (path) {
        if (!isValidatorContainer(validator)) {
            throw new UsageException("A ValidatorContainerInterface is expected for \"".concat(path, "\"."));
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
            var context = ValidationContext.EnsureValidationContext(value, contextOrOptions);
            if (isIterable(value) || (value !== null && isObject(value))) {
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

export { Foreach };
