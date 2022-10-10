/*!
 * Banquette Validation v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { ensureArray } from '@banquette/utils-type/ensure-array';
import { ValidationContext } from './validation-context.js';

/**
 * A utility method that ensure te ValidationContext is always set when the validator is used.
 * You should use this method anytime you want to create a custom validator.
 */
function createValidator(validator, tags, groups) {
    return {
        tags: ensureArray(tags),
        groups: ensureArray(groups),
        validate: function (value, contextOrOptions) {
            return validator.validate(ValidationContext.EnsureValidationContext(value, contextOrOptions));
        }
    };
}

export { createValidator };
