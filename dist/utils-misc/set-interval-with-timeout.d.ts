import { GenericCallback } from "@banquette/utils-type/types";
/**
 * Call setInterval but removes it after a certain amount of time (the timeout).
 */
export declare function setIntervalWithTimeout(callback: GenericCallback, interval: number, timeout: number): number;
