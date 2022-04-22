import { Module } from "@banquette/dependency-injection/decorator/module.decorator";
import { ModelTransformerTag } from "@banquette/model/constants";
import { PojoTransformer } from "@banquette/model/transformer/type/root/pojo";

export const ApiTransformerSymbol = Symbol('api');

@Module(ModelTransformerTag)
export class ApiTransformer extends PojoTransformer {
    /**
     * @inheritDoc
     */
    public getTransformerSymbol(): symbol {
        return ApiTransformerSymbol;
    }
}
