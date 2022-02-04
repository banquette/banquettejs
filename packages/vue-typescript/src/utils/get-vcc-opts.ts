import { VUE_CLASS_COMPONENT_OPTIONS_NAME } from "../constants";

/**
 * Get the options object of a decorated component.
 */
export function getVccOpts(ctor: any): any {
    return ctor[VUE_CLASS_COMPONENT_OPTIONS_NAME];
}
