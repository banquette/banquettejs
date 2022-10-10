/*!
 * Banquette Form v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
/**
 * Represent an error in a component.
 *
 * It can be a validation error automatically created by the validation package
 * or any type of error you want.
 *
 * Adding a form error to a component will automatically make it invalid, as well as its parents.
 * Removing all errors will have the opposite effect.
 */
var FormError = /** @class */ (function () {
    function FormError(path, type, message) {
        if (message === void 0) { message = null; }
        this.path = path;
        this.type = type;
        this.message = message;
    }
    return FormError;
}());

export { FormError };
