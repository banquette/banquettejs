/*!
 * Banquette UtilsEasing v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
// Decelerating to zero velocity
function easeOutQuad(t) {
    return t * (2 - t);
}

export { easeOutQuad };
