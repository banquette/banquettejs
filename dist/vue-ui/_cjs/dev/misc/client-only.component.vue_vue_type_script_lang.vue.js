/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../_virtual/_tslib.js');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var render_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/render.decorator');
var ref_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/ref.decorator');
var vue$1 = require('@banquette/vue-typescript/_cjs/dev/vue');
var vue = require('vue');

var ClientOnlyComponent = /** @class */ (function (_super) {
    _tslib.__extends(ClientOnlyComponent, _super);
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
        return vue.createElementBlock(this.placeholderTag, null, this.placeholder);
    };
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: 'span' }),
        _tslib.__metadata("design:type", String)
    ], ClientOnlyComponent.prototype, "placeholderTag", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: '' }),
        _tslib.__metadata("design:type", String)
    ], ClientOnlyComponent.prototype, "placeholder", void 0);
    _tslib.__decorate([
        ref_decorator.Ref(),
        _tslib.__metadata("design:type", Boolean)
    ], ClientOnlyComponent.prototype, "isMounted", void 0);
    _tslib.__decorate([
        render_decorator.Render(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", Object)
    ], ClientOnlyComponent.prototype, "render", null);
    ClientOnlyComponent = _tslib.__decorate([
        component_decorator.Component('bt-client-only')
    ], ClientOnlyComponent);
    return ClientOnlyComponent;
}(vue$1.Vue));

module.exports = ClientOnlyComponent;
