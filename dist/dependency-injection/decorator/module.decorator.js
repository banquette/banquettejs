/*!
 * Banquette DependencyInjection v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { ensureArray } from '@banquette/utils-type/ensure-array';
import { Injector } from '../injector.js';
import { registerImplicitDependencies } from '../utils.js';

/**
 * Register a module into the container.
 */
function Module(tag) {
    return function (ctor) {
        var metadata = registerImplicitDependencies(ctor);
        metadata.tags = ensureArray(tag);
        Injector.Register(metadata);
    };
}

export { Module };
