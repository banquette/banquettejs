import { TransformerInterface } from "@banquette/model/transformer/transformer.interface";
import { FormTransformerInterface } from "./form-transformer.interface";
/**
 * Test if a transformer is a form transformer specialization.
 */
export declare function isFormTransformer(transformer: TransformerInterface): transformer is FormTransformerInterface;
