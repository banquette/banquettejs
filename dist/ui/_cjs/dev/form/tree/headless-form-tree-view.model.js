/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var headlessTree_viewModel = require('../../tree/headless-tree.view-model.js');
var headlessControl_viewModel = require('../headless-control.view-model.js');

var HeadlessFormTreeViewModel = /** @class */ (function (_super) {
    _tslib.__extends(HeadlessFormTreeViewModel, _super);
    function HeadlessFormTreeViewModel(control) {
        var _this = _super.call(this, control) || this;
        _this.tree = new headlessTree_viewModel.HeadlessTreeViewModel();
        return _this;
    }
    return HeadlessFormTreeViewModel;
}(headlessControl_viewModel.HeadlessControlViewModel));

exports.HeadlessFormTreeViewModel = HeadlessFormTreeViewModel;
