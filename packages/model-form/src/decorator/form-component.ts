import { Transformable, TransformerInterface } from "@banquette/model";
import { FormTransformerSymbol } from "../transformer/root/form";
import { isUndefined } from "@banquette/utils-type";
import { FormRelatedTransformers } from "../contants";
import { FormControl } from "../transformer/form-control";

export function Form(transformer: TransformerInterface = FormControl()): any {
    if (isUndefined(transformer.type) || FormRelatedTransformers.indexOf(transformer.type) < 0) {
        transformer = FormControl(transformer);
    }
    return Transformable(FormTransformerSymbol, transformer);
}
