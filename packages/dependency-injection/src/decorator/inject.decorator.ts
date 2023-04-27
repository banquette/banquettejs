import { isUndefined } from '@banquette/utils-type';
import { InjectableIdentifier } from '../type/injectable-identifier.type';
import { registerExplicitDependency } from '../utils';

/**
 * Fetch a dependency from the container and assign it to a property or constructor parameter.
 */
export function Inject(identifier: InjectableIdentifier): Function {
    return (target: any, propertyKey: string, index?: number) => {
        registerExplicitDependency(
            !isUndefined(propertyKey) ? target.constructor : target,
            identifier,
            false,
            propertyKey,
            index
        );
    };
}
