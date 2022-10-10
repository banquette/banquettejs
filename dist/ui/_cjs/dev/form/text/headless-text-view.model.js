/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var headlessControl_viewModel = require('../headless-control.view-model.js');

var HeadlessTextViewModel = /** @class */ (function (_super) {
    _tslib.__extends(HeadlessTextViewModel, _super);
    function HeadlessTextViewModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * If `true`, the view value "rows" will be automatically adjusted
         * based on the number of line breaks in the control's value.
         */
        _this._autoSize = false;
        /**
         * Control the manual resizing of the textarea.
         * Only applicable if type === "textarea".
         * If `autoSize` is `true`, the resize is automatically disabled.
         */
        _this.resizable = true;
        /**
         * Height limit if the type of input is "textarea" and "autoSize" is `true`.
         */
        _this.minRows = null;
        _this.maxRows = null;
        return _this;
    }
    Object.defineProperty(HeadlessTextViewModel.prototype, "autoSize", {
        get: function () {
            return this._autoSize;
        },
        set: function (value) {
            this._autoSize = value;
            if (value) {
                this.viewData.resizable = false;
            }
            else {
                this.viewData.resizable = this.resizable;
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    HeadlessTextViewModel.prototype.setViewData = function (viewData) {
        _super.prototype.setViewData.call(this, viewData);
        viewData.rows = null;
    };
    /**
     * Set the control to interact with.
     */
    HeadlessTextViewModel.prototype.setControl = function (control) {
        this.control.setControl(control);
    };
    /**
     * Convert the value of the FormControl into what is expected by the view.
     * No processing by default, override this method with your logic.
     */
    HeadlessTextViewModel.prototype.controlValueToViewValue = function (controlValue) {
        this.updateSize(controlValue);
        return controlValue;
    };
    /**
     * Convert the value of the view into what is expected by the FormControl.
     * No processing by default, override this method with your logic.
     */
    HeadlessTextViewModel.prototype.viewValueToControlValue = function (viewValue) {
        this.updateSize(viewValue);
        return viewValue;
    };
    HeadlessTextViewModel.prototype.updateSize = function (value) {
        if (!this.autoSize) {
            return;
        }
        this.viewData.rows = value.split(/\r\n|\r|\n/).length;
        if (this.minRows !== null) {
            this.viewData.rows = Math.max(this.minRows, this.viewData.rows);
        }
        if (this.maxRows !== null) {
            this.viewData.rows = Math.min(this.maxRows, this.viewData.rows);
        }
    };
    return HeadlessTextViewModel;
}(headlessControl_viewModel.HeadlessControlViewModel));

exports.HeadlessTextViewModel = HeadlessTextViewModel;
