/*!
 * Banquette UtilsMisc v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

exports.isServer = isServer;
