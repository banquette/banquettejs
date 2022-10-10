/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../_virtual/_tslib.js';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { IconRemixQuestionMark } from '@banquette/vue-remix-icons/question-mark';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Computed } from '@banquette/vue-typescript/decorator/computed.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Render } from '@banquette/vue-typescript/decorator/render.decorator';
import { Themeable } from '@banquette/vue-typescript/decorator/themeable.decorator';
import { BindThemeDirective } from '@banquette/vue-typescript/theme/bind-theme.directive';
import { Vue } from '@banquette/vue-typescript/vue';
import { resolveDirective, withDirectives, h, openBlock, createBlock, resolveDynamicComponent, mergeProps } from 'vue';
import { ThemeConfiguration } from './theme-configuration.js';

var IconComponent = /** @class */ (function (_super) {
    __extends(IconComponent, _super);
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
            return !isUndefined(this.icons[1][setIndex][this.name]);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Try to render the icon's svg.
     */
    IconComponent.prototype.render = function (context) {
        var btBindTheme = resolveDirective("bt-bind-theme");
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
                        output.push(h(IconComponent_1.TagsMap[child[0]], props, createChildren_1(child[2])));
                    }
                    return output;
                };
                return withDirectives(h('svg', {
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
            return withDirectives((openBlock(), createBlock(resolveDynamicComponent(this.iconName), mergeProps({
                width: this.width,
                height: this.height,
                color: this.color,
                crop: this.crop,
                class: "bt-icon"
            }, context.$attrs), null, 16 /* FULL_PROPS */)), [
                [resolveDirective("bt-bind-theme")]
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
    __decorate([
        Prop({ type: String, required: true }),
        __metadata("design:type", String)
    ], IconComponent.prototype, "name", void 0);
    __decorate([
        Prop({ type: String, default: 'material' }),
        __metadata("design:type", String)
    ], IconComponent.prototype, "set", void 0);
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", String)
    ], IconComponent.prototype, "version", void 0);
    __decorate([
        Prop({ type: Boolean, default: false }),
        __metadata("design:type", String)
    ], IconComponent.prototype, "crop", void 0);
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", Object)
    ], IconComponent.prototype, "width", void 0);
    __decorate([
        Prop({ type: String, default: '1em' }),
        __metadata("design:type", Object)
    ], IconComponent.prototype, "height", void 0);
    __decorate([
        Prop({ type: String, default: 'currentColor' }),
        __metadata("design:type", String)
    ], IconComponent.prototype, "color", void 0);
    __decorate([
        Prop({ type: Object, default: null }),
        __metadata("design:type", Object)
    ], IconComponent.prototype, "icons", void 0);
    __decorate([
        Computed(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], IconComponent.prototype, "iconName", null);
    __decorate([
        Computed(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], IconComponent.prototype, "localSetIndex", null);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], IconComponent.prototype, "isAmbient", null);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], IconComponent.prototype, "isLocal", null);
    __decorate([
        Render(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], IconComponent.prototype, "render", null);
    IconComponent = IconComponent_1 = __decorate([
        Themeable(ThemeConfiguration),
        Component({
            name: 'bt-icon',
            components: [IconRemixQuestionMark],
            directives: [BindThemeDirective],
            inheritAttrs: false
        })
    ], IconComponent);
    return IconComponent;
}(Vue));

export { IconComponent as default };
