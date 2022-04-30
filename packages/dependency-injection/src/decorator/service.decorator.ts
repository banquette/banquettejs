import { ensureArray } from "@banquette/utils-type/ensure-array";
import { Constructor } from "@banquette/utils-type/types";
import { InjectableMetadataInterface } from "../injectable-metadata.interface";
import { Injector } from "../injector";
import { registerImplicitDependencies } from "../utils";

/**
 * Register a service into the container.
 */
export function Service(tag?: symbol|symbol[], ctorOverride: Constructor|null = null): Function {
    return (ctor: Constructor) => {
        const metadata: InjectableMetadataInterface = registerImplicitDependencies(ctorOverride || ctor);
        metadata.ctor = ctor;
        metadata.singleton = true;
        metadata.tags = ensureArray(tag);
        Injector.Register(metadata);
    };
}
