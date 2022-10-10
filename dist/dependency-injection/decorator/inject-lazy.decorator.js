/*!
 * Banquette DependencyInjection v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { registerExplicitDependency } from '../utils.js';

/**
 * Register a function that will be called to get the type of the object to import when
 * the hosting object is created by the container.
 *
 * This is used to workaround circular dependencies.
 */
function InjectLazy(identifier) {
    return function (target, propertyKey, index) {
        registerExplicitDependency(!isUndefined(propertyKey) ? target.constructor : target, identifier, true, propertyKey, index);
    };
}

export { InjectLazy };
