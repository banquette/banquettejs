/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { anyToComponentMetadata } from './converters.js';

/**
 * Try to get the name of a component from an unknown input.
 */
function getComponentName(input) {
    var metadata = anyToComponentMetadata(input);
    return metadata !== null ? metadata.component.name : null;
}

export { getComponentName };
