import { Module } from "@banquette/dependency-injection/decorator/module.decorator";
import { isObject } from "@banquette/utils-type/is-object";
import { Complete } from "@banquette/utils-type/types";
import { ModelTransformerTag } from "../../../constants";
import { TransformResult } from "../../../transform-result";
import { TransformContext } from "../../transform-context";
import { TransformPipeline } from "../../transform-pipeline";
import { TransformerInterface } from "../../transformer.interface";
import { AbstractRootTransformer } from "./abstract-root-transformer";

export const PojoTransformerSymbol = Symbol('pojo');

@Module(ModelTransformerTag)
export class PojoTransformer extends AbstractRootTransformer {
    /**
     * @inheritDoc
     */
    public getTransformerSymbol(): symbol {
        return PojoTransformerSymbol;
    }

    /**
     * @inheritDoc
     */
    protected doTransform(context: TransformContext, pipeline: TransformPipeline): TransformResult {
        const result: any = {};
        pipeline.forEach((property: string, transformer: Complete<TransformerInterface>) => {
            const subContext = new TransformContext(
                context,
                context.type,
                context.ctor,
                context.value[property],
                property
            );
            return transformer.transform(subContext);
        }, (property: string, subResult: TransformResult) => {
            result[property] = subResult.result;
        });
        pipeline.onFinish(() => {
            context.result.setResult(result);
        });
        return context.result;
    }

    /**
     * @inheritDoc
     */
    protected doTransformInverse(context: TransformContext, model: any, pipeline: TransformPipeline): TransformResult {
        pipeline.forEach((property: string, transformer: Complete<TransformerInterface>) => {
            const subContext = new TransformContext(
                context,
                context.type,
                context.ctor,
                isObject(context.value) ? context.value[property] : null,
                property
            );
            return transformer.transformInverse(subContext);
        }, (property: string, subResult: TransformResult) => {
            model[property] = subResult.result;
        });
        pipeline.onFinish(() => {
            context.result.setResult(model);
        });
        return context.result;
    }
}
