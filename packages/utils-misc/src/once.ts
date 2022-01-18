import { GenericCallback } from "@banquette/utils-type/types";

/**
 * Wrap a function to ensure it is called only once per JS cycle.
 * Args of the FIRST call will be used.
 */
export function once(func: GenericCallback, scope: any = null): GenericCallback {
    let called: boolean = false;
    return function(this: any) {
        if (!called) {
            const context = scope || this;
            const args: any = arguments;
            Promise.resolve().then(() => {
                func.apply(context, args);
                called = false;
            });
            called = true;
        }
    };
}
