import { Constructor } from "@banquette/utils-type";
import { getPropertyDescriptor } from "./get-property-descriptor";

export function isGetter(ctor: Constructor, property: string): boolean {
    const descriptor = getPropertyDescriptor(ctor, property);
    return descriptor && (descriptor.get || descriptor.set);
}
