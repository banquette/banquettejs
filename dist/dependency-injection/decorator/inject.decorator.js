/*!
 * Banquette DependencyInjection v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { registerExplicitDependency } from '../utils.js';

/**
 * Fetch a dependency from the container and assign it to a property or constructor parameter.
 */
function Inject(identifier) {
    return function (target, propertyKey, index) {
        registerExplicitDependency(!isUndefined(propertyKey) ? target.constructor : target, identifier, false, propertyKey, index);
    };
}

export { Inject };
