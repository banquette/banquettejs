import { TransformerInterface } from "@banquette/model";
import { FormTransformerInterface } from "./form-transformer.interface";
import { isUndefined } from "@banquette/utils-type";
import { FormRelatedTransformers } from "../contants";

/**
 * Test if a transformer is a form transformer specialization.
 */
export function isFormTransformer(transformer: TransformerInterface): transformer is FormTransformerInterface {
    return !isUndefined(transformer.type) && FormRelatedTransformers.indexOf(transformer.type) > -1;
}
