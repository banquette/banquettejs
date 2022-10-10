/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../_virtual/_tslib.js';
import { UsageException } from '@banquette/exception/usage.exception';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Computed } from '@banquette/vue-typescript/decorator/computed.decorator';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Vue } from '@banquette/vue-typescript/vue';

var TabComponent = /** @class */ (function (_super) {
    __extends(TabComponent, _super);
    function TabComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.focused = false;
        return _this;
    }
    Object.defineProperty(TabComponent.prototype, "preRender", {
        get: function () {
            return this.parent && this.parent.preRender;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Vue lifecycle method.
     */
    TabComponent.prototype.mounted = function () {
        var $parent = this.getParent('bt-tabs');
        if (!$parent) {
            throw new UsageException('A "<bt-tab>" must always be placed inside a <bt-tabs></bt-tabs> component.');
        }
        this.parent = $parent;
        this.parent.register(this);
        this.$forceUpdateComputed();
    };
    /**
     * Vue lifecycle method.
     */
    TabComponent.prototype.beforeUnmount = function () {
        this.parent.unregister(this);
    };
    /**
     * Focus the tab, making its content visible.
     */
    TabComponent.prototype.focus = function () {
        this.parent.focus(this);
    };
    /**
     * Called when the focus is given to the tab.
     */
    TabComponent.prototype.onFocus = function () {
        this.focused = true;
    };
    /**
     * Called when the focus is dropped from the tab.
     */
    TabComponent.prototype.onUnFocus = function () {
        this.focused = false;
    };
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", String)
    ], TabComponent.prototype, "id", void 0);
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", String)
    ], TabComponent.prototype, "title", void 0);
    __decorate([
        Prop({ type: Boolean, default: false }),
        __metadata("design:type", Boolean)
    ], TabComponent.prototype, "disabled", void 0);
    __decorate([
        Prop({ type: Boolean, default: false }),
        __metadata("design:type", Boolean)
    ], TabComponent.prototype, "fake", void 0);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], TabComponent.prototype, "preRender", null);
    __decorate([
        Expose(),
        __metadata("design:type", Boolean)
    ], TabComponent.prototype, "focused", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TabComponent.prototype, "focus", null);
    TabComponent = __decorate([
        Component('bt-tab')
    ], TabComponent);
    return TabComponent;
}(Vue));

export { TabComponent as default };
