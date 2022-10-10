/*!
 * Banquette DomModules v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __decorate } from './_virtual/_tslib.js';
import { Service } from '@banquette/dependency-injection/decorator/service.decorator';
import { Injector } from '@banquette/dependency-injection/injector';
import { MetadataContainer } from '@banquette/dependency-injection/metadata.container';
import { ExceptionFactory } from '@banquette/exception/exception.factory';
import { UsageException } from '@banquette/exception/usage.exception';
import { camelCase } from '@banquette/utils-string/case/camel-case';
import { kebabCase } from '@banquette/utils-string/case/kebab-case';
import { trim } from '@banquette/utils-string/format/trim';
import { isNullOrUndefined } from '@banquette/utils-type/is-null-or-undefined';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { MODULE_NAME_CTOR_ATTR, ModuleInjectorTag } from './constant.js';

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
                        attrValue = trim(attrValue);
                    }
                    var dataName = camelCase(attrName);
                    var moduleInstance = Injector.Get(moduleCtor);
                    var options = {};
                    var existingModules = that.existingModules.get(element);
                    if (isNullOrUndefined(existingModules)) {
                        existingModules = {};
                        that.existingModules.set(element, existingModules);
                    }
                    if (!isUndefined(existingModules[attrName])) {
                        throw new UsageException("Multiple initialization of the DOM module \"".concat(moduleCtor[MODULE_NAME_CTOR_ATTR], "\"."));
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
                                throw new UsageException("Failed to decode options of the DOM module \"".concat(moduleCtor[MODULE_NAME_CTOR_ATTR], "\". ") +
                                    "Please provide a valid JSON object.", ExceptionFactory.EnsureException(e));
                            }
                        }
                        else {
                            var defaultOptionName = moduleInstance.getDefaultOptionName();
                            if (defaultOptionName === null) {
                                throw new UsageException("No default option name has been defined for the module \"".concat(moduleCtor[MODULE_NAME_CTOR_ATTR], "\"."));
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
        var metadata = MetadataContainer.GetForTag(ModuleInjectorTag);
        var ctors = metadata.reduce(function (acc, item) {
            if (item.tags.indexOf(ModuleInjectorTag) > -1 && !isUndefined(item.ctor[MODULE_NAME_CTOR_ATTR])) {
                acc.push(item.ctor);
            }
            return acc;
        }, []);
        for (var _i = 0, ctors_1 = ctors; _i < ctors_1.length; _i++) {
            var ctor = ctors_1[_i];
            var attrName = DomModulesScannerService_1.MODULES_HTML_ATTRIBUTES_PREFIX + kebabCase(ctor[MODULE_NAME_CTOR_ATTR]);
            output[attrName] = ctor;
        }
        return output;
    };
    var DomModulesScannerService_1;
    DomModulesScannerService.MODULES_HTML_ATTRIBUTES_PREFIX = "dom-";
    DomModulesScannerService = DomModulesScannerService_1 = __decorate([
        Service()
    ], DomModulesScannerService);
    return DomModulesScannerService;
}());

export { DomModulesScannerService };
