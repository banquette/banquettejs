/*!
 * Banquette UtilsType v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
/**
 * Determine if a value is an object with a null prototype
 */
function isBlankObject(value) {
    return value !== null && typeof value === "object" && !Object.getPrototypeOf(value);
}

export { isBlankObject };
