/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var headlessFormFile_viewModel = require('@banquette/ui/_cjs/dev/form/file/headless-form-file.view-model');

var FileViewModel = /** @class */ (function (_super) {
    _tslib.__extends(FileViewModel, _super);
    function FileViewModel(control, base, i18n) {
        var _this = _super.call(this, control, i18n) || this;
        _this.base = base;
        _this.viewData.base = base.viewData;
        return _this;
    }
    return FileViewModel;
}(headlessFormFile_viewModel.HeadlessFormFileViewModel));

exports.FileViewModel = FileViewModel;
