/*!
 * Banquette ModelForm v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { Injector } from '@banquette/dependency-injection/injector';
import { UsageException } from '@banquette/exception/usage.exception';
import { TransformContext } from '@banquette/model/transformer/transform-context';
import { Raw } from '@banquette/model/transformer/type/raw';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { FormControlTransformerSymbol } from '../contants.js';
import { FormComponentFactory } from '../form-component.factory.js';
import { FormTransformerSymbol } from './root/form.js';
import { isFormTransformer } from './utils.js';

var factory = Injector.Get(FormComponentFactory);
/**
 * Create a FormControl object containing the input value.
 */
function FormControl(transformer) {
    if (transformer === void 0) { transformer = Raw(); }
    if (isFormTransformer(transformer)) {
        throw new UsageException('A FormControl transformer cannot contain a form transformer.');
    }
    return {
        type: FormControlTransformerSymbol,
        /**
         * @inheritDoc
         */
        getChild: function () {
            return transformer;
        },
        /**
         * @inheritDoc
         */
        transform: function (context) {
            if (context.property === null) {
                throw new UsageException('The "FormControl" transformer can only be applied on properties.');
            }
            if (!isUndefined(transformer.transform)) {
                var result_1 = transformer.transform(context);
                if (result_1.localPromise !== null) {
                    result_1.delayResponse((new Promise(function (resolve, reject) {
                        result_1.localPromise.then(resolve).catch(reject);
                    })).then(function () {
                        result_1.setResult(factory.createFormControl(context.ctor, context.property, result_1.result));
                    }));
                }
                else {
                    result_1.setResult(factory.createFormControl(context.ctor, context.property, result_1.result));
                }
                return result_1;
            }
            context.result.setResult(factory.createFormControl(context.ctor, context.property, context.value));
            return context.result;
        },
        /**
         * @inheritDoc
         */
        transformInverse: function (context) {
            var value = context.value.value;
            if (!isUndefined(transformer.transformInverse)) {
                var result_2 = transformer.transformInverse(new TransformContext(context, FormTransformerSymbol, context.ctor, value, context.property));
                if (result_2.localPromise !== null) {
                    result_2.delayResponse((new Promise(function (resolve, reject) {
                        result_2.localPromise.then(resolve).catch(reject);
                    })).then(function () {
                        result_2.setResult(result_2.result);
                    }));
                }
                else {
                    result_2.setResult(result_2.result);
                }
                return result_2;
            }
            else {
                context.result.setResult(value);
            }
            return context.result;
        }
    };
}

export { FormControl };
