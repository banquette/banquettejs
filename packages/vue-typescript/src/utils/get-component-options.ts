import { Constructor } from "@banquette/utils-type/types";
import { VUE_CLASS_COMPONENT_OPTIONS_NAME } from "../constants";

/**
 * Get the options object of a decorated component.
 */
export function getComponentOptions(ctor: Constructor): any {
    return (ctor as any)[VUE_CLASS_COMPONENT_OPTIONS_NAME];
}
