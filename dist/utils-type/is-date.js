/*!
 * Banquette UtilsType v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
/**
 * Determines if a value is a date.
 */
function isDate(value) {
    return Object.prototype.toString.call(value) === "[object Date]";
}

export { isDate };
