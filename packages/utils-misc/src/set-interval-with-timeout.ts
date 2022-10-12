import { GenericCallback } from "@banquette/utils-type/types";

/**
 * Call setInterval but removes it after a certain amount of time.
 */
export function setIntervalWithTimeout(callback: GenericCallback, interval: number, timeout: number): number|NodeJS.Timer {
    const timerId = setInterval(callback, interval);
    setTimeout(() => {
        clearInterval(timerId);
    }, timeout);
    return timerId;
}
