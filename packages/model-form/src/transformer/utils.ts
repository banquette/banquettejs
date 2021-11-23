import { TransformerInterface } from "@banquette/model";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { FormRelatedTransformers } from "../contants";
import { FormTransformerInterface } from "./form-transformer.interface";

/**
 * Test if a transformer is a form transformer specialization.
 */
export function isFormTransformer(transformer: TransformerInterface): transformer is FormTransformerInterface {
    return !isUndefined(transformer.type) && FormRelatedTransformers.indexOf(transformer.type) > -1;
}
