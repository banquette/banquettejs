/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isNullOrUndefined = require('@banquette/utils-type/_cjs/dev/is-null-or-undefined');

/**
 * Create an instance of component.
 */
function instantiate(ctor, options) {
    return !isNullOrUndefined.isNullOrUndefined(options.factory) ? options.factory() : new ctor();
}

exports.instantiate = instantiate;
