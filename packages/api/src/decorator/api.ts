import { createRelationAwareTransformableDecorator, TransformerInterface, Raw } from "@banquette/model";
import { ApiTransformerSymbol } from "../transformer/api";

export function Api(transformer?: TransformerInterface): any {
    return createRelationAwareTransformableDecorator(ApiTransformerSymbol, transformer, Raw());
}
