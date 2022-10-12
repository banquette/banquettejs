/*!
 * Banquette UtilsEasing v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
// Accelerating from zero velocity
function easeInQuart(t) {
    return t * t * t * t;
}

export { easeInQuart };