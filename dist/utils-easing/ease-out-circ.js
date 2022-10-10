/*!
 * Banquette UtilsEasing v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
// Start fast, decreasing velocity until stop
function easeOutCirc(t) {
    var t1 = t - 1;
    return Math.sqrt(1 - t1 * t1);
}

export { easeOutCirc };
