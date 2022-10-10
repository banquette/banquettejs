/*!
 * Banquette Ui v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../../_virtual/_tslib.js';
import { HeadlessTreeViewModel } from '../../tree/headless-tree.view-model.js';
import { HeadlessControlViewModel } from '../headless-control.view-model.js';

var HeadlessFormTreeViewModel = /** @class */ (function (_super) {
    __extends(HeadlessFormTreeViewModel, _super);
    function HeadlessFormTreeViewModel(control) {
        var _this = _super.call(this, control) || this;
        _this.tree = new HeadlessTreeViewModel();
        return _this;
    }
    return HeadlessFormTreeViewModel;
}(HeadlessControlViewModel));

export { HeadlessFormTreeViewModel };
