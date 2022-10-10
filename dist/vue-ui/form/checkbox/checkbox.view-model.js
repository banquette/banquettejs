/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../../_virtual/_tslib.js';
import { HeadlessCheckboxViewModel } from '@banquette/ui/form/checkbox/headless-checkbox-view.model';

var CheckboxViewModel = /** @class */ (function (_super) {
    __extends(CheckboxViewModel, _super);
    function CheckboxViewModel(control, base) {
        var _this = _super.call(this, control) || this;
        _this.base = base;
        _this.viewData.base = base.viewData;
        _this.viewData.base.floatingLabel = false;
        return _this;
    }
    return CheckboxViewModel;
}(HeadlessCheckboxViewModel));

export { CheckboxViewModel };
