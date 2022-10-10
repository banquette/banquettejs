/*!
 * Banquette Model v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var transformInverseNotSupported_exception = require('./exception/transform-inverse-not-supported.exception.js');
var transformNotSupported_exception = require('./exception/transform-not-supported.exception.js');

/**
 * Ensure all methods defined in TransformerInterface are implemented
 * by adding the missing methods that will throw an error if called.
 *
 * This gives the end user the flexibility to only define what's needed while
 * making it easy for the rest of the system that will not have to check for the methods
 * existence each time they are used.
 */
function ensureCompleteTransformer(transformer) {
    if (isUndefined.isUndefined(transformer.transform)) {
        transformer.transform = function () {
            throw new transformNotSupported_exception.TransformNotSupportedException();
        };
    }
    if (isUndefined.isUndefined(transformer.transformInverse)) {
        transformer.transformInverse = function () {
            throw new transformInverseNotSupported_exception.TransformInverseNotSupportedException();
        };
    }
    return transformer;
}
/**
 * Same as ensureCompleteTransformer with the addition of methods specific to ModelTransformerInterface.
 */
function ensureCompleteModelTransformer(transformer) {
    transformer = ensureCompleteTransformer(transformer);
    if (isUndefined.isUndefined(transformer.getPriority)) {
        transformer.getPriority = function () { return 0; };
    }
    return transformer;
}

exports.ensureCompleteModelTransformer = ensureCompleteModelTransformer;
exports.ensureCompleteTransformer = ensureCompleteTransformer;
