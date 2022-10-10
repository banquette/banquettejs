/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var headlessCheckboxView_model = require('@banquette/ui/_cjs/dev/form/checkbox/headless-checkbox-view.model');

var CheckboxViewModel = /** @class */ (function (_super) {
    _tslib.__extends(CheckboxViewModel, _super);
    function CheckboxViewModel(control, base) {
        var _this = _super.call(this, control) || this;
        _this.base = base;
        _this.viewData.base = base.viewData;
        _this.viewData.base.floatingLabel = false;
        return _this;
    }
    return CheckboxViewModel;
}(headlessCheckboxView_model.HeadlessCheckboxViewModel));

exports.CheckboxViewModel = CheckboxViewModel;
