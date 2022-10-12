/*!
 * Banquette UtilsMisc v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
var result = null;
/**
 * Test whether the code is currently running on the server side.
 */
function isServer() {
    if (result === null) {
        result = typeof (window) === 'undefined' || typeof (document) === 'undefined';
    }
    return result;
}

export { isServer };
