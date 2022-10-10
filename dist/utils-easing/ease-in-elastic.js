/*!
 * Banquette UtilsEasing v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
// Bounces slowly then quickly to finish
function easeInElastic(t, magnitude) {
    if (magnitude === void 0) { magnitude = 0.7; }
    if (t === 0 || t === 1) {
        return t;
    }
    var scaledTime = t / 1;
    var scaledTime1 = scaledTime - 1;
    var p = 1 - magnitude;
    var s = p / (2 * Math.PI) * Math.asin(1);
    return -(Math.pow(2, 10 * scaledTime1) *
        Math.sin((scaledTime1 - s) * (2 * Math.PI) / p));
}

export { easeInElastic };
