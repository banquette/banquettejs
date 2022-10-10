/*!
 * Banquette UtilsString v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
/**
 * Format the input number into a user-friendly string.
 */
function numberFormat(x, decimals) {
    if (decimals === void 0) { decimals = 2; }
    var parts = x.toFixed(decimals).split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}

export { numberFormat };
