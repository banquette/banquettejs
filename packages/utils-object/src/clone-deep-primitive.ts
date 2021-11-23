import { isArray } from "@banquette/utils-type/is-array";
import { isPojo } from "@banquette/utils-type/is-pojo";
import { isPrimitive } from "@banquette/utils-type/is-primitive";

/**
 * Recursively clone a value.
 */
export function cloneDeepPrimitive(value: any): any {
    if (isPrimitive(value)) {
        return value;
    }
    if (isArray(value)) {
        const output: any[] = [];
        for (const item of value) {
            output.push(cloneDeepPrimitive(item));
        }
        return output;
    }
    if (isPojo(value, false)) {
        const output: Record<any, any> = {};
        for (const key of Object.keys(value)) {
            output[key] = cloneDeepPrimitive(value[key]);
        }
        return output;
    }
    // All non primitive values, expect pojo and arrays are not cloned.
    // So functions, promises, buffers, etc. will be returned as is.
    return value;
}
