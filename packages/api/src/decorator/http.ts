import { createTransformableDecorator, TransformerInterface, Raw } from "@banquette/model";
import { HttpTransformerSymbol } from "../transformer/http";

export function Http(transformer: TransformerInterface = Raw()): any {
    const transformable = createTransformableDecorator(HttpTransformerSymbol, transformer);
    return (prototype: any, propertyKey: string) => {
        transformable(prototype, propertyKey);
    };
}
