/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isUndefined } from '@banquette/utils-type/is-undefined';

/**
 * These properties are set by the exportHelper of vue-loader after __vccOpts has been created.
 *
 * The problem is that we'll have to create __vccOpts multiple times out of the exportHelper,
 * so these additional properties will not be present.
 *
 * So the trick is to save the object generated by the first call, because we know exportHelper will add what's missing.
 *
 * Then for subsequent calls we'll just have to copy the values from the first object into the current one.
 */
function injectVueProperties(source, target) {
    var vccInjections = [
        'render',
        'ssrRender',
        '__file',
        '__cssModules',
        '__scopeId',
        '__hmrId' ];
    for (var _i = 0, vccInjections_1 = vccInjections; _i < vccInjections_1.length; _i++) {
        var attribute = vccInjections_1[_i];
        if (!isUndefined(source[attribute]) && isUndefined(target[attribute])) {
            target[attribute] = source[attribute];
        }
    }
}

export { injectVueProperties };