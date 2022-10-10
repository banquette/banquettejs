/*!
 * Banquette Validation v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { ensureArray } from '@banquette/utils-type/ensure-array';
import { isObject } from '@banquette/utils-type/is-object';
import { isString } from '@banquette/utils-type/is-string';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { ValidationResult } from './validation-result.js';

/**
 * Test if a validator is a container.
 */
function isValidatorContainer(input) {
    return isObject(input) && 'validate' in input && 'set' in input && 'remove' in input && 'has' in input;
}
/**
 * Test if a validator is a container.
 */
function isValidationContext(input) {
    return isObject(input) && input.result instanceof ValidationResult;
}
/**
 * Split a path into an array.
 */
function splitPath(path) {
    return (path.length > 0 && path[0] === '/' ? path.substring(1) : path).split('/');
}
/**
 * Shorthand function to ensure all attributes of a `ValidatorOptionsInterface` are defined.
 */
function assignOptionsDefaults(options, message, type, tags, groups) {
    if (tags === void 0) { tags = []; }
    if (groups === void 0) { groups = []; }
    if (isString(options)) {
        options = { message: options };
    }
    return {
        message: !isUndefined(options.message) ? options.message : message,
        type: options.type || type,
        tags: ensureArray(options.tags || tags),
        groups: ensureArray(options.groups || groups)
    };
}

export { assignOptionsDefaults, isValidationContext, isValidatorContainer, splitPath };
