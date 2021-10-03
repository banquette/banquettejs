import { Constructor, ensureArray } from "@banquette/utils-type";
import { InjectableMetadataInterface } from "../injectable-metadata.interface";
import { Injector } from "../injector";
import { registerImplicitDependencies } from "../utils";

/**
 * Register a module into the container.
 */
export function Module(tag?: symbol|symbol[]): Function {
    return (ctor: Constructor) => {
        const metadata: InjectableMetadataInterface = registerImplicitDependencies(ctor);
        metadata.tags = ensureArray(tag);
        Injector.Register(metadata);
    };
}
