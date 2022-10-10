/*!
 * Banquette ModelForm v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
/**
 * Transformers symbols.
 */
var FormObjectTransformerSymbol = Symbol('form-object');
var FormArrayTransformerSymbol = Symbol('form-array');
var FormControlTransformerSymbol = Symbol('form-control');
/**
 * If the transformer given as input to the @Form decorator
 * doesn't match any of the following symbols, it will be wrapped into a FormControl transformer automatically.
 *
 * This is syntactic sugar to avoid having to write `@Form(FormControl(...))` everytime.
 */
var FormRelatedTransformers = [
    FormControlTransformerSymbol,
    FormObjectTransformerSymbol,
    FormArrayTransformerSymbol
];

export { FormArrayTransformerSymbol, FormControlTransformerSymbol, FormObjectTransformerSymbol, FormRelatedTransformers };
