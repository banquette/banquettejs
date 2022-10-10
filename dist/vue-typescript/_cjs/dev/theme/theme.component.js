/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var vue = require('vue');
var component_decorator = require('../decorator/component.decorator.js');
var prop_decorator = require('../decorator/prop.decorator.js');
var render_decorator = require('../decorator/render.decorator.js');
var watch_decorator = require('../decorator/watch.decorator.js');
var vue$1 = require('../vue.js');
var vueThemes = require('./vue-themes.js');

var ThemeComponent = /** @class */ (function (_super) {
    _tslib.__extends(ThemeComponent, _super);
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
            if (this.themeInUse !== null && vueThemes.VueThemes.Has(this.themeInUse)) {
                vueThemes.VueThemes.Get(this.themeInUse).free();
                this.themeInUse = null;
            }
            if (this.name) {
                if (vueThemes.VueThemes.Has(this.name)) {
                    var theme = vueThemes.VueThemes.Get(this.name);
                    attrs.class += ' ' + theme.id;
                    if (this.unsubscribe !== null) {
                        this.unsubscribe();
                        this.unsubscribe = null;
                    }
                    theme.use();
                    this.themeInUse = this.name;
                }
                else if (this.unsubscribe === null) {
                    this.unsubscribe = vueThemes.VueThemes.OnCreated(function (event) {
                        if (event.theme && event.theme.name === _this.name) {
                            // Force re-render
                            _this.$forceUpdate();
                        }
                    });
                }
            }
        }
        return vue.h('div', attrs, vue.renderSlot(context.$slots, 'default'));
    };
    ThemeComponent.prototype.onNameChange = function () {
        // Force re-render
        this.$forceUpdate();
    };
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], ThemeComponent.prototype, "name", void 0);
    _tslib.__decorate([
        render_decorator.Render(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [Object]),
        _tslib.__metadata("design:returntype", Object)
    ], ThemeComponent.prototype, "render", null);
    _tslib.__decorate([
        watch_decorator.Watch('name'),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], ThemeComponent.prototype, "onNameChange", null);
    ThemeComponent = _tslib.__decorate([
        component_decorator.Component('bt-theme')
    ], ThemeComponent);
    return ThemeComponent;
}(vue$1.Vue));

exports.ThemeComponent = ThemeComponent;
