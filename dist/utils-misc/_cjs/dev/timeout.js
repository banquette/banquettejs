/*!
 * Banquette UtilsMisc v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('./_virtual/_tslib.js');

/**
 * Return a promise that is resolved on the next the next render cycle.
 */
function waitForNextCycle() {
    return _tslib.__awaiter(this, void 0, void 0, function () {
        return _tslib.__generator(this, function (_a) {
            return [2 /*return*/, waitForDelay(0)];
        });
    });
}
/**
 * Return a promise that is resolved after a certain delay (in ms).
 */
function waitForDelay(duration) {
    return _tslib.__awaiter(this, void 0, void 0, function () {
        return _tslib.__generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    setTimeout(resolve, duration);
                })];
        });
    });
}

exports.waitForDelay = waitForDelay;
exports.waitForNextCycle = waitForNextCycle;
