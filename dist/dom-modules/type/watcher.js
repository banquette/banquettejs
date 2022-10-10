/*!
 * Banquette DomModules v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __param, __metadata } from '../_virtual/_tslib.js';
import { Inject } from '@banquette/dependency-injection/decorator/inject.decorator';
import { throttle } from '@banquette/utils-misc/throttle';
import { AbstractDomModule } from '../abstract.dom-module.js';
import { DomModule } from '../decorator/dom-module.decorator.js';
import { DomModulesScannerService } from '../dom-modules-scanner.js';

var Watcher = /** @class */ (function (_super) {
    __extends(Watcher, _super);
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
        this.observer = new MutationObserver(throttle(function () {
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
    Watcher = __decorate([
        DomModule('watcher'),
        __param(0, Inject(DomModulesScannerService)),
        __metadata("design:paramtypes", [DomModulesScannerService])
    ], Watcher);
    return Watcher;
}(AbstractDomModule));

export { Watcher };
