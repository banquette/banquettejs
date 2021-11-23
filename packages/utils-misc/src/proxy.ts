import { GenericCallback } from "@banquette/utils-type/types";

/**
 * Bind a function to a context, optionally partially applying any arguments.
 */
export function proxy(fn: GenericCallback, context: any) {
    const args: any = Array.prototype.slice.call(arguments, 2);
    return function() {
        // @ts-ignore
        return fn.apply(context || this, args.concat(Array.prototype.slice.call(arguments)));
    };
}
