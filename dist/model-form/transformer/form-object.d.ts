import { FormTransformerInterface } from "./form-transformer.interface";
/**
 * Transform the input object into a FormObject.
 *
 * Because this calls a root transformer, the transform service is responsible for calling the good one.
 * So this transformer is actually an alias of the "Model" transformer.
 *
 * It is kept as a separate transformer to make things clearer for the end user.
 */
export declare function FormObject(): FormTransformerInterface;
