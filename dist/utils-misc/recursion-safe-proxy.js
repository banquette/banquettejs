/*!
 * Banquette UtilsMisc v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
var defaultGroup = Symbol('default');
/**
 * The stack of groups for which a callback is still executing.
 */
var callstack = [];
/**
 * Utility function allowing you to execute a function while blocking subsequent recursive calls
 * to functions wrapped in the same proxy.
 *
 * Let's take an example:
 *
 * ```
 * const event1 = Symbol();
 * const event2 = Symbol();
 * const dispatcher = Injector.Get(EventDispatcherService);
 *
 * dispatcher.subscribe(event1, recursionSafeProxy(() => {
 *     dispatcher.dispatch(event2);
 * }));
 *
 * dispatcher.subscribe(event2, recursionSafeProxy(() => {
 *     dispatcher.dispatch(event1);
 * }));
 *
 * dispatcher.dispatch(event1);
 * ```
 *
 * Only `event1` will be called once in this scenario because of `recursionSafeProxy`.
 * We would otherwise have an infinite recursion.
 *
 * By setting a different group for the subscribe method of `event2` for example,
 * we would have both subscribers called once.
 */
function recursionSafeProxy(cb, group) {
    if (group === void 0) { group = defaultGroup; }
    return function () {
        var arguments$1 = arguments;

        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments$1[_i];
        }
        if (callstack.indexOf(group) < 0) {
            callstack.push(group);
            try {
                return cb.apply(this, args);
            }
            finally {
                var pos = callstack.indexOf(group);
                if (pos > -1) {
                    callstack.splice(pos, 1);
                }
            }
        }
    };
}

export { recursionSafeProxy };
