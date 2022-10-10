/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../_virtual/_tslib.js';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Computed } from '@banquette/vue-typescript/decorator/computed.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { ThemeVar } from '@banquette/vue-typescript/decorator/theme-var.decorator';
import { Themeable } from '@banquette/vue-typescript/decorator/themeable.decorator';
import { Watch, ImmediateStrategy } from '@banquette/vue-typescript/decorator/watch.decorator';
import { BindThemeDirective } from '@banquette/vue-typescript/theme/bind-theme.directive';
import { Vue } from '@banquette/vue-typescript/vue';
import { ThemeConfiguration } from './theme-configuration.js';

var OverlayComponent = /** @class */ (function (_super) {
    __extends(OverlayComponent, _super);
    function OverlayComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.zIndexIncrement = 0;
        return _this;
    }
    OverlayComponent_1 = OverlayComponent;
    Object.defineProperty(OverlayComponent.prototype, "zIndex", {
        get: function () {
            return this.zIndexCssVar + this.zIndexIncrement;
        },
        enumerable: false,
        configurable: true
    });
    OverlayComponent.prototype.unmounted = function () {
        --OverlayComponent_1.zIndexIncrement;
    };
    OverlayComponent.prototype.onVisibilityChange = function () {
        if (this.visible) {
            this.zIndexIncrement = ++OverlayComponent_1.zIndexIncrement;
        }
        else {
            --OverlayComponent_1.zIndexIncrement;
        }
    };
    var OverlayComponent_1;
    OverlayComponent.zIndexIncrement = 0;
    __decorate([
        Prop({ type: String, default: 'fixed', transform: function (value) { return value === 'absolute' ? value : 'fixed'; } }),
        __metadata("design:type", String)
    ], OverlayComponent.prototype, "position", void 0);
    __decorate([
        Prop({ type: Boolean, default: true }),
        __metadata("design:type", Boolean)
    ], OverlayComponent.prototype, "visible", void 0);
    __decorate([
        ThemeVar({ name: 'overlay-z-index', defaultValue: 2000 }),
        __metadata("design:type", Number)
    ], OverlayComponent.prototype, "zIndexCssVar", void 0);
    __decorate([
        Computed(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], OverlayComponent.prototype, "zIndex", null);
    __decorate([
        Watch('visible', { immediate: ImmediateStrategy.BeforeMount }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], OverlayComponent.prototype, "onVisibilityChange", null);
    OverlayComponent = OverlayComponent_1 = __decorate([
        Themeable(ThemeConfiguration),
        Component({
            name: 'bt-overlay',
            directives: [BindThemeDirective],
            emits: ['update:visible']
        })
    ], OverlayComponent);
    return OverlayComponent;
}(Vue));

export { OverlayComponent as default };
