import { extend } from "./extend";

/**
 * Recursively clone a value.
 */
export function cloneDeep(value: any): any {
    return extend({}, value, true);
}
