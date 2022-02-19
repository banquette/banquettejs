import { Transformable } from "@banquette/model/decorator/transformable";
import { TransformerInterface } from "@banquette/model/transformer/transformer.interface";
import { Raw } from "@banquette/model/transformer/type/raw";
import { HttpTransformerSymbol } from "../transformer/http";

export function Http(transformer: TransformerInterface = Raw()): any {
    const transformable = Transformable(HttpTransformerSymbol, transformer);
    return (prototype: any, propertyKey: string) => {
        transformable(prototype, propertyKey);
    };
}
