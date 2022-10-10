/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var constants = require('../constants.js');

/**
 * Get or create the object used to store the metadata defined through components' decorators.
 */
function getOrCreateComponentMetadata(prototype) {
    if (!prototype.hasOwnProperty(constants.DECORATORS_METADATA)) {
        Object.defineProperty(prototype, constants.DECORATORS_METADATA, {
            configurable: true,
            enumerable: false,
            writable: false,
            value: {
                props: {},
                computed: {},
                reactive: [],
                exposed: {},
                hooks: {},
                watch: [],
                imports: {},
                templateRefs: {},
                provided: {},
                injected: {},
                renderMethod: null,
                themeable: null,
                themeVars: {}
            }
        });
    }
    return prototype[constants.DECORATORS_METADATA];
}

exports.getOrCreateComponentMetadata = getOrCreateComponentMetadata;
