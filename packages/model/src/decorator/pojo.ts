import { createTransformableDecorator } from "./utils";
import { TransformerInterface } from "../transformer/transformer.interface";
import { Primitive } from "../transformer/type/primitive";
import { PojoTransformerSymbol } from "../transformer/type/root/pojo";

export function Pojo(transformer: TransformerInterface = Primitive()): any {
    return createTransformableDecorator(PojoTransformerSymbol, transformer);
}
