import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Constructor } from "@banquette/utils-type/types";
import { getPropertyDescriptor } from "./get-property-descriptor";

export function isGetter(ctor: Constructor, property: string): boolean {
    const descriptor = getPropertyDescriptor(ctor, property);
    return !isUndefined(descriptor) && (descriptor.get || descriptor.set);
}
