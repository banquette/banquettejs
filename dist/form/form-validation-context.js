/*!
 * Banquette Form v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from './_virtual/_tslib.js';
import { ValidationContext } from '@banquette/validation/validation-context';

var FormValidationContext = /** @class */ (function (_super) {
    __extends(FormValidationContext, _super);
    function FormValidationContext(form, formPath, parent, name, value, masks, groups) {
        if (masks === void 0) { masks = []; }
        if (groups === void 0) { groups = []; }
        var _this = _super.call(this, parent, name, value, masks, groups) || this;
        _this.form = form;
        _this.formPath = formPath;
        return _this;
    }
    FormValidationContext.prototype.getOtherValue = function (path, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        // TODO
        return defaultValue;
    };
    /**
     * Create a child context for this context.
     */
    FormValidationContext.prototype.createSubContext = function (name, value, masks, groups) {
        if (masks === void 0) { masks = []; }
        if (groups === void 0) { groups = []; }
        // TODO
        return new FormValidationContext(this.form, this.formPath, this, name, value, masks, groups);
    };
    return FormValidationContext;
}(ValidationContext));

export { FormValidationContext };
