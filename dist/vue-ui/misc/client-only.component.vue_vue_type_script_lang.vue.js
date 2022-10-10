/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../_virtual/_tslib.js';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Render } from '@banquette/vue-typescript/decorator/render.decorator';
import { Ref } from '@banquette/vue-typescript/decorator/ref.decorator';
import { Vue } from '@banquette/vue-typescript/vue';
import { createElementBlock } from 'vue';

var ClientOnlyComponent = /** @class */ (function (_super) {
    __extends(ClientOnlyComponent, _super);
    function ClientOnlyComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isMounted = false;
        return _this;
    }
    /**
     * Vue lifecycle.
     */
    ClientOnlyComponent.prototype.mounted = function () {
        this.isMounted = true;
    };
    ClientOnlyComponent.prototype.render = function () {
        if (this.isMounted) {
            return this.renderSlot('default');
        }
        if (this.hasSlot('placeholder')) {
            return this.renderSlot('placeholder');
        }
        return createElementBlock(this.placeholderTag, null, this.placeholder);
    };
    __decorate([
        Prop({ type: String, default: 'span' }),
        __metadata("design:type", String)
    ], ClientOnlyComponent.prototype, "placeholderTag", void 0);
    __decorate([
        Prop({ type: String, default: '' }),
        __metadata("design:type", String)
    ], ClientOnlyComponent.prototype, "placeholder", void 0);
    __decorate([
        Ref(),
        __metadata("design:type", Boolean)
    ], ClientOnlyComponent.prototype, "isMounted", void 0);
    __decorate([
        Render(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], ClientOnlyComponent.prototype, "render", null);
    ClientOnlyComponent = __decorate([
        Component('bt-client-only')
    ], ClientOnlyComponent);
    return ClientOnlyComponent;
}(Vue));

export { ClientOnlyComponent as default };
