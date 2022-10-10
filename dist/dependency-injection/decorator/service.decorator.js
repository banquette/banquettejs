/*!
 * Banquette DependencyInjection v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { ensureArray } from '@banquette/utils-type/ensure-array';
import { Injector } from '../injector.js';
import { registerImplicitDependencies } from '../utils.js';

/**
 * Register a service into the container.
 */
function Service(tag, ctorOverride) {
    if (ctorOverride === void 0) { ctorOverride = null; }
    return function (ctor) {
        var metadata = registerImplicitDependencies(ctorOverride || ctor);
        metadata.ctor = ctor;
        metadata.singleton = true;
        metadata.tags = ensureArray(tag);
        Injector.Register(metadata);
    };
}

export { Service };
