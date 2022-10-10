/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var proxy = require('@banquette/utils-misc/_cjs/dev/proxy');
var control_module = require('./control.module.js');

var HeadlessControlViewModel = /** @class */ (function () {
    function HeadlessControlViewModel(control) {
        this.control = new control_module.ControlModule(control, {
            controlToView: proxy.proxy(this.controlValueToViewValue, this),
            viewToControl: proxy.proxy(this.viewValueToControlValue, this)
        });
        this.viewData = { control: this.control.viewData };
    }
    /**
     * Do some initialization logic that must be done before the view model
     * is used but that cannot be done in the constructor.
     */
    /* virtual */ HeadlessControlViewModel.prototype.initialize = function () {
        // Override me
    };
    /**
     * Prepare the view model for destruction.
     */
    /* virtual */ HeadlessControlViewModel.prototype.dispose = function () {
        // Override me
    };
    /**
     * @inheritDoc
     */
    HeadlessControlViewModel.prototype.setViewData = function (viewData) {
        this.viewData = viewData;
        this.control.setViewData(this.viewData.control);
    };
    /**
     * Set the control to interact with.
     */
    HeadlessControlViewModel.prototype.setControl = function (control) {
        this.control.setControl(control);
    };
    /**
     * Convert the value of the FormControl into what is expected by the view.
     * No processing by default, override this method with your logic.
     */
    HeadlessControlViewModel.prototype.controlValueToViewValue = function (controlValue) {
        return controlValue;
    };
    /**
     * Convert the value of the view into what is expected by the FormControl.
     * No processing by default, override this method with your logic.
     */
    HeadlessControlViewModel.prototype.viewValueToControlValue = function (viewValue) {
        return viewValue;
    };
    return HeadlessControlViewModel;
}());

exports.HeadlessControlViewModel = HeadlessControlViewModel;
