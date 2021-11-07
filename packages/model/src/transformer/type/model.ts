import { TransformerInterface } from "../transformer.interface";
import { TransformContext } from "../transform-context";
import { TransformResult } from "../../transform-result";
import { Injector } from "@banquette/dependency-injection";
import { TransformService } from "../transform.service";
import { isNullOrUndefined, Constructor } from "@banquette/utils-type";
import { ModelExtendedIdentifier } from "../../type";
import { ModelMetadataService } from "../../model-metadata.service";
import { UsageException } from "@banquette/exception";

const metadata = Injector.Get(ModelMetadataService);

/**
 * Create a new TransformContext that will be the root of the next transformation.
 */
function createSubContext(context: TransformContext, identifier: ModelExtendedIdentifier): TransformContext {
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
        // Get the highest context with a property for this model
        let highestProperty: string|null = context.property;
        while (context.parent !== null && context.ctor === context.parent.ctor) {
            if (context.property) {
                highestProperty = context.property;
            } else {
                break ;
            }
            context = context.parent;
        }
        if (context.property) {
            highestProperty = context.property;
        }
        if (highestProperty === null) {
            throw new UsageException('Unable to resolve the relation. The "Model" transformer can only be applied on properties.');
        }
        const ctor = metadata.getRelation(context.ctor, highestProperty);
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