import { isFunction } from "@banquette/utils-type/is-function";
import { Constructor } from "@banquette/utils-type/types";
import { getPropertyDescriptor } from "./get-property-descriptor";

export function isFunctionGetterSafe(ctor: Constructor, property: string): boolean {
    const descriptor = getPropertyDescriptor(ctor, property);
    if (!descriptor || descriptor.get || descriptor.set) {
        return false;
    }
    return isFunction(descriptor.value);
}
