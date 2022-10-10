/*!
 * Banquette UtilsMisc v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
/**
 * Bind a function to a context, optionally partially applying any arguments.
 */
function proxy(fn, context) {
    var args = Array.prototype.slice.call(arguments, 2);
    return function () {
        // @ts-ignore
        return fn.apply(context || this, args.concat(Array.prototype.slice.call(arguments)));
    };
}

export { proxy };
