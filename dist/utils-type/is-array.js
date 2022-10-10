/*!
 * Banquette UtilsType v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
/**
 * Test if the input is a real array.
 * Objects will return false.
 */
function isArray(value) {
    return Object.prototype.toString.call(value) === "[object Array]";
}

export { isArray };
