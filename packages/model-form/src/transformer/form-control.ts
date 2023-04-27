import { Injector } from "@banquette/dependency-injection";
import { UsageException } from "@banquette/exception";
import { FormControl as FormControlObject } from '@banquette/form';
import { TransformResult, TransformContext, TransformerInterface, Raw } from "@banquette/model";
import { isUndefined, Complete } from "@banquette/utils-type";
import { FormControlTransformerSymbol } from "../contants";
import { FormComponentFactory } from "../form-component.factory";
import { FormTransformerInterface } from "./form-transformer.interface";
import { FormTransformerSymbol } from "./root/form";
import { isFormTransformer } from "./utils";

let factory: FormComponentFactory|null = null;

/**
 * Create a FormControl object containing the input value.
 */
export function FormControl(transformer: TransformerInterface = Raw()): FormTransformerInterface {
    if (isFormTransformer(transformer)) {
        throw new UsageException('A FormControl transformer cannot contain a form transformer.');
    }
    return {
        type: FormControlTransformerSymbol,

        /**
         * @inheritDoc
         */
        getChild(): Complete<TransformerInterface> {
            return transformer as Complete<TransformerInterface>;
        },

        /**
         * @inheritDoc
         */
        transform(context: TransformContext): TransformResult {
            if (context.property === null) {
                throw new UsageException('The "FormControl" transformer can only be applied on properties.');
            }
            if (factory === null) {
                factory = Injector.Get(FormComponentFactory);
            }
            if (!isUndefined(transformer.transform)) {
                const result = transformer.transform(context);
                if (result.localPromise !== null) {
                    result.delayResponse((new Promise((resolve, reject) => {
                        (result.localPromise as Promise<any>).then(resolve).catch(reject);
                    })).then(() => {
                        result.setResult(factory!.createFormControl(context.ctor, context.property as string, result.result));
                    }));
                } else {
                    result.setResult(factory.createFormControl(context.ctor, context.property as string, result.result));
                }
                return result;
            }
            context.result.setResult(factory.createFormControl(context.ctor, context.property as string, context.value));
            return context.result;
        },

        /**
         * @inheritDoc
         */
        transformInverse(context: TransformContext): TransformResult {
            const value: any = (context.value as FormControlObject).value;
            if (!isUndefined(transformer.transformInverse)) {
                const result = transformer.transformInverse(new TransformContext(
                    context,
                    FormTransformerSymbol,
                    context.ctor,
                    value,
                    context.property
                ));
                if (result.localPromise !== null) {
                    result.delayResponse((new Promise((resolve, reject) => {
                        (result.localPromise as Promise<any>).then(resolve).catch(reject);
                    })).then(() => {
                        result.setResult(result.result);
                    }));
                } else {
                    result.setResult(result.result);
                }
                return result;
            } else {
                context.result.setResult(value);
            }
            return context.result;
        }
    };
}
