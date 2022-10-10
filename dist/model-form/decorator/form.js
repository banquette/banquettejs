/*!
 * Banquette ModelForm v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { createTransformableDecorator } from '@banquette/model/decorator/utils';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { FormRelatedTransformers } from '../contants.js';
import { FormControl } from '../transformer/form-control.js';
import { FormTransformerSymbol } from '../transformer/root/form.js';

function Form(transformer) {
    if (transformer === void 0) { transformer = FormControl(); }
    if (isUndefined(transformer.type) || FormRelatedTransformers.indexOf(transformer.type) < 0) {
        transformer = FormControl(transformer);
    }
    return createTransformableDecorator(FormTransformerSymbol, transformer);
}

export { Form };
