/*!
 * Banquette UtilsDom v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Convert the url fragment into a key/value pair object.
 */
function parseUrlFragment() {
    var hash = window.location.hash.substr(1);
    return hash.split('&').reduce(function (result, item) {
        var parts = item.split('=');
        if (parts.length === 2) {
            result[parts[0]] = parts[1];
        }
        return result;
    }, {});
}

exports.parseUrlFragment = parseUrlFragment;
