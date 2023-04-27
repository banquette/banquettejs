import { TransformerInterface } from "../transformer/transformer.interface";
import { Primitive } from "../transformer/type/primitive";
import { JsonTransformerSymbol } from "../transformer/type/root/json";
import { createTransformableDecorator } from "./utils";

export function Json(transformer: TransformerInterface = Primitive()): any {
    return createTransformableDecorator(JsonTransformerSymbol, transformer);
}
