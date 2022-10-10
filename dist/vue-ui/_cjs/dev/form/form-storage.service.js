/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var service_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/service.decorator');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var weakObjectMap = require('@banquette/utils-misc/_cjs/dev/weak-object-map');

var FormStorageService = /** @class */ (function (_super) {
    _tslib.__extends(FormStorageService, _super);
    function FormStorageService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    FormStorageService.prototype.register = function (obj, alias) {
        if (this.has(alias)) {
            throw new usage_exception.UsageException("A form named \"".concat(alias, "\" is already registered in the storage."));
        }
        _super.prototype.register.call(this, obj, alias);
    };
    FormStorageService = _tslib.__decorate([
        service_decorator.Service()
    ], FormStorageService);
    return FormStorageService;
}(weakObjectMap.WeakObjectMap));

exports.FormStorageService = FormStorageService;
