/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var constants = require('@banquette/http/_cjs/dev/constants');
var formFile = require('@banquette/ui/_cjs/dev/form/file/form-file');
var ensureInEnum = require('@banquette/utils-array/_cjs/dev/ensure-in-enum');
var humanSizeToByteCount = require('@banquette/utils-string/_cjs/dev/format/human-size-to-byte-count');
var isString = require('@banquette/utils-type/_cjs/dev/is-string');
var close = require('@banquette/vue-material-icons/_cjs/dev/close');
var description = require('@banquette/vue-material-icons/_cjs/dev/description');
var done = require('@banquette/vue-material-icons/_cjs/dev/done');
var error = require('@banquette/vue-material-icons/_cjs/dev/error');
var fileUpload = require('@banquette/vue-material-icons/_cjs/dev/file-upload');
var playArrow = require('@banquette/vue-material-icons/_cjs/dev/play-arrow');
var stop = require('@banquette/vue-material-icons/_cjs/dev/stop');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var expose_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/expose.decorator');
var import_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/import.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var themeable_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/themeable.decorator');
var watch_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/watch.decorator');
var bindTheme_directive = require('@banquette/vue-typescript/_cjs/dev/theme/bind-theme.directive');
var abstractVueForm_component = require('../abstract-vue-form.component.js');
require('../base-input/base-input.component.vue.js');
var baseInput_composable = require('../base-input/base-input.composable.js');
var file_viewModel = require('./file.view-model.js');
var i18nDefaults = require('./i18n-defaults.js');
var themeConfiguration = require('./theme-configuration.js');
var baseInput_component_vue_vue_type_script_lang = require('../base-input/base-input.component.vue_vue_type_script_lang.vue.js');

var FormFileComponent = /** @class */ (function (_super) {
    _tslib.__extends(FormFileComponent, _super);
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
        return new file_viewModel.FileViewModel(this.proxy, this.base, this.i18n);
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
    _tslib.__decorate([
        import_decorator.Import(baseInput_composable.BaseInputComposable, {
            floatingLabel: false
        }),
        _tslib.__metadata("design:type", baseInput_composable.BaseInputComposable)
    ], FormFileComponent.prototype, "base", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: false }),
        _tslib.__metadata("design:type", Boolean)
    ], FormFileComponent.prototype, "multiple", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: true }),
        _tslib.__metadata("design:type", Boolean)
    ], FormFileComponent.prototype, "autoStart", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: true }),
        _tslib.__metadata("design:type", Boolean)
    ], FormFileComponent.prototype, "ignoreNonUploadedFiles", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], FormFileComponent.prototype, "accept", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: [String, Number], default: null, transform: function (v) { return isString.isString(v) ? humanSizeToByteCount.humanSizeToByteCount(v) : v; } }),
        _tslib.__metadata("design:type", Object)
    ], FormFileComponent.prototype, "maxIndividualSize", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: [String, Number], default: null, transform: function (v) { return isString.isString(v) ? humanSizeToByteCount.humanSizeToByteCount(v) : v; } }),
        _tslib.__metadata("design:type", Object)
    ], FormFileComponent.prototype, "maxTotalSize", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], FormFileComponent.prototype, "url", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], FormFileComponent.prototype, "endpoint", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: constants.HttpMethod.POST, transform: function (value) { return ensureInEnum.ensureInEnum(value, constants.HttpMethod, constants.HttpMethod.POST); } }),
        _tslib.__metadata("design:type", String)
    ], FormFileComponent.prototype, "method", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Object, default: {} }),
        _tslib.__metadata("design:type", Object)
    ], FormFileComponent.prototype, "urlParams", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Object, default: {} }),
        _tslib.__metadata("design:type", Object)
    ], FormFileComponent.prototype, "headers", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Object, default: i18nDefaults.I18nDefaults }),
        _tslib.__metadata("design:type", Object)
    ], FormFileComponent.prototype, "i18n", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Object)
    ], FormFileComponent.prototype, "v", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], FormFileComponent.prototype, "browse", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [typeof(window) !== 'undefined' ? KeyboardEvent : Object]),
        _tslib.__metadata("design:returntype", void 0)
    ], FormFileComponent.prototype, "onKeyDown", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [typeof(window) !== 'undefined' ? Event : Object]),
        _tslib.__metadata("design:returntype", void 0)
    ], FormFileComponent.prototype, "onFileSelectionChange", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [formFile.FormFile]),
        _tslib.__metadata("design:returntype", void 0)
    ], FormFileComponent.prototype, "cancel", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [formFile.FormFile]),
        _tslib.__metadata("design:returntype", void 0)
    ], FormFileComponent.prototype, "pause", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [formFile.FormFile]),
        _tslib.__metadata("design:returntype", void 0)
    ], FormFileComponent.prototype, "start", null);
    _tslib.__decorate([
        watch_decorator.Watch(['multiple', 'autoStart', 'accept', 'maxIndividualSize', 'maxTotalSize', 'ignoreNonUploadedFiles'], { immediate: watch_decorator.ImmediateStrategy.BeforeMount }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], FormFileComponent.prototype, "syncConfigurationProps", null);
    _tslib.__decorate([
        watch_decorator.Watch(['url', 'endpoint', 'method', 'urlParams', 'headers'], { immediate: watch_decorator.ImmediateStrategy.BeforeMount }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], FormFileComponent.prototype, "syncRemoteConfiguration", null);
    FormFileComponent = _tslib.__decorate([
        themeable_decorator.Themeable(themeConfiguration.ThemeConfiguration),
        component_decorator.Component({
            name: 'bt-form-file',
            components: [baseInput_component_vue_vue_type_script_lang, close.IconMaterialClose, description.IconMaterialDescription, done.IconMaterialDone, error.IconMaterialError, fileUpload.IconMaterialFileUpload, playArrow.IconMaterialPlayArrow, stop.IconMaterialStop],
            directives: [bindTheme_directive.BindThemeDirective]
        })
    ], FormFileComponent);
    return FormFileComponent;
}(abstractVueForm_component.AbstractVueFormComponent));

module.exports = FormFileComponent;
