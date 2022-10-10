/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../_virtual/_tslib.js');
var headlessSelect_viewModel = require('@banquette/ui/_cjs/dev/form/select/headless-select.view-model');
var extend = require('@banquette/utils-object/_cjs/dev/extend');

var SelectViewModel = /** @class */ (function (_super) {
    _tslib.__extends(SelectViewModel, _super);
    function SelectViewModel(control, base) {
        var _this = _super.call(this, control) || this;
        _this.base = base;
        var that = _this;
        _this.viewData.base = base.viewData;
        extend.extend(_this.viewData, {
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
}(headlessSelect_viewModel.HeadlessSelectViewModel));

exports.SelectViewModel = SelectViewModel;
