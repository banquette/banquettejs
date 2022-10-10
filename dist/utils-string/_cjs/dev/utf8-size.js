/*!
 * Banquette UtilsString v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Get the size of a string in bytes, considering utf8 multi-bytes characters.
 */
function utf8Size(str) {
    var size = 0;
    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        if (code < 0x0080) {
            size += 1;
        }
        else if (code < 0x0800) {
            size += 2;
        }
        else {
            size += 3;
        }
    }
    return size;
}

exports.utf8Size = utf8Size;
