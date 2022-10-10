/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../_virtual/_tslib.js';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Computed } from '@banquette/vue-typescript/decorator/computed.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Themeable } from '@banquette/vue-typescript/decorator/themeable.decorator';
import { BindThemeDirective } from '@banquette/vue-typescript/theme/bind-theme.directive';
import { AbstractProgressComponent } from '../abstract-progress.component.js';
import { ThemeConfiguration } from './theme-configuration.js';

var ProgressCircularComponent = /** @class */ (function (_super) {
    __extends(ProgressCircularComponent, _super);
    function ProgressCircularComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ProgressCircularComponent.prototype, "viewBox", {
        get: function () {
            return "0 0 ".concat(32 + this.strokeWidth, " ").concat(32 + this.strokeWidth);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProgressCircularComponent.prototype, "d", {
        get: function () {
            return "M ".concat(15.9155 + this.strokeWidth / 2, " ").concat(this.strokeWidth / 2, " a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProgressCircularComponent.prototype, "strokeDasharray", {
        get: function () {
            return this.progressPercent() !== null ? "".concat(this.progressPercent(), ", 100") : '';
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Prop({ type: [Number, String], default: 3.5, transform: function (v) { return parseFloat(v); } }),
        __metadata("design:type", Number)
    ], ProgressCircularComponent.prototype, "strokeWidth", void 0);
    __decorate([
        Computed(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], ProgressCircularComponent.prototype, "viewBox", null);
    __decorate([
        Computed(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], ProgressCircularComponent.prototype, "d", null);
    __decorate([
        Computed(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], ProgressCircularComponent.prototype, "strokeDasharray", null);
    ProgressCircularComponent = __decorate([
        Themeable(ThemeConfiguration),
        Component({
            name: 'bt-progress-circular',
            directives: [BindThemeDirective]
        })
    ], ProgressCircularComponent);
    return ProgressCircularComponent;
}(AbstractProgressComponent));

export { ProgressCircularComponent as default };
