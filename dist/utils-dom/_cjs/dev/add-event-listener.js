/*!
 * Banquette UtilsDom v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Wrapper to the native `addEventListener` that offers an unsubscribe function.
 */
function addEventListener(target, eventName, cb) {
    var removed = false;
    target.addEventListener(eventName, cb);
    return function () {
        if (!removed) {
            target.removeEventListener(eventName, cb);
            removed = true;
        }
    };
}

exports.addEventListener = addEventListener;
