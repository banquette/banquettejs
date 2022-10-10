/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../_virtual/_tslib.js');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var questionMark = require('@banquette/vue-remix-icons/_cjs/dev/question-mark');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var computed_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/computed.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var render_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/render.decorator');
var themeable_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/themeable.decorator');
var bindTheme_directive = require('@banquette/vue-typescript/_cjs/dev/theme/bind-theme.directive');
var vue$1 = require('@banquette/vue-typescript/_cjs/dev/vue');
var vue = require('vue');
var themeConfiguration = require('./theme-configuration.js');

var IconComponent = /** @class */ (function (_super) {
    _tslib.__extends(IconComponent, _super);
    function IconComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IconComponent_1 = IconComponent;
    Object.defineProperty(IconComponent.prototype, "iconName", {
        get: function () {
            return "i-".concat(this.set, "-").concat(this.name);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IconComponent.prototype, "localSetIndex", {
        get: function () {
            return this.icons !== null ? this.icons[0].indexOf(this.set) : -1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IconComponent.prototype, "isAmbient", {
        /**
         * Check whether the icon is defined globally inside the Vue app.
         * That's our fallback, so if it's not there, we're done.
         */
        get: function () {
            if (Object.keys(this.$.root.appContext.components).indexOf(this.iconName) > -1) {
                return true;
            }
            if (this.set && this.name) {
                var importCode = "import \"@" + "banquette/vue-".concat(this.set, "-icons/").concat(this.name, "\";");
                console.error("Icon \"".concat(this.name, "\" of set \"").concat(this.set, "\" doesn't exist. You can import it by doing: ").concat(importCode));
            }
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IconComponent.prototype, "isLocal", {
        /**
         * Check if the icon is defined locally, using the `icons` prop.
         */
        get: function () {
            var setIndex = this.localSetIndex;
            if (setIndex < 0) {
                return false;
            }
            return !isUndefined.isUndefined(this.icons[1][setIndex][this.name]);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Try to render the icon's svg.
     */
    IconComponent.prototype.render = function (context) {
        var btBindTheme = vue.resolveDirective("bt-bind-theme");
        if (this.isLocal) {
            var data = this.icons[1][this.localSetIndex][this.name];
            var version = this.version || Object.keys(data[0])[0];
            data = data[data[0][version]];
            if (data) {
                var createChildren_1 = function (children) {
                    var output = [];
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        var props = {};
                        for (var _a = 0, _b = child[1]; _a < _b.length; _a++) {
                            var prop = _b[_a];
                            props[prop[0]] = prop[1];
                        }
                        output.push(vue.h(IconComponent_1.TagsMap[child[0]], props, createChildren_1(child[2])));
                    }
                    return output;
                };
                return vue.withDirectives(vue.h('svg', {
                    width: this.width,
                    height: this.height || (!this.width ? '1em' : null),
                    fill: this.color || 'currentColor',
                    viewBox: data[Number(this.crop)]
                }, createChildren_1(data[2])), [
                    [btBindTheme]
                ]);
            }
        }
        if (this.isAmbient) {
            return vue.withDirectives((vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(this.iconName), vue.mergeProps({
                width: this.width,
                height: this.height,
                color: this.color,
                crop: this.crop,
                class: "bt-icon"
            }, context.$attrs), null, 16 /* FULL_PROPS */)), [
                [vue.resolveDirective("bt-bind-theme")]
            ]);
        }
        return '?'; // Unknown icon, put a question mark so user can see something.
    };
    var IconComponent_1;
    /**
     * Elements' tags are stored by their index in this array to reduce the size of the data structure.
     * Only used if icons are added via the `icons` prop.
     */
    IconComponent.TagsMap = ['g', 'path', 'polygon', 'rect', 'circle', 'ellipse', 'defs', 'use', 'clipPath'];
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, required: true }),
        _tslib.__metadata("design:type", String)
    ], IconComponent.prototype, "name", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: 'material' }),
        _tslib.__metadata("design:type", String)
    ], IconComponent.prototype, "set", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", String)
    ], IconComponent.prototype, "version", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: false }),
        _tslib.__metadata("design:type", String)
    ], IconComponent.prototype, "crop", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], IconComponent.prototype, "width", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: '1em' }),
        _tslib.__metadata("design:type", Object)
    ], IconComponent.prototype, "height", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: 'currentColor' }),
        _tslib.__metadata("design:type", String)
    ], IconComponent.prototype, "color", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Object, default: null }),
        _tslib.__metadata("design:type", Object)
    ], IconComponent.prototype, "icons", void 0);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", String),
        _tslib.__metadata("design:paramtypes", [])
    ], IconComponent.prototype, "iconName", null);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Number),
        _tslib.__metadata("design:paramtypes", [])
    ], IconComponent.prototype, "localSetIndex", null);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Boolean),
        _tslib.__metadata("design:paramtypes", [])
    ], IconComponent.prototype, "isAmbient", null);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Boolean),
        _tslib.__metadata("design:paramtypes", [])
    ], IconComponent.prototype, "isLocal", null);
    _tslib.__decorate([
        render_decorator.Render(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [Object]),
        _tslib.__metadata("design:returntype", void 0)
    ], IconComponent.prototype, "render", null);
    IconComponent = IconComponent_1 = _tslib.__decorate([
        themeable_decorator.Themeable(themeConfiguration.ThemeConfiguration),
        component_decorator.Component({
            name: 'bt-icon',
            components: [questionMark.IconRemixQuestionMark],
            directives: [bindTheme_directive.BindThemeDirective],
            inheritAttrs: false
        })
    ], IconComponent);
    return IconComponent;
}(vue$1.Vue));

module.exports = IconComponent;
