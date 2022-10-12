/*!
 * Banquette UtilsType v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
/**
 * Test if the input value is an object constructor.
 */
function isConstructor(value) {
    return typeof (value) === 'function' && !!value.prototype && value.prototype.constructor === value;
}

export { isConstructor };