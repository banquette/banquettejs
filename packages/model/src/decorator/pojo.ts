import { TransformerInterface } from "../transformer/transformer.interface";
import { Primitive } from "../transformer/type/primitive";
import { PojoTransformerSymbol } from "../transformer/type/root/pojo";
import { createRelationAwareTransformableDecorator } from "./utils";

export function Pojo(transformer?: TransformerInterface): any {
    return createRelationAwareTransformableDecorator(PojoTransformerSymbol, transformer, Primitive());
}
