import { createTransformableDecorator } from "@banquette/model/decorator/utils";
import { TransformerInterface } from "@banquette/model/transformer/transformer.interface";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { FormRelatedTransformers } from "../contants";
import { FormControl } from "../transformer/form-control";
import { FormTransformerSymbol } from "../transformer/root/form";

export function Form(transformer: TransformerInterface = FormControl()): any {
    if (isUndefined(transformer.type) || FormRelatedTransformers.indexOf(transformer.type) < 0) {
        transformer = FormControl(transformer);
    }
    return createTransformableDecorator(FormTransformerSymbol, transformer);
}
