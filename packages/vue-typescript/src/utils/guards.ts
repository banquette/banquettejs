import { isConstructor, isFunction, isObject } from "@banquette/utils-type";
import { ComponentPublicInstance } from "vue";
import { COMPONENT_TS_INSTANCE, DECORATORS_METADATA, COMPONENT_CTOR } from "../constants";
import { DecoratedComponentConstructor, DecoratedComponentInstance, VccOpts, DecoratedComponentPrototype } from "../type";

/**
 * Test if the input is a `DecoratedComponentConstructor`.
 */
export function isDecoratedComponentConstructor(input: any): input is DecoratedComponentConstructor {
    return isConstructor(input) && input.prototype.hasOwnProperty(DECORATORS_METADATA);
}

/**
 * Test if the input is a `DecoratedComponentPrototype`.
 */
export function isDecoratedComponentPrototype(input: any): input is DecoratedComponentPrototype {
    return isObject(input) && DECORATORS_METADATA in input;
}

/**
 * Test if the input is a Vue component instance.
 */
export function isComponentInstance(input: any): input is ComponentPublicInstance {
    return isObject(input) && '$' in input && '$attrs' in input && '$data' in input && '$el' in input && '$parent' in input;
}

/**
 * Test if the input is a `DecoratedComponentInstance`.
 */
export function isDecoratedComponentInstance(input: any): input is DecoratedComponentInstance {
    return isComponentInstance(input) && COMPONENT_TS_INSTANCE in input && COMPONENT_CTOR in input.$.type;
}

/**
 * Test if the input is a `VccOpts` object.
 */
export function isVccOpts(input: any): input is VccOpts {
    return isObject(input) && (isFunction(input.render) || isFunction(input.ssrRender)) && COMPONENT_CTOR in input;
}
