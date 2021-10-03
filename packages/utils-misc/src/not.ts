import { GenericCallback } from "@banquette/utils-type";

/**
 * Call a function and negate its output.
 */
export function Not(this: any, fn: GenericCallback<any, boolean>): (...args: any[]) => boolean {
    return (...args: any[]): boolean => {
        return !fn.apply(this, args);
    };
}
