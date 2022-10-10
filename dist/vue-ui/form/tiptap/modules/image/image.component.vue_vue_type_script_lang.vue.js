/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../../../_virtual/_tslib.js';
import { FormControl } from '@banquette/form/form-control';
import { FormFactory } from '@banquette/form/form.factory';
import { oncePerCycleProxy } from '@banquette/utils-misc/once-per-cycle-proxy';
import { isObject } from '@banquette/utils-type/is-object';
import { And } from '@banquette/validation/type/and';
import { NotEmpty } from '@banquette/validation/type/not-empty';
import { Url } from '@banquette/validation/type/url';
import { IconMaterialImage } from '@banquette/vue-material-icons/image';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Computed } from '@banquette/vue-typescript/decorator/computed.decorator';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Themeable } from '@banquette/vue-typescript/decorator/themeable.decorator';
import '../../../../button/button/button.component.vue.js';
import '../../../../button/button-group/button-group.component.vue.js';
import '../../../../popover/popover.component.vue.js';
import '../../../../popover/popover.directive.js';
import { AbstractTiptapModule } from '../abstract-tiptap-module.js';
import { VariantsDefault } from './variants-default.js';
import { I18nDefaults } from './i18n-defaults.js';
import { Image } from './image.extension.js';
import PopoverComponent from '../../../../popover/popover.component.vue_vue_type_script_lang.vue.js';
import ButtonComponent from '../../../../button/button/button.component.vue_vue_type_script_lang.vue.js';

var ImageComponent = /** @class */ (function (_super) {
    __extends(ImageComponent, _super);
    function ImageComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dialogVisible = false;
        return _this;
    }
    Object.defineProperty(ImageComponent.prototype, "availableSizes", {
        get: function () {
            return isObject(this.configuration.sizes) ? Object.keys(this.configuration.sizes) : [];
        },
        enumerable: false,
        configurable: true
    });
    ImageComponent.prototype.beforeMount = function () {
        _super.prototype.beforeMount.call(this);
        this.form = FormFactory.Create({
            href: new FormControl('', And(NotEmpty(this.i18n.hrefControlEmptyError), Url(this.i18n.hrefControlSyntaxError))),
            title: '',
            alt: '',
            width: '',
            height: '',
            size: new FormControl()
        });
        this.form.onValueChanged(oncePerCycleProxy(this.$forceUpdateComputed, this));
    };
    /**
     * @inheritDoc
     */
    ImageComponent.prototype.getExtensions = function () {
        return [Image.configure(this.configuration.tiptap)];
    };
    /**
     * Show the configuration dialog.
     */
    ImageComponent.prototype.showDialog = function () {
        // const focusedLink = this.resolveFocusedLink();
        // if (focusedLink) {
        //     this.form.get('label').setValue(focusedLink.label);
        //     this.form.get('href').setValue(focusedLink.href);
        //     this.form.get('target').setValue(focusedLink.target);
        // } else {
        //     const selection = this.editor.view.state.selection;
        //     this.form.get('label').setValue(this.editor.state.doc.textBetween(selection.from, selection.to, ' '));
        //     this.form.get('href').reset();
        //     this.form.get('target').reset();
        // }
        this.dialogVisible = true;
    };
    ImageComponent.prototype.apply = function () {
        if (!this.form.validate()) {
            return false;
        }
        this.editor.commands.setImage({ src: this.form.value.href });
        this.editor.chain().focus().setSize({
            width: this.form.value.width || null,
            height: this.form.value.height || null,
            size: this.form.value.size && this.form.value.size !== 'custom' ? this.form.value.size : null,
        }).run();
        return true;
    };
    ImageComponent.prototype.remove = function () {
    };
    /**
     * @inheritDoc
     */
    ImageComponent.prototype.getDefaultConfiguration = function () {
        return {
            sizes: {
                Small: { width: '250px', height: null },
                Normal: { width: null, height: null },
                Full: { width: '100%', height: null },
            }
        };
    };
    __decorate([
        Prop({ type: Object, default: VariantsDefault }),
        __metadata("design:type", Object)
    ], ImageComponent.prototype, "variants", void 0);
    __decorate([
        Prop({ type: Object, default: I18nDefaults }),
        __metadata("design:type", Object)
    ], ImageComponent.prototype, "i18n", void 0);
    __decorate([
        Computed(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [])
    ], ImageComponent.prototype, "availableSizes", null);
    __decorate([
        Expose(),
        __metadata("design:type", Object)
    ], ImageComponent.prototype, "form", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Boolean)
    ], ImageComponent.prototype, "dialogVisible", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ImageComponent.prototype, "showDialog", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], ImageComponent.prototype, "apply", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ImageComponent.prototype, "remove", null);
    ImageComponent = __decorate([
        Themeable(),
        Component({
            name: 'bt-form-tiptap-image',
            components: [PopoverComponent, ButtonComponent, IconMaterialImage]
        })
    ], ImageComponent);
    return ImageComponent;
}(AbstractTiptapModule));

export { ImageComponent as default };
