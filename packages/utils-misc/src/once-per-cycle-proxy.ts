import { GenericCallback } from "@banquette/utils-type/types";

/**
 * Wrap a function into a proxy that will execute it once per cycle using a microtask.
 * If the function is called multiple times in a cycle, the arguments of the last call are used.
 */
export function oncePerCycleProxy(cb: GenericCallback,  scope: any = null): GenericCallback {
    let queued = false;
    let lastArgs: any[] = [];
    let lastContext: any = scope;
    return function(this: any, ...args: any[]): void {
        lastContext = scope || this;
        lastArgs = args;
        if (!queued) {
            queueMicrotask(function() {
                queued = false;
                cb.apply(lastContext, lastArgs);
            });
            queued = true;
        }
    };
}
