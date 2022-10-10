/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../../_virtual/_tslib.js';
import { HeadlessTextViewModel } from '@banquette/ui/form/text/headless-text-view.model';
import { ensureString } from '@banquette/utils-type/ensure-string';

var TiptapViewModel = /** @class */ (function (_super) {
    __extends(TiptapViewModel, _super);
    function TiptapViewModel(control, base) {
        var _this = _super.call(this, control) || this;
        _this.base = base;
        _this.viewData.base = base.viewData;
        return _this;
    }
    /**
     * @inheritDoc
     */
    TiptapViewModel.prototype.setViewData = function (viewData) {
        _super.prototype.setViewData.call(this, viewData);
        this.base.setViewData(viewData.base);
    };
    /**
     * @inheritDoc
     */
    TiptapViewModel.prototype.controlValueToViewValue = function (controlValue) {
        return ensureString(controlValue);
    };
    return TiptapViewModel;
}(HeadlessTextViewModel));

export { TiptapViewModel };
