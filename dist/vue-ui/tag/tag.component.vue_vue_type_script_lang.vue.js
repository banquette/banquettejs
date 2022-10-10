/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../_virtual/_tslib.js';
import { IconMaterialClose } from '@banquette/vue-material-icons/close';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Computed } from '@banquette/vue-typescript/decorator/computed.decorator';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Themeable } from '@banquette/vue-typescript/decorator/themeable.decorator';
import { BindThemeDirective } from '@banquette/vue-typescript/theme/bind-theme.directive';
import { Vue } from '@banquette/vue-typescript/vue';
import { ThemeConfiguration } from './theme-configuration.js';

var TagComponent = /** @class */ (function (_super) {
    __extends(TagComponent, _super);
    function TagComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TagComponent.prototype, "tagName", {
        get: function () {
            return this.href !== null ? 'a' : 'span';
        },
        enumerable: false,
        configurable: true
    });
    TagComponent.prototype.close = function () {
        this.$emit('close');
    };
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", Object)
    ], TagComponent.prototype, "href", void 0);
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", Object)
    ], TagComponent.prototype, "target", void 0);
    __decorate([
        Prop({ type: Boolean, default: false }),
        __metadata("design:type", Boolean)
    ], TagComponent.prototype, "closable", void 0);
    __decorate([
        Computed(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], TagComponent.prototype, "tagName", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TagComponent.prototype, "close", null);
    TagComponent = __decorate([
        Themeable(ThemeConfiguration),
        Component({
            name: 'bt-tag',
            components: [IconMaterialClose],
            directives: [BindThemeDirective],
            emits: ['close']
        })
    ], TagComponent);
    return TagComponent;
}(Vue));

export { TagComponent as default };
