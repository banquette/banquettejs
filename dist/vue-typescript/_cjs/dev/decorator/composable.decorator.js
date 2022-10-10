/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isFunction = require('@banquette/utils-type/_cjs/dev/is-function');
var getOrCreateComponentMetadata = require('../utils/get-or-create-component-metadata.js');

function Composable(options) {
    if (options === void 0) { options = {}; }
    return function (ctor) {
        var data = getOrCreateComponentMetadata.getOrCreateComponentMetadata(ctor.prototype);
        if (isFunction.isFunction(options)) {
            options = { factory: options };
        }
        data.composable = options;
    };
}

exports.Composable = Composable;
