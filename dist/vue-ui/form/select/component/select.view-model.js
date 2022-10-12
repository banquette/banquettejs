/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../../../_virtual/_tslib.js';
import { HeadlessSelectViewModel } from '@banquette/ui/form/select/headless-select.view-model';
import { extend } from '@banquette/utils-object/extend';

var SelectViewModel = /** @class */ (function (_super) {
    __extends(SelectViewModel, _super);
    function SelectViewModel(control, base) {
        var _this = _super.call(this, control) || this;
        _this.base = base;
        var that = _this;
        _this.viewData.base = base.viewData;
        extend(_this.viewData, {
            selected: {},
            selectedInPopover: [],
            selectedPopoverVisible: false,
            isHeightLocked: false,
            isInputReadonly: true,
            inputValue: '',
            inputPlaceholder: '',
            isInputFocused: false,
            get needsSelectionPopover() {
                return that.viewData.multiple && that.viewData.isHeightLocked;
            }
        });
        return _this;
    }
    /**
     * @inheritDoc
     */
    SelectViewModel.prototype.setViewData = function (viewData) {
        _super.prototype.setViewData.call(this, viewData);
        this.base.setViewData(viewData.base);
    };
    return SelectViewModel;
}(HeadlessSelectViewModel));

export { SelectViewModel };