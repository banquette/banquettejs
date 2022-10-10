import { TransformerInterface } from "@banquette/model/transformer/transformer.interface";
import { FormTransformerInterface } from "./form-transformer.interface";
/**
 * Transform the input array into a FormArray.
 */
export declare function FormArray(transformer?: TransformerInterface): FormTransformerInterface;
