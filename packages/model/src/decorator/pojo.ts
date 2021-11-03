import { Transformable } from "./transformable";
import { TransformerInterface } from "../transformer/transformer.interface";
import { Primitive } from "../transformer/type/primitive";
import { PojoTransformerSymbol } from "../transformer/type/root/pojo";

export function Pojo(transformer: TransformerInterface = Primitive()): any {
    return Transformable(PojoTransformerSymbol, transformer);
}
