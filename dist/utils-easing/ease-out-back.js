/*!
 * Banquette UtilsEasing v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
// Fast snap to backwards point then slow resolve to finish
function easeOutBack(t, magnitude) {
    if (magnitude === void 0) { magnitude = 1.70158; }
    var scaledTime = (t / 1) - 1;
    return (scaledTime * scaledTime * ((magnitude + 1) * scaledTime + magnitude)) + 1;
}

export { easeOutBack };
