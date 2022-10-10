/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var headlessControl_viewModel = require('@banquette/ui/_cjs/dev/form/headless-control.view-model');

var TreeViewModel = /** @class */ (function (_super) {
    _tslib.__extends(TreeViewModel, _super);
    function TreeViewModel(control, base) {
        var _this = _super.call(this, control) || this;
        _this.base = base;
        _this.viewData.base = base.viewData;
        return _this;
    }
    return TreeViewModel;
}(headlessControl_viewModel.HeadlessControlViewModel));

exports.TreeViewModel = TreeViewModel;
