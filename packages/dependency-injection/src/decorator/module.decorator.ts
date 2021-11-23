import { ensureArray } from "@banquette/utils-type/ensure-array";
import { Constructor } from "@banquette/utils-type/types";
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
