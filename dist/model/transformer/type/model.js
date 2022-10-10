/*!
 * Banquette Model v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { Injector } from '@banquette/dependency-injection/injector';
import { UsageException } from '@banquette/exception/usage.exception';
import { isNullOrUndefined } from '@banquette/utils-type/is-null-or-undefined';
import { ModelMetadataService } from '../../model-metadata.service.js';
import { TransformContext } from '../transform-context.js';
import { TransformService } from '../transform.service.js';

var metadata = Injector.Get(ModelMetadataService);
/**
 * Create a new TransformContext that will be the root of the next transformation.
 */
function createSubContext(context, identifier) {
    var ctor = metadata.resolveAlias(identifier);
    return new TransformContext(context, context.type, ctor, context.value, context.property);
}
/**
 * Call the transform service that will execute the appropriate root transformer for the context.
 */
function Model() {
    var getIdentifier = function (context) {
        context = context.getHighestContextWithProperty();
        if (!context.property) {
            throw new UsageException('Unable to resolve the relation. The "Model" transformer can only be applied on properties.');
        }
        var ctor = metadata.getRelation(context.ctor, context.property);
        if (ctor === null) {
            throw new UsageException("No relation has been defined for \"".concat(context.ctor.name, "::").concat(context.property, "\".\n                Please define a \"@Relation()\" decorator on \"").concat(context.property, "\"."));
        }
        return ctor;
    };
    return {
        /**
         * @inheritDoc
         */
        transform: function (context) {
            if (isNullOrUndefined(context.value)) {
                context.result.setResult(null);
                return context.result;
            }
            return Injector.Get(TransformService).transform(createSubContext(context, getIdentifier(context)));
        },
        /**
         * @inheritDoc
         */
        transformInverse: function (context) {
            if (isNullOrUndefined(context.value)) {
                context.result.setResult(null);
                return context.result;
            }
            return Injector.Get(TransformService).transformInverse(createSubContext(context, getIdentifier(context)));
        }
    };
}

export { Model };
