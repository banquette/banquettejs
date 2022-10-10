/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isArray } from '@banquette/utils-type/is-array';
import { isObject } from '@banquette/utils-type/is-object';

/**
 * Check if the input looks like a TiptapConfigurationInterface.
 */
function isTiptapConfiguration(input) {
    return isObject(input) && (isArray(input.toolbars) || isObject(input.modules) || isArray(input.extensions));
}

export { isTiptapConfiguration };
