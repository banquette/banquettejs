/*!
 * Banquette UtilsMisc v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
/**
 * Throttle call to a function to ensure it is not called more frequently than a specified timing.
 *
 * @param func      function function to call
 * @param threshold number   minimum time between calls, in ms
 * @param scope     object   (optional, default: this)
 *
 * @returns function
 */
function throttle(func, threshold, scope) {
    if (scope === void 0) { scope = null; }
    var lastCallTime = 0;
    var timerId = null;
    var args = [];
    return function () {
        var context = scope || this;
        var now = (new Date()).getTime();
        args = arguments;
        if (timerId) {
            window.clearTimeout(timerId);
        }
        if (lastCallTime && now < lastCallTime + threshold) {
            timerId = window.setTimeout(function () {
                timerId = null;
                lastCallTime = (new Date()).getTime();
                func.apply(context, args);
            }, (lastCallTime + threshold) - now);
        }
        else {
            lastCallTime = now;
            func.apply(context, args);
        }
    };
}

export { throttle };
