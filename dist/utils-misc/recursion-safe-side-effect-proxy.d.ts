/**
 * Utility function allowing you to execute some logic (the side effect) after a callback has finished
 * while ensuring the side effect callback is only called once, even if recursive calls are made.
 */
export declare function recursionSafeSideEffectProxy(sideEffectCallback: () => void): (cb?: () => void) => any;
