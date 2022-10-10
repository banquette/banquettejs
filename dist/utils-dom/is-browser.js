/*!
 * Banquette UtilsDom v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
/**
 * Test if the current environment is client.
 */
function isBrowser() {
    return typeof (window) !== 'undefined';
}

export { isBrowser };
