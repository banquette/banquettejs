import { GenericCallback } from '@banquette/utils-type';

/**
 * Throttle call to a function to ensure it is not called more frequently than a specified timing.
 *
 * @param func      function function to call
 * @param threshold number   minimum time between calls, in ms
 * @param scope     object   (optional, default: this)
 *
 * @returns function
 */
export function throttle(
    func: GenericCallback,
    threshold: number,
    scope: any = null
): GenericCallback {
    let lastCallTime: number = 0;
    let timerId: number | NodeJS.Timeout | null = null;
    let args: any = [];
    return function (this: any) {
        const context = scope || this;
        const now = new Date().getTime();
        args = arguments;
        if (timerId !== null) {
            clearTimeout(timerId);
        }
        if (lastCallTime && now < lastCallTime + threshold) {
            timerId = setTimeout(() => {
                timerId = null;
                lastCallTime = new Date().getTime();
                func.apply(context, args);
            }, lastCallTime + threshold - now);
        } else {
            lastCallTime = now;
            func.apply(context, args);
        }
    };
}
