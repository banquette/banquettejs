/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../../_virtual/_tslib.js';
import { HeadlessFormFileViewModel } from '@banquette/ui/form/file/headless-form-file.view-model';

var FileViewModel = /** @class */ (function (_super) {
    __extends(FileViewModel, _super);
    function FileViewModel(control, base, i18n) {
        var _this = _super.call(this, control, i18n) || this;
        _this.base = base;
        _this.viewData.base = base.viewData;
        return _this;
    }
    return FileViewModel;
}(HeadlessFormFileViewModel));

export { FileViewModel };
