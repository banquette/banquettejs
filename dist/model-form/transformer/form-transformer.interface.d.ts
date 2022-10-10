import { TransformerInterface } from "@banquette/model/transformer/transformer.interface";
import { Complete } from "@banquette/utils-type/types";
export interface FormTransformerInterface extends TransformerInterface {
    /**
     * Get the child transformer.
     * Used by the FormModelBinder to access the value transformers.
     */
    getChild(): Complete<TransformerInterface>;
}
