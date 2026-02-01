import { ensureArray, Constructor, isObject } from '@banquette/utils-type';
import { InjectableMetadataInterface } from '../injectable-metadata.interface';
import { Injector } from '../injector';
import { getFirstConstructorWithArguments, registerImplicitDependencies } from '../utils';
import { InjectableFactoryType } from "../type/injectable-factory.type";

export type ServiceDecoratorOptions = {
    tag?: symbol|symbol[],
    ctorOverride?: Constructor|null,
    factory?: InjectableFactoryType|null
};

/**
 * Register a service into the container.
 */
export function Service(
    tagOrOptions?: symbol|symbol[]|ServiceDecoratorOptions,
    ctorOverride?: Constructor|null,
    factory?: InjectableFactoryType|null
): Function {
    return (ctor: Constructor) => {
        if (isObject(tagOrOptions, true)) {
            const options = tagOrOptions as ServiceDecoratorOptions;
            ctorOverride = options.ctorOverride || null;
            tagOrOptions = options.tag;
            factory = options.factory || null;
        }
        const resolvedCtor = ctorOverride || getFirstConstructorWithArguments(ctor);
        const metadata: InjectableMetadataInterface = registerImplicitDependencies(resolvedCtor);
        metadata.ctor = ctor;
        metadata.singleton = true;
        metadata.tags = ensureArray(tagOrOptions);
        metadata.factory = factory || null;
        Injector.Register(metadata);
    };
}
