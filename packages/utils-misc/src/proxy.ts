import { GenericCallback } from '@banquette/utils-type';

/**
 * Bind a function to a context, optionally partially applying any arguments.
 */
export function proxy(fn: GenericCallback, context: any): GenericCallback {
    const args: any = Array.prototype.slice.call(arguments, 2);
    return function (this: any) {
        // @ts-ignore
        return fn.apply(
            context || this,
            args.concat(Array.prototype.slice.call(arguments))
        );
    };
}
