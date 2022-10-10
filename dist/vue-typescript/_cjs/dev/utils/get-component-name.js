/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var converters = require('./converters.js');

/**
 * Try to get the name of a component from an unknown input.
 */
function getComponentName(input) {
    var metadata = converters.anyToComponentMetadata(input);
    return metadata !== null ? metadata.component.name : null;
}

exports.getComponentName = getComponentName;
