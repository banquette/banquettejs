import { isArray } from "@banquette/utils-type/is-array";
import { isPojo } from "@banquette/utils-type/is-pojo";
import { isPrimitive } from "@banquette/utils-type/is-primitive";

let stack: any[] = [];

/**
 * Recursively clone a value.
 */
export function cloneDeepPrimitive(value: any, depth: number = 0): any {
    if (isPrimitive(value) || stack.indexOf(value) > -1) {
        return value;
    }
    try {
        stack.push(value);
        if (isArray(value)) {
            const output: any[] = [];
            for (const item of value) {
                output.push(cloneDeepPrimitive(item, depth + 1));
            }
            return output;
        }
        if (isPojo(value, false)) {
            const output: Record<any, any> = {};
            for (const key of Object.keys(value)) {
                output[key] = cloneDeepPrimitive(value[key], depth + 1);
            }
            return output;
        }
        // All non primitive values, expect pojo and arrays are not cloned.
        // So functions, promises, buffers, etc. will be returned as is.
        return value;
    } finally {
        stack.pop();
    }
}
