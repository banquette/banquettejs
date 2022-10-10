import { TransformerInterface } from "@banquette/model/transformer/transformer.interface";
import { FormTransformerInterface } from "./form-transformer.interface";
/**
 * Create a FormControl object containing the input value.
 */
export declare function FormControl(transformer?: TransformerInterface): FormTransformerInterface;
