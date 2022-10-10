import { ComponentPublicInstance } from "vue";
import { DecoratedComponentConstructor, DecoratedComponentInstance, VccOpts, DecoratedComponentPrototype } from "../type";
/**
 * Test if the input is a `DecoratedComponentConstructor`.
 */
export declare function isDecoratedComponentConstructor(input: any): input is DecoratedComponentConstructor;
/**
 * Test if the input is a `DecoratedComponentPrototype`.
 */
export declare function isDecoratedComponentPrototype(input: any): input is DecoratedComponentPrototype;
/**
 * Test if the input is a Vue component instance.
 */
export declare function isComponentInstance(input: any): input is ComponentPublicInstance;
/**
 * Test if the input is a `DecoratedComponentInstance`.
 */
export declare function isDecoratedComponentInstance(input: any): input is DecoratedComponentInstance;
/**
 * Test if the input is a `VccOpts` object.
 */
export declare function isVccOpts(input: any): input is VccOpts;
