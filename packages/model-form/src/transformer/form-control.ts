import { TransformerInterface, TransformContext, TransformResult, Raw } from "@banquette/model";
import { FormControl as FormControlObject } from '@banquette/form';
import { isUndefined, Complete } from "@banquette/utils-type";
import { FormTransformerInterface } from "./form-transformer.interface";
import { Injector } from "@banquette/dependency-injection";
import { FormComponentFactory } from "../form-component.factory";
import { UsageException } from "@banquette/exception";
import { isFormTransformer } from "./utils";
import { FormControlTransformerSymbol } from "../contants";

const factory = Injector.Get(FormComponentFactory);

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
            if (!isUndefined(transformer.transform)) {
                const result = transformer.transform(context);
                if (result.localPromise !== null) {
                    result.delayResponse((new Promise((resolve, reject) => {
                        (result.localPromise as Promise<any>).then(resolve).catch(reject);
                    })).then(() => {
                        result.setResult(factory.createFormControl(context.ctor, context.property as string, result.result));
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
            context.result.setResult((context.value as FormControlObject).value);
            return context.result;
        }
    };
}
