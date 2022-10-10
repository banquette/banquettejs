/*!
 * Banquette UtilsEasing v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
// Exponential acceleration and deceleration
function easeInOutExpo(t) {
    if (t === 0 || t === 1) {
        return t;
    }
    var scaledTime = t * 2;
    var scaledTime1 = scaledTime - 1;
    if (scaledTime < 1) {
        return 0.5 * Math.pow(2, 10 * (scaledTime1));
    }
    return 0.5 * (-Math.pow(2, -10 * scaledTime1) + 2);
}

export { easeInOutExpo };
