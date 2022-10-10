/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../_virtual/_tslib.js';
import { h, renderSlot } from 'vue';
import { Component } from '../decorator/component.decorator.js';
import { Prop } from '../decorator/prop.decorator.js';
import { Render } from '../decorator/render.decorator.js';
import { Watch } from '../decorator/watch.decorator.js';
import { Vue } from '../vue.js';
import { VueThemes } from './vue-themes.js';

var ThemeComponent = /** @class */ (function (_super) {
    __extends(ThemeComponent, _super);
    function ThemeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.themeInUse = null;
        _this.unsubscribe = null;
        return _this;
    }
    ThemeComponent.prototype.render = function (context) {
        var _this = this;
        var attrs = { class: 'bt-theme' };
        if (this.themeInUse !== this.name) {
            if (this.themeInUse !== null && VueThemes.Has(this.themeInUse)) {
                VueThemes.Get(this.themeInUse).free();
                this.themeInUse = null;
            }
            if (this.name) {
                if (VueThemes.Has(this.name)) {
                    var theme = VueThemes.Get(this.name);
                    attrs.class += ' ' + theme.id;
                    if (this.unsubscribe !== null) {
                        this.unsubscribe();
                        this.unsubscribe = null;
                    }
                    theme.use();
                    this.themeInUse = this.name;
                }
                else if (this.unsubscribe === null) {
                    this.unsubscribe = VueThemes.OnCreated(function (event) {
                        if (event.theme && event.theme.name === _this.name) {
                            // Force re-render
                            _this.$forceUpdate();
                        }
                    });
                }
            }
        }
        return h('div', attrs, renderSlot(context.$slots, 'default'));
    };
    ThemeComponent.prototype.onNameChange = function () {
        // Force re-render
        this.$forceUpdate();
    };
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", Object)
    ], ThemeComponent.prototype, "name", void 0);
    __decorate([
        Render(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], ThemeComponent.prototype, "render", null);
    __decorate([
        Watch('name'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ThemeComponent.prototype, "onNameChange", null);
    ThemeComponent = __decorate([
        Component('bt-theme')
    ], ThemeComponent);
    return ThemeComponent;
}(Vue));

export { ThemeComponent };
