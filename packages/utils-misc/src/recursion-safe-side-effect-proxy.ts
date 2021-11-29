import { isFunction } from "@banquette/utils-type/is-function";

/**
 * Utility function allowing you to execute some logic (the side effect) after a callback has finished
 * while ensuring the side effect callback is only called once, even if recursive calls are made.
 */
export function recursionSafeSideEffectProxy(sideEffectCallback: () => void): (cb?: () => void) => any {
    let callCount = 0;
    return (cb?: () => void): void => {
        ++callCount;
        if (isFunction(cb)) {
            cb();
        }
        if ((--callCount) === 0) {
            sideEffectCallback();
        }
    };
}
