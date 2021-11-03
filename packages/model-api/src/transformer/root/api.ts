import { Module } from "@banquette/dependency-injection";
import { ModelTransformerTag, PojoTransformer } from "@banquette/model";

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
