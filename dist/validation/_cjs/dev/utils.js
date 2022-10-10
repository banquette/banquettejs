/*!
 * Banquette Validation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ensureArray = require('@banquette/utils-type/_cjs/dev/ensure-array');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isString = require('@banquette/utils-type/_cjs/dev/is-string');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var validationResult = require('./validation-result.js');

/**
 * Test if a validator is a container.
 */
function isValidatorContainer(input) {
    return isObject.isObject(input) && 'validate' in input && 'set' in input && 'remove' in input && 'has' in input;
}
/**
 * Test if a validator is a container.
 */
function isValidationContext(input) {
    return isObject.isObject(input) && input.result instanceof validationResult.ValidationResult;
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
    if (isString.isString(options)) {
        options = { message: options };
    }
    return {
        message: !isUndefined.isUndefined(options.message) ? options.message : message,
        type: options.type || type,
        tags: ensureArray.ensureArray(options.tags || tags),
        groups: ensureArray.ensureArray(options.groups || groups)
    };
}

exports.assignOptionsDefaults = assignOptionsDefaults;
exports.isValidationContext = isValidationContext;
exports.isValidatorContainer = isValidatorContainer;
exports.splitPath = splitPath;
