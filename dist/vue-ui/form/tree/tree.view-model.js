/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../../_virtual/_tslib.js';
import { HeadlessControlViewModel } from '@banquette/ui/form/headless-control.view-model';

var TreeViewModel = /** @class */ (function (_super) {
    __extends(TreeViewModel, _super);
    function TreeViewModel(control, base) {
        var _this = _super.call(this, control) || this;
        _this.base = base;
        _this.viewData.base = base.viewData;
        return _this;
    }
    return TreeViewModel;
}(HeadlessControlViewModel));

export { TreeViewModel };
