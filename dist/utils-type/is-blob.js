/*!
 * Banquette UtilsType v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
/**
 * Test if the input is a blob object.
 */
function isBlob(value) {
    return Object.prototype.toString.call(value) === "[object Blob]";
}

export { isBlob };
