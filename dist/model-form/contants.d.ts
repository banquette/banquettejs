/**
 * Transformers symbols.
 */
export declare const FormObjectTransformerSymbol: unique symbol;
export declare const FormArrayTransformerSymbol: unique symbol;
export declare const FormControlTransformerSymbol: unique symbol;
/**
 * If the transformer given as input to the @Form decorator
 * doesn't match any of the following symbols, it will be wrapped into a FormControl transformer automatically.
 *
 * This is syntactic sugar to avoid having to write `@Form(FormControl(...))` everytime.
 */
export declare const FormRelatedTransformers: symbol[];
