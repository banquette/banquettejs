/*!
 * Banquette ModelValidation v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { Injector } from '@banquette/dependency-injection/injector';
import { createValidator } from '@banquette/validation/create-validator';
import { ModelValidationMetadataService } from '../model-validation-metadata.service.js';

var metadata = Injector.Get(ModelValidationMetadataService);
var Model = function (identifier) {
    return createValidator({
        validate: function (context) {
            var validator = metadata.getValidator(identifier);
            if (validator !== null) {
                validator.validate(context.value, context);
            }
            return context.result;
        }
    });
};

export { Model };
