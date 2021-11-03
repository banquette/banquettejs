import { Transformable } from "./transformable";
import { TransformerInterface } from "../transformer/transformer.interface";
import { Primitive } from "../transformer/type/primitive";
import { JsonTransformerSymbol } from "../transformer/type/root/json";

export function Json(transformer: TransformerInterface = Primitive()): any {
    return Transformable(JsonTransformerSymbol, transformer);
}
