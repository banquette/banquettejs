import { UsageException } from "@banquette/exception/usage.exception";
import { isNonEmptyString } from "@banquette/utils-string/is-non-empty-string";
import { isFunction } from "@banquette/utils-type/is-function";
import { getDecoratorsData } from "../utils/get-decorators-data";
import { DecoratorsDataInterface } from "./decorators-data.interface";

export interface InjectProvidedDecoratorOptions {
    /**
     * The name of the value to provide.
     */
    target: string;

    /**
     * The default value to use if none is found in parent components.
     */
    defaultValue: any;
}

/**
 * Inject a value provided by a parent component.
 *
 * @param target       name of the value to inject
 * @param defaultValue default value if none is found in parent components
 */
export function InjectProvided(target: string, defaultValue?: any): Function {
    return (prototype: any, propertyKey: string) => {
        const data: DecoratorsDataInterface = getDecoratorsData(prototype);
        if (!isNonEmptyString(propertyKey) || isFunction(prototype.constructor.prototype[propertyKey])) {
            throw new UsageException('You can only use @InjectProvided() on properties.');
        }
        data.injected[propertyKey] = {target, defaultValue};
    };
}
