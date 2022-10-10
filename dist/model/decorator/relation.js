/*!
 * Banquette Model v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { Injector } from '@banquette/dependency-injection/injector';
import { UsageException } from '@banquette/exception/usage.exception';
import { isNonEmptyString } from '@banquette/utils-string/is-non-empty-string';
import { isFunction } from '@banquette/utils-type/is-function';
import { ModelMetadataService } from '../model-metadata.service.js';

var metadata = Injector.Get(ModelMetadataService);
function Relation(identifier) {
    return function (prototype, propertyKey) {
        if (!isNonEmptyString(propertyKey) || isFunction(prototype.constructor.prototype[propertyKey])) {
            throw new UsageException('You can only define a relation on properties.');
        }
        metadata.registerRelation(prototype.constructor, propertyKey, identifier);
    };
}

export { Relation };
