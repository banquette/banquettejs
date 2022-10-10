/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../_virtual/_tslib.js';
import { HttpMethod } from '@banquette/http/constants';
import { FormFile } from '@banquette/ui/form/file/form-file';
import { ensureInEnum } from '@banquette/utils-array/ensure-in-enum';
import { humanSizeToByteCount } from '@banquette/utils-string/format/human-size-to-byte-count';
import { isString } from '@banquette/utils-type/is-string';
import { IconMaterialClose } from '@banquette/vue-material-icons/close';
import { IconMaterialDescription } from '@banquette/vue-material-icons/description';
import { IconMaterialDone } from '@banquette/vue-material-icons/done';
import { IconMaterialError } from '@banquette/vue-material-icons/error';
import { IconMaterialFileUpload } from '@banquette/vue-material-icons/file-upload';
import { IconMaterialPlayArrow } from '@banquette/vue-material-icons/play-arrow';
import { IconMaterialStop } from '@banquette/vue-material-icons/stop';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { Import } from '@banquette/vue-typescript/decorator/import.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Themeable } from '@banquette/vue-typescript/decorator/themeable.decorator';
import { Watch, ImmediateStrategy } from '@banquette/vue-typescript/decorator/watch.decorator';
import { BindThemeDirective } from '@banquette/vue-typescript/theme/bind-theme.directive';
import { AbstractVueFormComponent } from '../abstract-vue-form.component.js';
import '../base-input/base-input.component.vue.js';
import { BaseInputComposable } from '../base-input/base-input.composable.js';
import { FileViewModel } from './file.view-model.js';
import { I18nDefaults } from './i18n-defaults.js';
import { ThemeConfiguration } from './theme-configuration.js';
import BaseFormInputComponent from '../base-input/base-input.component.vue_vue_type_script_lang.vue.js';

