import { GenericCallback } from "@banquette/utils-type/types";
/**
 * Call a function and negate its output.
 */
export declare function Not(this: any, fn: GenericCallback<any, boolean>): (...args: any[]) => boolean;
