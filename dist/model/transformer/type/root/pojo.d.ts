import { TransformResult } from "../../../transform-result";
import { TransformContext } from "../../transform-context";
import { TransformPipeline } from "../../transform-pipeline";
import { AbstractRootTransformer } from "./abstract-root-transformer";
export declare const PojoTransformerSymbol: unique symbol;
export declare class PojoTransformer extends AbstractRootTransformer {
    /**
     * @inheritDoc
     */
    getTransformerSymbol(): symbol;
    /**
     * @inheritDoc
     */
    protected doTransform(context: TransformContext, pipeline: TransformPipeline): TransformResult;
    /**
     * @inheritDoc
     */
    protected doTransformInverse(context: TransformContext, model: any, pipeline: TransformPipeline): TransformResult;
}
