import { GenericCallback } from '@banquette/utils-type';

/**
 * Ensure a function is only called after not being called for a certain amount of time.
 *
 * @param func      function function to call
 * @param wait      number   time with no call to wait before calling the function
 * @param immediate boolean  (optional, default: true) call the function immediately after the first call or not?
 *
 * @returns function
 */
export function debounce(
    func: GenericCallback,
    wait: number,
    immediate: boolean = true
): GenericCallback {
    let timeout: number | NodeJS.Timeout | null = null;
    return function () {
        // @ts-ignore
        const context = this;
        const args: any = arguments;
        const later = () => {
            timeout = null;
            func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        if (timeout !== null) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args);
        }
    };
}
