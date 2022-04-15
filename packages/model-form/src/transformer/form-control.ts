import { Injector } from "@banquette/dependency-injection/injector";
import { UsageException } from "@banquette/exception/usage.exception";
import { FormControl as FormControlObject } from '@banquette/form/form-control';
import { TransformResult } from "@banquette/model/transform-result";
import { TransformContext } from "@banquette/model/transformer/transform-context";
import { TransformerInterface } from "@banquette/model/transformer/transformer.interface";
import { Raw } from "@banquette/model/transformer/type/raw";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Complete } from "@banquette/utils-type/types";
import { FormControlTransformerSymbol } from "../contants";
import { FormComponentFactory } from "../form-component.factory";
import { FormTransformerInterface } from "./form-transformer.interface";
import { isFormTransformer } from "./utils";

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
