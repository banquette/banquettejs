import { Transformable, TransformerInterface } from "@banquette/model";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { FormRelatedTransformers } from "../contants";
import { FormControl } from "../transformer/form-control";
import { FormTransformerSymbol } from "../transformer/root/form";

export function Form(transformer: TransformerInterface = FormControl()): any {
    if (isUndefined(transformer.type) || FormRelatedTransformers.indexOf(transformer.type) < 0) {
        transformer = FormControl(transformer);
    }
    return Transformable(FormTransformerSymbol, transformer);
}
