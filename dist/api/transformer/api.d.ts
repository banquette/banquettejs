import { PojoTransformer } from "@banquette/model/transformer/type/root/pojo";
export declare const ApiTransformerSymbol: unique symbol;
export declare class ApiTransformer extends PojoTransformer {
    /**
     * @inheritDoc
     */
    getTransformerSymbol(): symbol;
}
