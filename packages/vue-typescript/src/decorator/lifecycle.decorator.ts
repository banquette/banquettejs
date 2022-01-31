import { UsageException } from "@banquette/exception/usage.exception";
import { isNonEmptyString } from "@banquette/utils-string/is-non-empty-string";
import { ensureArray } from "@banquette/utils-type/ensure-array";
import { isFunction } from "@banquette/utils-type/is-function";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { HOOKS } from "../constants";
import { getDecoratorsData } from "../utils/get-decorators-data";
import { DecoratorsDataInterface } from "./decorators-data.interface";

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
            // @ts-ignore
            if (data.hooks[type].indexOf(propertyKey) < 0) {
                // @ts-ignore
                data.hooks[type].push(propertyKey);
            }
        }
    };
}
