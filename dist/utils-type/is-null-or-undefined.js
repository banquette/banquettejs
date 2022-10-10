/*!
 * Banquette UtilsType v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
/**
 * Determines if a reference is null or undefined.
 */
function isNullOrUndefined(value) {
    return value === null || typeof value === "undefined";
}

export { isNullOrUndefined };
