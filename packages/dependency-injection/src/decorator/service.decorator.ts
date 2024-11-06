import { ensureArray, Constructor } from '@banquette/utils-type';
import { InjectableMetadataInterface } from '../injectable-metadata.interface';
import { Injector } from '../injector';
import { getFirstConstructorWithArguments, registerImplicitDependencies } from '../utils';

/**
 * Register a service into the container.
 */
export function Service(
    tag?: symbol | symbol[],
    ctorOverride: Constructor | null = null
): Function {
    return (ctor: Constructor) => {
        const resolvedCtor = ctorOverride || getFirstConstructorWithArguments(ctor);
        const metadata: InjectableMetadataInterface = registerImplicitDependencies(resolvedCtor);
        metadata.ctor = ctor;
        metadata.singleton = true;
        metadata.tags = ensureArray(tag);
        Injector.Register(metadata);
    };
}
