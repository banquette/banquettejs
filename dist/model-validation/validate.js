/*!
 * Banquette ModelValidation v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { V } from './v.js';

/**
 * Validate a model instance.
 *
 * Shortcut for `V.Model(userCtor).validate(user)`.
 */
function validate(model, options) {
    return V.Model(model.constructor).validate(model, options);
}

export { validate };