var FormFileComponent = /** @class */ (function (_super) {
    __extends(FormFileComponent, _super);
    function FormFileComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    FormFileComponent.prototype.beforeMount = function () {
        _super.prototype.beforeMount.call(this);
        this.base.floatingLabel = false;
    };
    /**
     * @inheritDoc
     */
    FormFileComponent.prototype.mounted = function () {
        _super.prototype.mounted.call(this);
        this.vm.input = this.$refs.input;
    };
    /**
     * @inheritDoc
     */
    FormFileComponent.prototype.setupViewModel = function () {
        return new FileViewModel(this.proxy, this.base, this.i18n);
    };
    /**
     * Open the file explorer.
     */
    FormFileComponent.prototype.browse = function () {
        if (!this.v.control.disabled) {
            this.$refs.input.click();
        }
    };
    /**
     * @keydown
     */
    FormFileComponent.prototype.onKeyDown = function (event) {
        if (event.key === 'Enter' && event.target === this.$el) {
            event.preventDefault();
            event.stopPropagation();
            this.browse();
        }
    };
    /**
     * Expect to be called by the `change` event listener on a file input.
     */
    FormFileComponent.prototype.onFileSelectionChange = function (event) {
        this.vm.onFileSelectionChange(event);
    };
    /**
     * Cancel the upload a file if still uploading or in queue and
     * remove it from the form control's value.
     */
    FormFileComponent.prototype.cancel = function (file) {
        this.vm.cancel(file);
    };
    /**
     * Cancel the upload a file but keep it in queue.
     * Will have to effect if the file is not currently uploading.
     */
    FormFileComponent.prototype.pause = function (file) {
        this.vm.pause(file);
    };
    /**
     * Start the upload of a file.
     */
    FormFileComponent.prototype.start = function (file) {
        this.vm.start(file);
    };
    FormFileComponent.prototype.syncConfigurationProps = function () {
        this.vm.maxIndividualSize = this.maxIndividualSize;
        this.vm.maxTotalSize = this.maxTotalSize;
        this.vm.multiple = this.multiple;
        this.vm.accept = this.accept;
        this.vm.autoStartUpload = this.autoStart;
        this.vm.ignoreNonUploadedFiles = this.ignoreNonUploadedFiles;
    };
    FormFileComponent.prototype.syncRemoteConfiguration = function () {
        this.vm.remote.updateConfiguration({
            url: this.url,
            endpoint: this.endpoint,
            method: this.method,
            urlParams: this.urlParams,
            headers: this.headers
        });
    };
    __decorate([
        Import(BaseInputComposable, {
            floatingLabel: false
        }),
        __metadata("design:type", BaseInputComposable)
    ], FormFileComponent.prototype, "base", void 0);
    __decorate([
        Prop({ type: Boolean, default: false }),
        __metadata("design:type", Boolean)
    ], FormFileComponent.prototype, "multiple", void 0);
    __decorate([
        Prop({ type: Boolean, default: true }),
        __metadata("design:type", Boolean)
    ], FormFileComponent.prototype, "autoStart", void 0);
    __decorate([
        Prop({ type: Boolean, default: true }),
        __metadata("design:type", Boolean)
    ], FormFileComponent.prototype, "ignoreNonUploadedFiles", void 0);
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", Object)
    ], FormFileComponent.prototype, "accept", void 0);
    __decorate([
        Prop({ type: [String, Number], default: null, transform: function (v) { return isString(v) ? humanSizeToByteCount(v) : v; } }),
        __metadata("design:type", Object)
    ], FormFileComponent.prototype, "maxIndividualSize", void 0);
    __decorate([
        Prop({ type: [String, Number], default: null, transform: function (v) { return isString(v) ? humanSizeToByteCount(v) : v; } }),
        __metadata("design:type", Object)
    ], FormFileComponent.prototype, "maxTotalSize", void 0);
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", Object)
    ], FormFileComponent.prototype, "url", void 0);
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", Object)
    ], FormFileComponent.prototype, "endpoint", void 0);
    __decorate([
        Prop({ type: String, default: HttpMethod.POST, transform: function (value) { return ensureInEnum(value, HttpMethod, HttpMethod.POST); } }),
        __metadata("design:type", String)
    ], FormFileComponent.prototype, "method", void 0);
    __decorate([
        Prop({ type: Object, default: {} }),
        __metadata("design:type", Object)
    ], FormFileComponent.prototype, "urlParams", void 0);
    __decorate([
        Prop({ type: Object, default: {} }),
        __metadata("design:type", Object)
    ], FormFileComponent.prototype, "headers", void 0);
    __decorate([
        Prop({ type: Object, default: I18nDefaults }),
        __metadata("design:type", Object)
    ], FormFileComponent.prototype, "i18n", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Object)
    ], FormFileComponent.prototype, "v", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FormFileComponent.prototype, "browse", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof(window) !== 'undefined' ? KeyboardEvent : Object]),
        __metadata("design:returntype", void 0)
    ], FormFileComponent.prototype, "onKeyDown", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof(window) !== 'undefined' ? Event : Object]),
        __metadata("design:returntype", void 0)
    ], FormFileComponent.prototype, "onFileSelectionChange", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [FormFile]),
        __metadata("design:returntype", void 0)
    ], FormFileComponent.prototype, "cancel", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [FormFile]),
        __metadata("design:returntype", void 0)
    ], FormFileComponent.prototype, "pause", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [FormFile]),
        __metadata("design:returntype", void 0)
    ], FormFileComponent.prototype, "start", null);
    __decorate([
        Watch(['multiple', 'autoStart', 'accept', 'maxIndividualSize', 'maxTotalSize', 'ignoreNonUploadedFiles'], { immediate: ImmediateStrategy.BeforeMount }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FormFileComponent.prototype, "syncConfigurationProps", null);
    __decorate([
        Watch(['url', 'endpoint', 'method', 'urlParams', 'headers'], { immediate: ImmediateStrategy.BeforeMount }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FormFileComponent.prototype, "syncRemoteConfiguration", null);
    FormFileComponent = __decorate([
        Themeable(ThemeConfiguration),
        Component({
            name: 'bt-form-file',
            components: [BaseFormInputComponent, IconMaterialClose, IconMaterialDescription, IconMaterialDone, IconMaterialError, IconMaterialFileUpload, IconMaterialPlayArrow, IconMaterialStop],
            directives: [BindThemeDirective]
        })
    ], FormFileComponent);
    return FormFileComponent;
}(AbstractVueFormComponent));

export { FormFileComponent as default };
