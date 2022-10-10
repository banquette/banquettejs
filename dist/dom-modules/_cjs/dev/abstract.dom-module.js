/*!
 * Banquette DomModules v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var areEqual = require('@banquette/utils-misc/_cjs/dev/are-equal');

var AbstractDomModule = /** @class */ (function () {
    function AbstractDomModule() {
        /**
         * Queue of deferred objects waiting for the component to be ready.
         */
        this.ready = false;
        this.onReadyPromise = null;
        this.onReadyPromiseResolve = null;
        this.options = this.getDefaultOptions();
    }
    /**
     * Gets the HTML element associated with the module.
     */
    AbstractDomModule.prototype.getElement = function () {
        return this.element;
    };
    /**
     * Sets the HTML element associated with the module.
     */
    AbstractDomModule.prototype.setElement = function (element) {
        this.element = element;
    };
    /**
     * Initialize the module.
     */
    /* final */ AbstractDomModule.prototype.initialize = function (options) {
        var _this = this;
        this.setOptions(options || {});
        Promise.all([this.doInit()]).then(function () {
            if (_this.onReadyPromiseResolve !== null) {
                _this.onReadyPromiseResolve();
                _this.onReadyPromiseResolve = null;
            }
            _this.ready = true;
            _this.afterInit();
        });
    };
    /**
     * Call the promise when the component has been initialized.
     */
    AbstractDomModule.prototype.onReady = function () {
        var _this = this;
        if (this.onReadyPromise === null) {
            this.onReadyPromise = new Promise(function (resolve) {
                _this.onReadyPromiseResolve = resolve;
            });
            if (this.isReady() && this.onReadyPromiseResolve !== null) {
                this.onReadyPromiseResolve();
            }
        }
        return this.onReadyPromise;
    };
    /**
     * Test if the module is ready to be used.
     *
     * @returns {boolean}
     */
    AbstractDomModule.prototype.isReady = function () {
        return this.ready;
    };
    /**
     * Gets an option by name.
     */
    AbstractDomModule.prototype.getOption = function (name, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        if (this.hasOption(name)) {
            return this.options[name];
        }
        return defaultValue;
    };
    /**
     * Sets an option by name.
     */
    AbstractDomModule.prototype.setOption = function (name, value) {
        var hasOption = this.hasOption(name);
        var oldValue = hasOption ? this.options[name] : null;
        this.options[name] = value;
        if (this.isReady() && hasOption && !areEqual.areEqual(oldValue, value)) {
            this.onOptionChange(name, oldValue, value);
        }
    };
    /**
     * Merge an object of options into the internal one.
     *
     * @param {object}  options
     * @param {boolean} clearOther (optional, default: false) if true, the internal object is cleared before setting new options.
     *                  By default, new options are merged with existing ones.
     */
    AbstractDomModule.prototype.setOptions = function (options, clearOther) {
        if (clearOther === void 0) { clearOther = false; }
        if (clearOther) {
            this.options = {};
        }
        for (var name_1 in options) {
            if (options.hasOwnProperty(name_1)) {
                this.setOption(name_1, options[name_1]);
            }
        }
    };
    /**
     * Tests if an option is defined.
     */
    AbstractDomModule.prototype.hasOption = function (name) {
        return this.options[name] !== void 0;
    };
    /**
     * Get the name of the option to use when a scalar value is passed
     * to the html attribute, like: dom-my-module="2".
     */
    AbstractDomModule.prototype.getDefaultOptionName = function () {
        return null;
    };
    /**
     * Initialization method.
     */
    AbstractDomModule.prototype.doInit = function () {
        if (!this.element) {
            throw new usage_exception.UsageException("You must set the root DOM element of a DOM plugin by calling setElement().");
        }
    };
    /**
     * Create DOM bindings.
     */
    AbstractDomModule.prototype.bind = function () {
        // Override me
    };
    /**
     * Remove DOM bindings.
     */
    AbstractDomModule.prototype.unbind = function () {
        // Override me
    };
    /**
     * Method called after the initialization is done.
     */
    AbstractDomModule.prototype.afterInit = function () {
        this.bind();
    };
    /**
     * Gets the whole object of options.
     */
    AbstractDomModule.prototype.getOptions = function () {
        return this.options;
    };
    /**
     * Called when the value of an option changes.
     * Note, this method is not called while the initialization is not finished.
     */
    AbstractDomModule.prototype.onOptionChange = function (optionName, oldValue, newValue) {
        // Override me
    };
    /**
     * Gets the default options object.
     * Override this to add custom options.
     */
    AbstractDomModule.prototype.getDefaultOptions = function () {
        return {};
    };
    return AbstractDomModule;
}());

exports.AbstractDomModule = AbstractDomModule;
