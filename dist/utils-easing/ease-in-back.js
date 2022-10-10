/*!
 * Banquette UtilsEasing v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
// Slow movement backwards then fast snap to finish
function easeInBack(t, magnitude) {
    if (magnitude === void 0) { magnitude = 1.70158; }
    return t * t * ((magnitude + 1) * t - magnitude);
}

export { easeInBack };
