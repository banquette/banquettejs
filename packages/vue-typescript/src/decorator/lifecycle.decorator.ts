import { UsageException } from "@banquette/exception";
import { isNonEmptyString } from "@banquette/utils-string";
import { ensureArray, isFunction, isUndefined } from "@banquette/utils-type";
import { HOOKS } from "../constants";
import { getOrCreateComponentMetadata } from "../utils/get-or-create-component-metadata";
import { ComponentMetadataInterface } from "./component-metadata.interface";

export type LifecycleHook = typeof HOOKS [number];

/**
 * Mark a method as exposed to the template.
 */
export function Lifecycle(type: LifecycleHook|LifecycleHook[]): Function {
    return (prototype: any, propertyKey: string) => {
        const data: ComponentMetadataInterface = getOrCreateComponentMetadata(prototype);
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
