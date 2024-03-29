import { Injector } from "@banquette/dependency-injection";
import { UsageException } from "@banquette/exception";
import { isNullOrUndefined, Constructor } from "@banquette/utils-type";
import { ModelMetadataService } from "../../model-metadata.service";
import { TransformResult } from "../../transform-result";
import { ModelExtendedIdentifier } from "../../type";
import { TransformContext } from "../transform-context";
import { TransformService } from "../transform.service";
import { TransformerInterface } from "../transformer.interface";

let metadata: ModelMetadataService|null = null;

/**
 * Create a new TransformContext that will be the root of the next transformation.
 */
function createSubContext(context: TransformContext, identifier: ModelExtendedIdentifier): TransformContext {
    if (metadata === null) {
        metadata = /**!PURE*/ Injector.Get(ModelMetadataService);
    }
    const ctor = metadata.resolveAlias(identifier);
    return new TransformContext(context, context.type, ctor, context.value, context.property);
}

/**
 * Call the transform service that will execute the appropriate root transformer for the context.
 */
export function Model(): TransformerInterface {
    let identifier: Constructor|null = null;
    const getIdentifier = (context: TransformContext): Constructor => {
        if (identifier !== null) {
            return identifier;
        }
        context = context.getHighestContextWithProperty();
        if (!context.property) {
            throw new UsageException('Unable to resolve the relation. The "Model" transformer can only be applied on properties.');
        }
        if (metadata === null) {
            metadata = /**!PURE*/ Injector.Get(ModelMetadataService);
        }
        const ctor = metadata.getRelation(context.ctor, context.property);
        if (ctor === null) {
            throw new UsageException(
                `No relation has been defined for "${context.ctor.name}::${context.property}".
                Please define a "@Relation()" decorator on "${context.property}".`
            );
        }
        return ctor;
    };
    return {
        /**
         * @inheritDoc
         */
        transform(context: TransformContext): TransformResult {
            if (isNullOrUndefined(context.value)) {
                context.result.setResult(null);
                return context.result;
            }
            return Injector.Get(TransformService).transform(createSubContext(context, getIdentifier(context)));
        },

        /**
         * @inheritDoc
         */
        transformInverse(context: TransformContext): TransformResult {
            if (isNullOrUndefined(context.value)) {
                context.result.setResult(null);
                return context.result;
            }
            return Injector.Get(TransformService).transformInverse(createSubContext(context, getIdentifier(context)));
        }
    };
}
