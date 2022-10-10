/*!
 * Banquette UtilsString v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Normalize an URL by removing multiple slashes, backslashes, etc.
 */
function normalizeUrl(url) {
    return url.replace(/\\/g, "/").replace(/([^:])(\/\/+)/g, "$1/");
}

exports.normalizeUrl = normalizeUrl;
