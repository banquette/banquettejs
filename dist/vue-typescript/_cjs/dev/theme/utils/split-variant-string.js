/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var trim = require('@banquette/utils-string/_cjs/dev/format/trim');

function splitVariantString(input) {
    return input.split(' ').reduce(function (acc, item) {
        item = trim.trim(item);
        if (item.length) {
            acc.push(item);
        }
        return acc;
    }, []).sort();
}

exports.splitVariantString = splitVariantString;
