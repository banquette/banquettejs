import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Constructor } from "@banquette/utils-type/types";

/**
 * Try to get a property descriptor in the whole prototype chain.
 */
export function getPropertyDescriptor(ctor: Constructor, property: string): any {
    let prototype = ctor.prototype;
    do {
        const descriptor = Object.getOwnPropertyDescriptor(prototype, property);
        if (!isUndefined(descriptor)) {
            return descriptor;
        }
        prototype = Object.getPrototypeOf(prototype);
    } while (prototype);
    return null;
}
