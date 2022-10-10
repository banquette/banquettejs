/*!
 * Banquette Validation v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isPromiseLike } from '@banquette/utils-type/is-promise-like';
import { createValidator } from '../create-validator.js';

/**
 * Delegate the validation to a custom callback given as parameter of the factory.
 */
var Callback = function (callback, tags, groups) {
    return createValidator({
        validate: function (context) {
            try {
                var res = callback(context);
                if (isPromiseLike(res)) {
                    context.result.delayResponse(res);
                }
            }
            catch (e) {
                context.result.fail(e);
            }
            return context.result;
        }
    }, tags, groups);
};

export { Callback };
