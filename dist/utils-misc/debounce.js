/*!
 * Banquette UtilsMisc v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
/**
 * Ensure a function is only called after not being called for a certain amount of time.
 *
 * @param func      function function to call
 * @param wait      number   time with no call to wait before calling the function
 * @param immediate boolean  (optional, default: true) call the function immediately after the first call or not?
 *
 * @returns function
 */
function debounce(func, wait, immediate) {
    if (immediate === void 0) { immediate = true; }
    var timeout = null;
    return function () {
        // @ts-ignore
        var context = this;
        var args = arguments;
        var later = function () {
            timeout = null;
            func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        if (timeout !== null) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args);
        }
    };
}

export { debounce };
