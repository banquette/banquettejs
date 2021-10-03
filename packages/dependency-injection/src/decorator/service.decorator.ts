import { Constructor, ensureArray } from "@banquette/utils-type";
import { InjectableMetadataInterface } from "../injectable-metadata.interface";
import { Injector } from "../injector";
import { registerImplicitDependencies } from "../utils";

/**
 * Register a service into the container.
 */
export function Service(tag?: symbol|symbol[]): Function {
    return (ctor: Constructor) => {
        const metadata: InjectableMetadataInterface = registerImplicitDependencies(ctor);
        metadata.singleton = true;
        metadata.tags = ensureArray(tag);
        Injector.Register(metadata);
    };
}
