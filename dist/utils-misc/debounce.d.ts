import { GenericCallback } from "@banquette/utils-type/types";
/**
 * Ensure a function is only called after not being called for a certain amount of time.
 *
 * @param func      function function to call
 * @param wait      number   time with no call to wait before calling the function
 * @param immediate boolean  (optional, default: true) call the function immediately after the first call or not?
 *
 * @returns function
 */
export declare function debounce(func: GenericCallback, wait: number, immediate?: boolean): GenericCallback;
