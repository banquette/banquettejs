/*!
 * Banquette UtilsEasing v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
// Initial exponential acceleration slowing to stop
function easeOutExpo(t) {
    if (t === 1) {
        return 1;
    }
    return (-Math.pow(2, -10 * t) + 1);
}

export { easeOutExpo };
