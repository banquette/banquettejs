import { UsageException } from "@banquette/exception";
import { isNonEmptyString } from "@banquette/utils-string";
import { ensureArray, isFunction, isUndefined } from "@banquette/utils-type";
import { HOOKS } from "../constants";
import { DecoratorsDataInterface } from "./decorators-data.interface";
import { getDecoratorsData } from "../utils";

export type LifecycleHook = typeof HOOKS [number];

/**
 * Mark a method as exposed to the template.
 */
export function Lifecycle(type: LifecycleHook|LifecycleHook[]): Function {
    return (prototype: any, propertyKey: string) => {
        const data: DecoratorsDataInterface = getDecoratorsData(prototype);
        if (!isNonEmptyString(propertyKey) || !isFunction(prototype.constructor.prototype[propertyKey])) {
            throw new UsageException('You can only use @Lifecycle() on methods.');
        }
        const types: LifecycleHook[] = ensureArray(type);
        for (const type of types) {
            if (isUndefined(data.hooks[type])) {
                data.hooks[type] = [];
            }
            if (data.hooks[type].indexOf(propertyKey) < 0) {
                data.hooks[type].push(propertyKey);
            }
        }
    };
}
