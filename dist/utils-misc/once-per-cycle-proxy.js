/*!
 * Banquette UtilsMisc v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
/**
 * Wrap a function into a proxy that will execute it once per cycle using a microtask.
 * If the function is called multiple times in a cycle, the arguments of the last call are used.
 */
function oncePerCycleProxy(cb, scope) {
    if (scope === void 0) { scope = null; }
    var queued = false;
    var lastArgs = [];
    var lastContext = scope;
    return function () {
        var arguments$1 = arguments;

        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments$1[_i];
        }
        lastContext = scope || this;
        lastArgs = args;
        if (!queued) {
            queueMicrotask(function () {
                queued = false;
                cb.apply(lastContext, lastArgs);
            });
            queued = true;
        }
    };
}

export { oncePerCycleProxy };
