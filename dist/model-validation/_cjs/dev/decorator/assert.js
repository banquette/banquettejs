/*!
 * Banquette ModelValidation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var utils = require('@banquette/model/_cjs/dev/decorator/utils');
var modelValidationMetadata_service = require('../model-validation-metadata.service.js');

var metadata = injector.Injector.Get(modelValidationMetadata_service.ModelValidationMetadataService);
function Assert(validator) {
    return utils.propertyDecorator(function (ctor, propertyKey) {
        metadata.register(ctor, propertyKey, validator);
    }, 'You can only use @Assert() on properties.');
}

exports.Assert = Assert;
