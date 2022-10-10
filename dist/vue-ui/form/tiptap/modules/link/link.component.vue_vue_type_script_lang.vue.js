/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../../../_virtual/_tslib.js';
import { FormControl } from '@banquette/form/form-control';
import { FormFactory } from '@banquette/form/form.factory';
import { oncePerCycleProxy } from '@banquette/utils-misc/once-per-cycle-proxy';
import { proxy } from '@banquette/utils-misc/proxy';
import { trim } from '@banquette/utils-string/format/trim';
import { And } from '@banquette/validation/type/and';
import { NotEmpty } from '@banquette/validation/type/not-empty';
import { Url } from '@banquette/validation/type/url';
import { IconMaterialLink } from '@banquette/vue-material-icons/link';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Themeable } from '@banquette/vue-typescript/decorator/themeable.decorator';
import { Link } from '@tiptap/extension-link';
import '../../../../button/button/button.component.vue.js';
import '../../../../button/button-group/button-group.component.vue.js';
import '../../../../dialog/dialog.component.vue.js';
import '../../../../dialog/dialog.service.js';
import '../../../../popover/popover.component.vue.js';
import '../../../../popover/popover.directive.js';
import { AbstractTiptapModule } from '../abstract-tiptap-module.js';
import { I18nDefaults } from './i18n-defaults.js';
import { ThemeConfiguration } from './theme-configuration.js';
import { VariantsDefault } from './variants-default.js';
import DialogComponent from '../../../../dialog/dialog.component.vue_vue_type_script_lang.vue.js';
import PopoverComponent from '../../../../popover/popover.component.vue_vue_type_script_lang.vue.js';
import ButtonComponent from '../../../../button/button/button.component.vue_vue_type_script_lang.vue.js';

var LinkComponent = /** @class */ (function (_super) {
    __extends(LinkComponent, _super);
    function LinkComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dialogVisible = false;
        _this.onTransaction = (function () {
            var lastRemovedPos = null;
            return function (props) {
                if (props.transaction.selection.empty && props.transaction.selection.$from.pos !== lastRemovedPos) {
                    var focusedLink = _this.resolveFocusedLink();
                    if (focusedLink && focusedLink.pos + focusedLink.label.length === props.transaction.selection.$from.pos) {
                        window.setTimeout(proxy(_this.remove, _this));
                        lastRemovedPos = props.transaction.selection.$from.pos;
                    }
                }
                else {
                    lastRemovedPos = null;
                }
            };
        })();
        return _this;
    }
    LinkComponent.prototype.beforeMount = function () {
        _super.prototype.beforeMount.call(this);
        this.form = FormFactory.Create({
            label: '',
            href: new FormControl('', And(NotEmpty(this.i18n.hrefControlEmptyError), Url(this.i18n.hrefControlSyntaxError))),
            target: new FormControl('_blank')
        });
        this.form.onValueChanged(oncePerCycleProxy(this.$forceUpdateComputed, this));
    };
    /**
     * @inheritDoc
     */
    LinkComponent.prototype.getExtensions = function () {
        return [Link.configure(this.configuration.tiptap)];
    };
    /**
     * Show the configuration dialog.
     */
    LinkComponent.prototype.showDialog = function () {
        var focusedLink = this.resolveFocusedLink();
        if (focusedLink) {
            this.form.get('label').setValue(focusedLink.label);
            this.form.get('href').setValue(focusedLink.href);
            this.form.get('target').setValue(focusedLink.target);
        }
        else {
            var selection = this.editor.view.state.selection;
            this.form.get('label').setValue(this.editor.state.doc.textBetween(selection.from, selection.to, ' '));
            this.form.get('href').reset();
            this.form.get('target').reset();
        }
        this.dialogVisible = true;
    };
    /**
     * Apply the configuration into the wysiwyg.
     */
    LinkComponent.prototype.apply = function () {
        if (!this.form.validate()) {
            return false;
        }
        var focusedLink = this.resolveFocusedLink();
        if (focusedLink) {
            this.editor.commands.deleteRange({ from: focusedLink.pos, to: focusedLink.pos + focusedLink.label.length });
        }
        else if (!this.editor.state.selection.empty) {
            this.editor.commands.deleteRange({ from: this.editor.state.selection.from, to: this.editor.state.selection.to });
        }
        var label = trim(this.form.value.label);
        if (!label.length) {
            label = this.form.value.href;
        }
        var selectionAnchor = this.editor.state.selection.anchor;
        this.editor.commands.insertContentAt(selectionAnchor, label, { updateSelection: true });
        this.editor.commands.setTextSelection({ from: selectionAnchor, to: selectionAnchor + label.length });
        this.editor
            .chain()
            .focus()
            .extendMarkRange('link')
            .setLink({ href: String(this.form.value.href), target: this.form.value.target })
            .run();
        return true;
    };
    LinkComponent.prototype.remove = function () {
        this.editor.commands.unsetLink();
    };
    /**
     * @inheritDoc
     */
    LinkComponent.prototype.getDefaultConfiguration = function () {
        return { openOnClick: false };
    };
    LinkComponent.prototype.resolveFocusedLink = function () {
        var label = '';
        var href = '';
        var target = '_blank';
        for (var _i = 0, _a = [
            this.editor.state.selection.$from.nodeBefore,
            this.editor.state.selection.$from.nodeAfter
        ]; _i < _a.length; _i++) {
            var candidate = _a[_i];
            if (candidate) {
                for (var _b = 0, _c = candidate.marks; _b < _c.length; _b++) {
                    var mark = _c[_b];
                    if (mark.type.name === 'link') {
                        label += candidate.text;
                        href = mark.attrs.href;
                        if (mark.attrs.target) {
                            target = mark.attrs.target;
                        }
                        break;
                    }
                }
            }
        }
        return label.length > 0 ? {
            label: label,
            href: href,
            target: target,
            pos: this.editor.state.selection.$anchor.pos - (this.editor.state.selection.$from.nodeBefore ? this.editor.state.selection.$from.nodeBefore.nodeSize : 0)
        } : null;
    };
    __decorate([
        Prop({ type: Object, default: VariantsDefault }),
        __metadata("design:type", Object)
    ], LinkComponent.prototype, "variants", void 0);
    __decorate([
        Prop({ type: Object, default: I18nDefaults }),
        __metadata("design:type", Object)
    ], LinkComponent.prototype, "i18n", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Object)
    ], LinkComponent.prototype, "form", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Boolean)
    ], LinkComponent.prototype, "dialogVisible", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LinkComponent.prototype, "showDialog", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], LinkComponent.prototype, "apply", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LinkComponent.prototype, "remove", null);
    LinkComponent = __decorate([
        Themeable(ThemeConfiguration),
        Component({
            name: 'bt-form-tiptap-link',
            components: [PopoverComponent, ButtonComponent, DialogComponent, IconMaterialLink]
        })
    ], LinkComponent);
    return LinkComponent;
}(AbstractTiptapModule));

export { LinkComponent as default };
