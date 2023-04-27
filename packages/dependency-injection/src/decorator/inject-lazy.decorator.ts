import { isUndefined } from '@banquette/utils-type';
import { LazyInjectableIdentifier } from '../type/lazy-injectable-identifier';
import { registerExplicitDependency } from '../utils';

/**
 * Register a function that will be called to get the type of the object to import when
 * the hosting object is created by the container.
 *
 * This is used to workaround circular dependencies.
 */
export function InjectLazy(identifier: LazyInjectableIdentifier): Function {
    return (target: any, propertyKey: string, index?: number) => {
        registerExplicitDependency(
            !isUndefined(propertyKey) ? target.constructor : target,
            identifier,
            true,
            propertyKey,
            index
        );
    };
}
