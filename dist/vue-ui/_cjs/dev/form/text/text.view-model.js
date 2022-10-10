/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var headlessTextView_model = require('@banquette/ui/_cjs/dev/form/text/headless-text-view.model');
var ensureString = require('@banquette/utils-type/_cjs/dev/ensure-string');

var TextViewModel = /** @class */ (function (_super) {
    _tslib.__extends(TextViewModel, _super);
    function TextViewModel(control, base) {
        var _this = _super.call(this, control) || this;
        _this.base = base;
        _this.viewData.base = base.viewData;
        return _this;
    }
    /**
     * @inheritDoc
     */
    TextViewModel.prototype.setViewData = function (viewData) {
        _super.prototype.setViewData.call(this, viewData);
        this.base.setViewData(viewData.base);
    };
    /**
     * @inheritDoc
     */
    TextViewModel.prototype.controlValueToViewValue = function (controlValue) {
        return ensureString.ensureString(controlValue);
    };
    return TextViewModel;
}(headlessTextView_model.HeadlessTextViewModel));

exports.TextViewModel = TextViewModel;
