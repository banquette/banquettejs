/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isConstructor } from '@banquette/utils-type/is-constructor';
import { isFunction } from '@banquette/utils-type/is-function';
import { isObject } from '@banquette/utils-type/is-object';
import { DECORATORS_METADATA, COMPONENT_TS_INSTANCE, COMPONENT_CTOR } from '../constants.js';

/**
 * Test if the input is a `DecoratedComponentConstructor`.
 */
function isDecoratedComponentConstructor(input) {
    return isConstructor(input) && input.prototype.hasOwnProperty(DECORATORS_METADATA);
}
/**
 * Test if the input is a `DecoratedComponentPrototype`.
 */
function isDecoratedComponentPrototype(input) {
    return isObject(input) && DECORATORS_METADATA in input;
}
/**
 * Test if the input is a Vue component instance.
 */
function isComponentInstance(input) {
    return isObject(input) && '$' in input && '$attrs' in input && '$data' in input && '$el' in input && '$parent' in input;
}
/**
 * Test if the input is a `DecoratedComponentInstance`.
 */
function isDecoratedComponentInstance(input) {
    return isComponentInstance(input) && COMPONENT_TS_INSTANCE in input.$ && COMPONENT_CTOR in input.$.type;
}
/**
 * Test if the input is a `VccOpts` object.
 */
function isVccOpts(input) {
    return isObject(input) && (isFunction(input.render) || isFunction(input.ssrRender)) && COMPONENT_CTOR in input;
}

export { isComponentInstance, isDecoratedComponentConstructor, isDecoratedComponentInstance, isDecoratedComponentPrototype, isVccOpts };
