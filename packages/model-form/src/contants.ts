/**
 * Transformers symbols.
 */
export const FormObjectTransformerSymbol = Symbol('form-object');
export const FormArrayTransformerSymbol = Symbol('form-array');
export const FormControlTransformerSymbol = Symbol('form-control');

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
