/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var converters = require('./converters.js');

/**
 * Like `instance of` but works with SFC exports.
 */
function isInstanceOf(input, candidate) {
    var ctor = converters.anyToComponentCtor(input);
    candidate = converters.anyToComponentCtor(candidate);
    return ctor !== null && ctor.prototype === candidate.prototype;
}

exports.isInstanceOf = isInstanceOf;
