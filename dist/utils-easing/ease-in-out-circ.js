/*!
 * Banquette UtilsEasing v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
// Fast increase in velocity, fast decrease in velocity
function easeInOutCirc(t) {
    var scaledTime = t * 2;
    var scaledTime1 = scaledTime - 2;
    if (scaledTime < 1) {
        return -0.5 * (Math.sqrt(1 - scaledTime * scaledTime) - 1);
    }
    return 0.5 * (Math.sqrt(1 - scaledTime1 * scaledTime1) + 1);
}

export { easeInOutCirc };
