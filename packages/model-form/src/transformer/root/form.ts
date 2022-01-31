import { Inject } from "@banquette/dependency-injection/decorator/inject.decorator";
import { Module } from "@banquette/dependency-injection/decorator/module.decorator";
import { UsageException } from "@banquette/exception/usage.exception";
import { FormComponentInterface } from "@banquette/form/form-component.interface";
import { FormObject } from "@banquette/form/form-object";
import { ModelTransformerTag } from "@banquette/model/constants";
import { ModelMetadataService } from "@banquette/model/model-metadata.service";
import { ModelTransformMetadataService } from "@banquette/model/model-transform-metadata.service";
import { ModelFactoryService } from "@banquette/model/model.factory.service";
import { TransformResult } from "@banquette/model/transform-result";
import { TransformContext } from "@banquette/model/transformer/transform-context";
import { TransformPipeline } from "@banquette/model/transformer/transform-pipeline";
import { TransformerInterface } from "@banquette/model/transformer/transformer.interface";
import { AbstractRootTransformer } from "@banquette/model/transformer/type/root/abstract-root-transformer";
import { isObject } from "@banquette/utils-type/is-object";
import { Complete } from "@banquette/utils-type/types";
import { FormComponentFactory } from "../../form-component.factory";

export const FormTransformerSymbol = Symbol('form-component');

@Module(ModelTransformerTag)
export class FormTransformer extends AbstractRootTransformer {
    public constructor(@Inject(ModelMetadataService) protected modelMetadata: ModelMetadataService,
                       @Inject(ModelTransformMetadataService) protected transformMetadata: ModelTransformMetadataService,
                       @Inject(ModelFactoryService) protected modelFactory: ModelFactoryService,
                       @Inject(FormComponentFactory) private formFactory: FormComponentFactory) {
        super(modelMetadata, transformMetadata, modelFactory);
    }

    /**
     * @inheritDoc
     */
    public getTransformerSymbol(): symbol {
        return FormTransformerSymbol;
    }

    /**
     * @inheritDoc
     */
    protected doTransform(context: TransformContext, pipeline: TransformPipeline): TransformResult {
        const result = this.formFactory.createFormObject(context.ctor, context.property as string);
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
            if (isObject(subResult.result)) {
                result.set(property, subResult.result as FormComponentInterface);
            }
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
        if (!(context.value instanceof FormObject)) {
            throw new UsageException('Invalid input value for inverse transform. Expecting a FormObject.');
        }
        pipeline.forEach((property: string, transformer: Complete<TransformerInterface>) => {
            if (!(context.value instanceof FormObject) || !context.value.has(property)) {
                context.result.setResult(null);
                return context.result;
            }
            const subContext = new TransformContext(
                context,
                context.type,
                context.ctor,
                context.value.get(property),
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
