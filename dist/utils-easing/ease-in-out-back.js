/*!
 * Banquette UtilsEasing v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
// Slow movement backwards, fast snap to past finish, slow resolve to finish
function easeInOutBack(t, magnitude) {
    if (magnitude === void 0) { magnitude = 1.70158; }
    var scaledTime = t * 2;
    var scaledTime2 = scaledTime - 2;
    var s = magnitude * 1.525;
    if (scaledTime < 1) {
        return 0.5 * scaledTime * scaledTime * (((s + 1) * scaledTime) - s);
    }
    return 0.5 * (scaledTime2 * scaledTime2 * ((s + 1) * scaledTime2 + s) + 2);
}

export { easeInOutBack };
