import { Injector } from "@banquette/dependency-injection";
import { UsageException } from "@banquette/exception";
import { getFunctionArguments } from "@banquette/utils-reflection";
import { isNonEmptyString } from "@banquette/utils-string";
import { isFunction, isNumber, isType, isUndefined, Constructor } from "@banquette/utils-type";
import { ModelMetadataService } from "../model-metadata.service";
import { ModelTransformMetadataService } from "../model-transform-metadata.service";
import { TransformerInterface } from "../transformer/transformer.interface";
import { Model } from "../transformer/type/model";

let transformMetadata: ModelTransformMetadataService|null = null;
let modelMetadata: ModelMetadataService|null = null;

/**
 * Utility function that ensures the decorator has been set on a property and which
 * resolves the argument name if set on a constructor argument.
 */
export function propertyDecorator(cb: (ctor: Constructor, propertyKey: string) => any,
                                  errorMessage: string = 'This decorator can only be used on properties.'): any {
    return (prototypeOrCtor: any, propertyKey?: string, index?: number) => {
        let ctor: Constructor = prototypeOrCtor;
        if (isUndefined(propertyKey) && isNumber(index)) {
            const names = getFunctionArguments(prototypeOrCtor);
            propertyKey = names[index as number];
        } else {
            ctor = prototypeOrCtor.constructor;
        }
        if (!isType<string>(propertyKey, isNonEmptyString) || isFunction(ctor.prototype[propertyKey])) {
            throw new UsageException(errorMessage);
        }
        return cb(ctor, propertyKey);
    };
}

export function createTransformableDecorator(type: symbol, transformer: TransformerInterface): any {
    return propertyDecorator((ctor: Constructor, propertyKey: string) => {
        if (transformMetadata === null) {
            transformMetadata = /**!PURE*/ Injector.Get(ModelTransformMetadataService);
        }
        transformMetadata.replace(ctor, type, propertyKey, transformer);
    }, 'You can only apply a transform decorator on properties.');
}


export function createRelationAwareTransformableDecorator(type: symbol, transformer: TransformerInterface|undefined, defaultTransformer: TransformerInterface): any {
    const apply = (prototype: any, propertyKey: string, transformer: TransformerInterface) => {
        const transformable = createTransformableDecorator(type, transformer);
        transformable(prototype, propertyKey);
    };
    return (prototype: any, propertyKey: string) => {
        // Register the property once synchronously.
        apply(prototype, propertyKey, transformer || defaultTransformer);

        if (isUndefined(transformer)) {
            // If no transformer has been given, schedule a microtask to let time for all decorators to execute.
            queueMicrotask(() => {
                if (modelMetadata === null) {
                    modelMetadata = /**!PURE*/ Injector.Get(ModelMetadataService);
                }
                // We can then search for the `@Relation()` decorator.
                // If a relation is found, force a `Model()` transformer.
                if (modelMetadata.getRelation(prototype.constructor, propertyKey) !== null) {
                    apply(prototype, propertyKey, Model());
                }
            });
        } else {
            apply(prototype, propertyKey, transformer);
        }
    };
}
