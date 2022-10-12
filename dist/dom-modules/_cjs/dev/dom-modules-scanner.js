/*!
 * Banquette DomModules v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('./_virtual/_tslib.js');
var service_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/service.decorator');
var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var metadata_container = require('@banquette/dependency-injection/_cjs/dev/metadata.container');
var exception_factory = require('@banquette/exception/_cjs/dev/exception.factory');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var isServer = require('@banquette/utils-misc/_cjs/dev/is-server');
var camelCase = require('@banquette/utils-string/_cjs/dev/case/camel-case');
var kebabCase = require('@banquette/utils-string/_cjs/dev/case/kebab-case');
var trim = require('@banquette/utils-string/_cjs/dev/format/trim');
var isNullOrUndefined = require('@banquette/utils-type/_cjs/dev/is-null-or-undefined');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var constant = require('./constant.js');

/**
 * Manages modules created using [dom-*] attributes in the DOM.
 */
var DomModulesScannerService = /** @class */ (function () {
    function DomModulesScannerService() {
        /**
         * List of attributes selectors with the symbol of their associated module.
         */
        this.modulesAttributeSelectors = null;
        /**
         * Map DOM elements to their associated DomModule instances.
         */
        this.existingModules = new WeakMap();
    }
    DomModulesScannerService_1 = DomModulesScannerService;
    /**
     * Scan the DOM in the search of [dom-*] attributes and create the corresponding modules.
     */
    DomModulesScannerService.prototype.scan = function () {
        if (isServer.isServer()) {
            return;
        }
        var that = this;
        if (this.modulesAttributeSelectors === null) {
            this.modulesAttributeSelectors = this.computeModulesAttributeSelectors();
        }
        for (var _i = 0, _a = Object.keys(this.modulesAttributeSelectors); _i < _a.length; _i++) {
            var selector = _a[_i];
            document.querySelectorAll("[".concat(selector, "]")).forEach((function (attrName, moduleCtor) {
                return function (element) {
                    if (!(element instanceof HTMLElement)) {
                        return;
                    }
                    var attrValue = element.getAttribute(attrName);
                    if (attrValue !== null) {
                        attrValue = trim.trim(attrValue);
                    }
                    var dataName = camelCase.camelCase(attrName);
                    var moduleInstance = injector.Injector.Get(moduleCtor);
                    var options = {};
                    var existingModules = that.existingModules.get(element);
                    if (isNullOrUndefined.isNullOrUndefined(existingModules)) {
                        existingModules = {};
                        that.existingModules.set(element, existingModules);
                    }
                    if (!isUndefined.isUndefined(existingModules[attrName])) {
                        throw new usage_exception.UsageException("Multiple initialization of the DOM module \"".concat(moduleCtor[constant.MODULE_NAME_CTOR_ATTR], "\"."));
                    }
                    if (attrValue) {
                        if (attrValue[0] === "{") {
                            try {
                                options = JSON.parse(attrValue);
                                if (typeof (options) !== "object") {
                                    options = {};
                                }
                            }
                            catch (e) {
                                throw new usage_exception.UsageException("Failed to decode options of the DOM module \"".concat(moduleCtor[constant.MODULE_NAME_CTOR_ATTR], "\". ") +
                                    "Please provide a valid JSON object.", exception_factory.ExceptionFactory.EnsureException(e));
                            }
                        }
                        else {
                            var defaultOptionName = moduleInstance.getDefaultOptionName();
                            if (defaultOptionName === null) {
                                throw new usage_exception.UsageException("No default option name has been defined for the module \"".concat(moduleCtor[constant.MODULE_NAME_CTOR_ATTR], "\"."));
                            }
                            options[defaultOptionName] = attrValue;
                        }
                    }
                    element.removeAttribute(attrName);
                    moduleInstance.setElement(element);
                    moduleInstance.initialize(options);
                    existingModules[dataName] = moduleInstance;
                };
            })(selector, this.modulesAttributeSelectors[selector]));
        }
    };
    /**
     * Create an object containing:
     *   - as key: an HTML attribute
     *   - as value: the constructor of the module that should be created if the HTML attribute is found.
     *
     * @returns {object}
     */
    DomModulesScannerService.prototype.computeModulesAttributeSelectors = function () {
        var output = {};
        var metadata = metadata_container.MetadataContainer.GetForTag(constant.ModuleInjectorTag);
        var ctors = metadata.reduce(function (acc, item) {
            if (item.tags.indexOf(constant.ModuleInjectorTag) > -1 && !isUndefined.isUndefined(item.ctor[constant.MODULE_NAME_CTOR_ATTR])) {
                acc.push(item.ctor);
            }
            return acc;
        }, []);
        for (var _i = 0, ctors_1 = ctors; _i < ctors_1.length; _i++) {
            var ctor = ctors_1[_i];
            var attrName = DomModulesScannerService_1.MODULES_HTML_ATTRIBUTES_PREFIX + kebabCase.kebabCase(ctor[constant.MODULE_NAME_CTOR_ATTR]);
            output[attrName] = ctor;
        }
        return output;
    };
    var DomModulesScannerService_1;
    DomModulesScannerService.MODULES_HTML_ATTRIBUTES_PREFIX = "dom-";
    DomModulesScannerService = DomModulesScannerService_1 = _tslib.__decorate([
        service_decorator.Service()
    ], DomModulesScannerService);
    return DomModulesScannerService;
}());

exports.DomModulesScannerService = DomModulesScannerService;
