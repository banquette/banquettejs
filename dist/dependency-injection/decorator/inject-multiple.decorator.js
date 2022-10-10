/*!
 * Banquette DependencyInjection v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { registerExplicitDependency } from '../utils.js';

/**
 * Inject a set of dependencies matching one or multiple tags.
 */
function InjectMultiple(tag) {
    return function (target, propertyKey, index) {
        registerExplicitDependency(!isUndefined(propertyKey) ? target.constructor : target, tag, undefined, propertyKey, index);
    };
}

export { InjectMultiple };
