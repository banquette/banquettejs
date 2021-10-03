import { GenericCallback } from "@banquette/utils-type";

/**
 * Throttle call to a function to ensure it is not called more frequently than a specified timing.
 *
 * @param func      function function to call
 * @param threshold number   minimum time between calls, in ms
 * @param scope     object   (optional, default: this)
 *
 * @returns function
 */
export function throttle(func: GenericCallback, threshold: number, scope: any = null): GenericCallback {
    let last: number;
    let deferTimer: number;

    return function() {
        // @ts-ignore
        const context = scope || this;
        const now = (new Date()).getTime();
        const args: any = arguments;
        if (last && now < last + threshold) {
            // hold on to it
            clearTimeout(deferTimer);
            deferTimer = window.setTimeout(() => {
                last = now;
                func.apply(context, args);
            }, threshold);
        } else {
            last = now;
            func.apply(context, args);
        }
    };
}
