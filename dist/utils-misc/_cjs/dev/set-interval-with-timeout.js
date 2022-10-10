/*!
 * Banquette UtilsMisc v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Call setInterval but removes it after a certain amount of time (the timeout).
 */
function setIntervalWithTimeout(callback, interval, timeout) {
    var timerId = window.setInterval(callback, interval);
    window.setTimeout(function () {
        window.clearInterval(timerId);
    }, timeout);
    return timerId;
}

exports.setIntervalWithTimeout = setIntervalWithTimeout;
