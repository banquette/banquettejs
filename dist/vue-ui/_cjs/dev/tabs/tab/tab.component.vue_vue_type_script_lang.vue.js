/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var computed_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/computed.decorator');
var expose_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/expose.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var vue = require('@banquette/vue-typescript/_cjs/dev/vue');

var TabComponent = /** @class */ (function (_super) {
    _tslib.__extends(TabComponent, _super);
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
            throw new usage_exception.UsageException('A "<bt-tab>" must always be placed inside a <bt-tabs></bt-tabs> component.');
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
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", String)
    ], TabComponent.prototype, "id", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", String)
    ], TabComponent.prototype, "title", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: false }),
        _tslib.__metadata("design:type", Boolean)
    ], TabComponent.prototype, "disabled", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: false }),
        _tslib.__metadata("design:type", Boolean)
    ], TabComponent.prototype, "fake", void 0);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Boolean),
        _tslib.__metadata("design:paramtypes", [])
    ], TabComponent.prototype, "preRender", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Boolean)
    ], TabComponent.prototype, "focused", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], TabComponent.prototype, "focus", null);
    TabComponent = _tslib.__decorate([
        component_decorator.Component('bt-tab')
    ], TabComponent);
    return TabComponent;
}(vue.Vue));

module.exports = TabComponent;
