import { GenericCallback } from "@banquette/utils-type/types";
/**
 * Bind a function to a context, optionally partially applying any arguments.
 */
export declare function proxy(fn: GenericCallback, context: any): GenericCallback;
