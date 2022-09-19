import { createTransformableDecorator } from "@banquette/model/decorator/utils";
import { TransformerInterface } from "@banquette/model/transformer/transformer.interface";
import { Raw } from "@banquette/model/transformer/type/raw";
import { ApiTransformerSymbol } from "../transformer/api";

export function Api(transformer: TransformerInterface = Raw()): any {
    const transformable = createTransformableDecorator(ApiTransformerSymbol, transformer);
    return (prototype: any, propertyKey: string) => {
        transformable(prototype, propertyKey);
    };
}
