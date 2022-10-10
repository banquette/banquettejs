import { GenericCallback } from "@banquette/utils-type/types";
/**
 * Throttle call to a function to ensure it is not called more frequently than a specified timing.
 *
 * @param func      function function to call
 * @param threshold number   minimum time between calls, in ms
 * @param scope     object   (optional, default: this)
 *
 * @returns function
 */
export declare function throttle(func: GenericCallback, threshold: number, scope?: any): GenericCallback;
