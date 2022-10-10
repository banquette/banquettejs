/*!
 * Banquette Model v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var isNonEmptyString = require('@banquette/utils-string/_cjs/dev/is-non-empty-string');
var isFunction = require('@banquette/utils-type/_cjs/dev/is-function');
var modelMetadata_service = require('../model-metadata.service.js');

var metadata = injector.Injector.Get(modelMetadata_service.ModelMetadataService);
function Relation(identifier) {
    return function (prototype, propertyKey) {
        if (!isNonEmptyString.isNonEmptyString(propertyKey) || isFunction.isFunction(prototype.constructor.prototype[propertyKey])) {
            throw new usage_exception.UsageException('You can only define a relation on properties.');
        }
        metadata.registerRelation(prototype.constructor, propertyKey, identifier);
    };
}

exports.Relation = Relation;
