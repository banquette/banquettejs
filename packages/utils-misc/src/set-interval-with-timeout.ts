import { GenericCallback } from "@banquette/utils-type/types";

/**
 * Call setInterval but removes it after a certain amount of time (the timeout).
 */
export function setIntervalWithTimeout(callback: GenericCallback, interval: number, timeout: number): number {
    const timerId = window.setInterval(callback, interval);
    window.setTimeout(() => {
        window.clearInterval(timerId);
    }, timeout);
    return timerId;
}
