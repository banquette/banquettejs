/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { DECORATORS_METADATA } from '../constants.js';

/**
 * Get or create the object used to store the metadata defined through components' decorators.
 */
function getOrCreateComponentMetadata(prototype) {
    if (!prototype.hasOwnProperty(DECORATORS_METADATA)) {
        Object.defineProperty(prototype, DECORATORS_METADATA, {
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
    return prototype[DECORATORS_METADATA];
}

export { getOrCreateComponentMetadata };
