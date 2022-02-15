import { HttpTransformerSymbol } from "@banquette/api/transformer/http";
import { TransformerInterface } from "../transformer/transformer.interface";
import { Raw } from "../transformer/type/raw";
import { Transformable } from "./transformable";

export function Http(transformer: TransformerInterface = Raw()): any {

    const transformable = Transformable(HttpTransformerSymbol, transformer);
    return (prototype: any, propertyKey: string) => {
        transformable(prototype, propertyKey);
    };
}
