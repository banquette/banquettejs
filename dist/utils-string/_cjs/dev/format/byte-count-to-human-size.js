/*!
 * Banquette UtilsString v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Convert a size in bytes to a human friendly string.
 */
function byteCountToHumanSize(bytes, si) {
    if (si === void 0) { si = true; }
    var multiple = si ? 1000 : 1024;
    if (Math.abs(bytes) < multiple) {
        return bytes + ' B';
    }
    var units = si
        ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    var u = -1;
    do {
        bytes /= multiple;
        ++u;
    } while (Math.abs(bytes) >= multiple && u < units.length - 1);
    return bytes.toFixed(1) + ' ' + units[u];
}

exports.byteCountToHumanSize = byteCountToHumanSize;
