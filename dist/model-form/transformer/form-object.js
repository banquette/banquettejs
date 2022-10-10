/*!
 * Banquette ModelForm v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { Injector } from '@banquette/dependency-injection/injector';
import { FormObject as FormObject$1 } from '@banquette/form/form-object';
import { TransformContext } from '@banquette/model/transformer/transform-context';
import { Model } from '@banquette/model/transformer/type/model';
import { ensureCompleteTransformer } from '@banquette/model/utils';
import { FormObjectTransformerSymbol } from '../contants.js';
import { FormComponentFactory } from '../form-component.factory.js';

var factory = Injector.Get(FormComponentFactory);
/**
 * Transform the input object into a FormObject.
 *
 * Because this calls a root transformer, the transform service is responsible for calling the good one.
 * So this transformer is actually an alias of the "Model" transformer.
 *
 * It is kept as a separate transformer to make things clearer for the end user.
 */
function FormObject() {
    var modelTransformer = ensureCompleteTransformer(Model());
    return {
        type: FormObjectTransformerSymbol,
        /**
         * @inheritDoc
         */
        getChild: function () {
            return modelTransformer;
        },
        /**
         * @inheritDoc
         */
        transform: function (context) {
            var result = modelTransformer.transform(context);
            if (result.result === null) {
                result.setResult(factory.createFormObject(context.ctor, context.property));
            }
            return result;
        },
        /**
         * @inheritDoc
         */
        transformInverse: function (context) {
            if (!(context.value instanceof FormObject$1) || !context.value.length) {
                context = new TransformContext(context.parent, context.type, context.ctor, null, context.property);
            }
            return modelTransformer.transformInverse(context);
        }
    };
}

export { FormObject };
