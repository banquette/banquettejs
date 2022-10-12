/// <reference types="node" />
import { GenericCallback } from "@banquette/utils-type/types";
/**
 * Call setInterval but removes it after a certain amount of time.
 */
export declare function setIntervalWithTimeout(callback: GenericCallback, interval: number, timeout: number): number | NodeJS.Timer;
