import { FormControlTransformerSymbol } from "./transformer/form-control";
import { FormObjectTransformerSymbol } from "./transformer/form-object";
import { FormArrayTransformerSymbol } from "./transformer/form-array";

/**
 * If the transformer given as input to the @Form decorator
 * doesn't match any of the following symbols, it will be wrapped into a FormControl transformer automatically.
 *
 * This is syntactic sugar to avoid having to write `@Form(FormControl(...))` everytime.
 */
export const FormRelatedTransformers: symbol[] = [
    FormControlTransformerSymbol,
    FormObjectTransformerSymbol,
    FormArrayTransformerSymbol
];
