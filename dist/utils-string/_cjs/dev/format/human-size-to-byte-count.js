/*!
 * Banquette UtilsString v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var powers = { 'k': 1, 'm': 2, 'g': 3, 't': 4 };
/**
 * Convert a size in bytes to a human friendly string.
 */
function humanSizeToByteCount(size) {
    var match = size.match(/(\d*\.?\d*)\s*([a-z]+)/i);
    if (!match) {
        return parseFloat(size);
    }
    var value = parseFloat(match[1]);
    var unit = match[2];
    if (unit.length < 2) {
        return Math.round(unit === 'b' ? (value / 8) : value);
    }
    var byteSize = unit === 'KB' || unit[1] === 'i' ? 1024 : 1000;
    var result = value * Math.pow(byteSize, powers[unit[0].toLowerCase()] || 1);
    return Math.round(unit[unit.length - 1] === 'b' ? (result / 8) : result);
}

exports.humanSizeToByteCount = humanSizeToByteCount;
