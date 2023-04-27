import { GenericCallback } from '@banquette/utils-type';

/**
 * Call setInterval but removes it after a certain amount of time.
 */
export function setIntervalWithTimeout(
    callback: GenericCallback,
    interval: number,
    timeout: number
): any {
    const timerId = setInterval(callback, interval);
    setTimeout(() => {
        clearInterval(timerId);
    }, timeout);
    return timerId;
}
