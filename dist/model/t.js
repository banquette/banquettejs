/*!
 * Banquette Model v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { Primitive } from './transformer/type/primitive.js';
import { Model } from './transformer/type/model.js';
import { Collection } from './transformer/type/collection.js';

/**
 * Used to keep the original type (inferred from the object properties)
 * while adding the Record<string, TransformerFactory> constraint.
 */
function TExtend(arg) {
    return arg;
}
/**
 * Shortcut object holding a reference on all transformers' symbols.
 * You are free to call the factory directly if you prefer.
 */
var T = TExtend({
    Primitive: Primitive,
    Model: Model,
    Collection: Collection
});
/**
 * To extend "T":
 *
 * import { TExtend, T as Base } from "@banquette/model";
 * import { Test } from "transformer/test";
 *
 * export const T = TExtend({
 *     ...Base,
 *     Test
 * });
 *
 * Then when using "T", instead of importing it from `@banquette/model`, import your extended object.
 */

export { T, TExtend };
