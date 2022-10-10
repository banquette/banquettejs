/*!
 * Banquette ModelValidation v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { Injector } from '@banquette/dependency-injection/injector';
import { propertyDecorator } from '@banquette/model/decorator/utils';
import { ModelValidationMetadataService } from '../model-validation-metadata.service.js';

var metadata = Injector.Get(ModelValidationMetadataService);
function Assert(validator) {
    return propertyDecorator(function (ctor, propertyKey) {
        metadata.register(ctor, propertyKey, validator);
    }, 'You can only use @Assert() on properties.');
}

export { Assert };
