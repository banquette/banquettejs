/*!
 * Banquette UtilsEasing v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
// Slow start and end, two bounces sandwich a fast motion
function easeInOutElastic(t, magnitude) {
    if (magnitude === void 0) { magnitude = 0.65; }
    var p = 1 - magnitude;
    if (t === 0 || t === 1) {
        return t;
    }
    var scaledTime = t * 2;
    var scaledTime1 = scaledTime - 1;
    var s = p / (2 * Math.PI) * Math.asin(1);
    if (scaledTime < 1) {
        return -0.5 * (Math.pow(2, 10 * scaledTime1) *
            Math.sin((scaledTime1 - s) * (2 * Math.PI) / p));
    }
    return (Math.pow(2, -10 * scaledTime1) *
        Math.sin((scaledTime1 - s) * (2 * Math.PI) / p) * 0.5) + 1;
}

export { easeInOutElastic };
