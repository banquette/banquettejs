/*!
 * Banquette ModelValidation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var createValidator = require('@banquette/validation/_cjs/dev/create-validator');
var modelValidationMetadata_service = require('../model-validation-metadata.service.js');

var metadata = injector.Injector.Get(modelValidationMetadata_service.ModelValidationMetadataService);
var Model = function (identifier) {
    return createValidator.createValidator({
        validate: function (context) {
            var validator = metadata.getValidator(identifier);
            if (validator !== null) {
                validator.validate(context.value, context);
            }
            return context.result;
        }
    });
};

exports.Model = Model;
