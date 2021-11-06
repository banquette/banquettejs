import { Module } from "@banquette/dependency-injection";
import { Complete, isString, isObject } from "@banquette/utils-type";
import { ModelTransformerTag } from "../../../constants";
import { TransformContext } from "../../transform-context";
import { TransformResult } from "../../../transform-result";
import { TransformerInterface } from "../../transformer.interface";
import { TransformPipeline } from "../../transform-pipeline";
import { UsageException, ExceptionFactory } from "@banquette/exception";
import { InvalidJsonException } from "../../../exception/invalid-json.exception";
import { AbstractRootTransformer } from "./abstract-root-transformer";

export const JsonTransformerSymbol = Symbol('json');

@Module(ModelTransformerTag)
export class JsonTransformer extends AbstractRootTransformer {
    /**
     * @inheritDoc
     */
    public getTransformerSymbol(): symbol {
        return JsonTransformerSymbol;
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
            if (context.parent === null) {
                context.result.setResult(JSON.stringify(result));
            } else {
                context.result.setResult(result);
            }
        });
        return context.result;
    }

    /**
     * @inheritDoc
     */
    protected doTransformInverse(context: TransformContext, model: any, pipeline: TransformPipeline): TransformResult {
        if (context.parent === null && !isString(context.value)) {
            throw new UsageException('Invalid input value for inverse transform. Expecting a string.');
        }
        const decoded = this.decodeValue(context);
        pipeline.forEach((property: string, transformer: Complete<TransformerInterface>) => {
            const subContext = new TransformContext(
                context,
                context.type,
                context.ctor,
                decoded[property],
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

    /**
     * Try to decode the context's value as JSON.
     */
    private decodeValue(context: TransformContext): any {
        if (context.parent !== null) {
            return context.value;
        }
        try {
            const decoded = JSON.parse(context.value);
            if (isObject(decoded)) {
                return decoded;
            }
        } catch (e) {
            throw new InvalidJsonException('Failed to decode JSON string.', ExceptionFactory.EnsureException(e));
        }
        throw new InvalidJsonException('JSON string didn\'t output an object.');
    }
}
