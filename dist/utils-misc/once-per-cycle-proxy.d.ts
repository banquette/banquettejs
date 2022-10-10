import { GenericCallback } from "@banquette/utils-type/types";
/**
 * Wrap a function into a proxy that will execute it once per cycle using a microtask.
 * If the function is called multiple times in a cycle, the arguments of the last call are used.
 */
export declare function oncePerCycleProxy(cb: GenericCallback, scope?: any): GenericCallback;
