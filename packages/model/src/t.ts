import { Primitive } from "./transformer/type/primitive";
import { Model } from "./transformer/type/model";
import { Collection } from "./transformer/type/collection";
import { TransformerFactory } from "./transformer/transformer.factory";

/**
 * Used to keep the original type (inferred from the object properties)
 * while adding the Record<string, TransformerFactory> constraint.
 */
export function TExtend<T extends Record<string, TransformerFactory>>(arg: T): T {
    return arg;
}

/**
 * Shortcut object holding a reference on all transformers' symbols.
 * You are free to call the factory directly if you prefer.
 */
export const T = TExtend({
    Primitive,
    Model,
    Collection
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
