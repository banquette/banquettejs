/*!
 * Banquette DomModules v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var inject_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/inject.decorator');
var throttle = require('@banquette/utils-misc/_cjs/dev/throttle');
var abstract_domModule = require('../abstract.dom-module.js');
var domModule_decorator = require('../decorator/dom-module.decorator.js');
var domModulesScanner = require('../dom-modules-scanner.js');

var Watcher = /** @class */ (function (_super) {
    _tslib.__extends(Watcher, _super);
    function Watcher(scanner) {
        var _this = _super.call(this) || this;
        _this.scanner = scanner;
        _this.observer = null;
        return _this;
    }
    /**
     * @inheritDoc
     */
    Watcher.prototype.bind = function () {
        var _this = this;
        _super.prototype.bind.call(this);
        this.observer = new MutationObserver(throttle.throttle(function () {
            _this.scanner.scan();
        }, 500));
        this.observer.observe(this.element, {
            childList: true,
            attributes: false,
            subtree: true
        });
    };
    /**
     * @inheritDoc
     */
    Watcher.prototype.unbind = function () {
        _super.prototype.unbind.call(this);
        if (this.observer !== null) {
            this.observer.disconnect();
        }
    };
    Watcher = _tslib.__decorate([
        domModule_decorator.DomModule('watcher'),
        _tslib.__param(0, inject_decorator.Inject(domModulesScanner.DomModulesScannerService)),
        _tslib.__metadata("design:paramtypes", [domModulesScanner.DomModulesScannerService])
    ], Watcher);
    return Watcher;
}(abstract_domModule.AbstractDomModule));

exports.Watcher = Watcher;
