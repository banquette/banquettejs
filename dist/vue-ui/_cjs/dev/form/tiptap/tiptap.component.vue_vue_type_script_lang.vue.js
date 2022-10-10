/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var kebabCase = require('@banquette/utils-string/_cjs/dev/case/kebab-case');
var trim = require('@banquette/utils-string/_cjs/dev/format/trim');
var isArray = require('@banquette/utils-type/_cjs/dev/is-array');
var isNullOrUndefined = require('@banquette/utils-type/_cjs/dev/is-null-or-undefined');
var isString = require('@banquette/utils-type/_cjs/dev/is-string');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var expose_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/expose.decorator');
var import_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/import.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var themeable_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/themeable.decorator');
var watch_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/watch.decorator');
var bindTheme_directive = require('@banquette/vue-typescript/_cjs/dev/theme/bind-theme.directive');
var Document = require('@tiptap/extension-document');
var Paragraph = require('@tiptap/extension-paragraph');
var Text = require('@tiptap/extension-text');
var vue3 = require('@tiptap/vue-3');
var abstractVueForm_component = require('../abstract-vue-form.component.js');
var baseInput_composable = require('../base-input/base-input.composable.js');
var tiptapConfiguration_service = require('./tiptap-configuration.service.js');
var tiptap_viewModel = require('./tiptap.view-model.js');
var type = require('./type.js');
var utils = require('./utils.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Document__default = /*#__PURE__*/_interopDefaultLegacy(Document);
var Paragraph__default = /*#__PURE__*/_interopDefaultLegacy(Paragraph);
var Text__default = /*#__PURE__*/_interopDefaultLegacy(Text);

var FormTiptapComponent = /** @class */ (function (_super) {
    _tslib.__extends(FormTiptapComponent, _super);
    function FormTiptapComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * The Tiptap editor instance.
         */
        _this.editor = null;
        /**
         * The configuration object used to build the tiptap editor.
         */
        _this.innerConfiguration = null;
        /**
         * Number of modules currently in initialization.
         * This number may change when the configuration changes.
         *
         * The goal of this is to wait for all components to be mounted before
         * creating the Editor instance, to ensure all the required extensions are added.
         */
        _this.modulesInitializingCount = 0;
        /**
         * Modules that are part of the current editor instance.
         * Each module register itself in this array by calling `registerModule` on its parent component.
         */
        _this.modules = [];
        /**
         * Create a new Tiptap Editor instance.
         */
        _this.buildEditor = (function () {
            // Extensions always required, no matter the configuration.
            var baseExtensions = [Document__default["default"], Paragraph__default["default"], Text__default["default"]];
            var currentExtensions = [];
            var editor;
            return function (configuration) {
                var content = _this.vm.viewData.control.value || '';
                if (_this.editor) {
                    content = _this.editor.getHTML();
                    _this.editor.destroy();
                }
                var hasNewExtension = false;
                var extensions = [].concat(baseExtensions);
                var addExtensions = function (_extensions) {
                    for (var _i = 0, _extensions_1 = _extensions; _i < _extensions_1.length; _i++) {
                        var extension = _extensions_1[_i];
                        if (extensions.indexOf(extension) < 0) {
                            extensions.push(extension);
                            if (currentExtensions.indexOf(extension) < 0) {
                                hasNewExtension = true;
                            }
                        }
                    }
                };
                addExtensions(configuration.extensions || []);
                for (var _i = 0, _a = _this.modules; _i < _a.length; _i++) {
                    var module_1 = _a[_i];
                    addExtensions(module_1.getExtensions());
                }
                if (!_this.editor || hasNewExtension || extensions.length !== currentExtensions.length) {
                    _this.editor = new vue3.Editor({
                        content: content,
                        extensions: extensions,
                        onUpdate: _this.createEventHandler('onUpdate', function () {
                            if (trim.trim(editor.getText()).length > 0) {
                                _this.vm.viewData.control.value = editor.getHTML();
                            }
                            else {
                                _this.vm.viewData.control.value = '';
                            }
                        }),
                        onTransaction: _this.createEventHandler('onTransaction')
                    });
                }
                for (var _b = 0, _c = _this.modules; _b < _c.length; _b++) {
                    var module_2 = _c[_b];
                    module_2.setEditor(_this.editor);
                    module_2.enable();
                }
                currentExtensions = extensions;
                editor = _this.editor;
            };
        })();
        return _this;
    }
    /**
     * @inheritDoc
     */
    FormTiptapComponent.prototype.beforeMount = function () {
        _super.prototype.beforeMount.call(this);
        this.base.floatingLabel = false;
    };
    /**
     * @inheritDoc
     */
    FormTiptapComponent.prototype.beforeUnmount = function () {
        _super.prototype.beforeUnmount.call(this);
        if (this.editor) {
            this.editor.destroy();
            this.editor = null;
        }
    };
    /**
     * Method that must be called by all modules added to the editor.
     */
    FormTiptapComponent.prototype.registerModule = function (module) {
        var _this = this;
        if (!this.innerConfiguration) {
            throw new usage_exception.UsageException('Inner configuration not ready.');
        }
        if (this.modules.indexOf(module) > -1) {
            throw new usage_exception.UsageException('You can\'t register the same module twice.');
        }
        this.modules.push(module);
        if (--this.modulesInitializingCount === 0) {
            queueMicrotask(function () {
                _this.buildEditor(_this.innerConfiguration);
            });
        }
    };
    /**
     * Method that must be called by all modules when they are destroyed.
     */
    FormTiptapComponent.prototype.unregisterModule = function (module) {
        var pos = this.modules.indexOf(module);
        if (pos > -1) {
            this.modules.splice(pos, 1);
        }
    };
    /**
     * @inheritDoc
     */
    FormTiptapComponent.prototype.setupViewModel = function () {
        return new tiptap_viewModel.TiptapViewModel(this.proxy, this.base);
    };
    FormTiptapComponent.prototype.onConfChange = function (newValue) {
        var oldModules = this.innerConfiguration !== null ? Object.keys(this.innerConfiguration.modules) : [];
        this.innerConfiguration = this.resolveConfiguration(newValue);
        var newModules = Object.keys(this.innerConfiguration.modules);
        this.modulesInitializingCount = 0;
        for (var _i = 0, newModules_1 = newModules; _i < newModules_1.length; _i++) {
            var newModule = newModules_1[_i];
            if (oldModules.indexOf(newModule) < 0) {
                this.modulesInitializingCount++;
            }
        }
        if (!this.modulesInitializingCount) {
            this.buildEditor(this.innerConfiguration);
        }
    };
    /**
     * @inheritDoc
     */
    FormTiptapComponent.prototype.onValueChange = function (newValue) {
        _super.prototype.onValueChange.call(this, newValue);
        if (this.editor && this.editor.getHTML() !== newValue) {
            this.editor.commands.setContent(newValue);
        }
    };
    /**
     * Convert a TiptapConfigurationInterface into a InnerConfigurationInterface object.
     */
    FormTiptapComponent.prototype.resolveConfiguration = function (conf) {
        var _this = this;
        var output = { toolbars: [], modules: {}, extensions: conf.extensions || [] };
        var resolveComponentName = function (name) {
            var normalizedName = kebabCase.kebabCase(name);
            var namesCandidates = ['bt-form-tiptap-' + normalizedName, normalizedName];
            if (!isUndefined.isUndefined(utils.ModulesToolbarAliases[name])) {
                var alias = utils.ModulesToolbarAliases[name];
                namesCandidates.push.apply(namesCandidates, ['bt-form-tiptap-' + alias, alias]);
            }
            for (var _i = 0, namesCandidates_1 = namesCandidates; _i < namesCandidates_1.length; _i++) {
                var candidate = namesCandidates_1[_i];
                if (Object.keys(_this.$.root.appContext.components).indexOf(candidate) > -1) {
                    return candidate;
                }
            }
            console.warn("Failed to find an existing Vue component for name \"".concat(normalizedName, "\". The following names have been tried: ").concat(namesCandidates.join(', ')));
            return null;
        };
        if (isArray.isArray(conf.toolbars)) {
            for (var _i = 0, _a = conf.toolbars; _i < _a.length; _i++) {
                var toolbar_2 = _a[_i];
                var resolvedToolbar = [];
                for (var _b = 0, toolbar_1 = toolbar_2; _b < toolbar_1.length; _b++) {
                    var item = toolbar_1[_b];
                    var componentName = item;
                    componentName = resolveComponentName(componentName);
                    if (componentName !== null) {
                        resolvedToolbar.push(componentName);
                        output.modules[componentName] = { inToolbar: true, configuration: {} };
                    }
                }
                if (resolvedToolbar.length > 0) {
                    output.toolbars.push(resolvedToolbar);
                }
            }
        }
        if (!isUndefined.isUndefined(conf.modules)) {
            for (var _c = 0, _d = Object.keys(conf.modules); _c < _d.length; _c++) {
                var key = _d[_c];
                var componentName = resolveComponentName(key);
                if (componentName !== null) {
                    if (isUndefined.isUndefined(output.modules[componentName])) {
                        output.modules[componentName] = { inToolbar: false, configuration: conf.modules[key] };
                    }
                    else {
                        output.modules[componentName].configuration = conf.modules[key];
                    }
                }
            }
        }
        return output;
    };
    FormTiptapComponent.prototype.createEventHandler = function (eventName, callback) {
        var that = this;
        return function () {
            var arguments$1 = arguments;

            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments$1[_i];
            }
            for (var _a = 0, _b = that.modules; _a < _b.length; _a++) {
                var module_3 = _b[_a];
                module_3[eventName].apply(module_3, args);
            }
            if (!isUndefined.isUndefined(callback)) {
                callback.apply(this, args);
            }
        };
    };
    _tslib.__decorate([
        import_decorator.Import(baseInput_composable.BaseInputComposable, {
            floatingLabel: false
        }),
        _tslib.__metadata("design:type", baseInput_composable.BaseInputComposable)
    ], FormTiptapComponent.prototype, "base", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({
            type: [String, Object],
            transform: function (v) {
                if (isNullOrUndefined.isNullOrUndefined(v)) {
                    return {};
                }
                if (isString.isString(v)) {
                    var resolved = injector.Injector.Get(tiptapConfiguration_service.TiptapConfigurationService).get(v);
                    if (!resolved) {
                        throw new usage_exception.UsageException("No configuration named \"".concat(v, "\" have been found."));
                    }
                    v = resolved;
                }
                if (!type.isTiptapConfiguration(v)) {
                    throw new usage_exception.UsageException('Invalid configuration. Expecting a `TiptapConfigurationInterface` object.');
                }
                return v;
            }
        }),
        _tslib.__metadata("design:type", Object)
    ], FormTiptapComponent.prototype, "conf", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Object)
    ], FormTiptapComponent.prototype, "editor", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Object)
    ], FormTiptapComponent.prototype, "innerConfiguration", void 0);
    _tslib.__decorate([
        watch_decorator.Watch('conf', { immediate: watch_decorator.ImmediateStrategy.BeforeMount, deep: true }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [Object]),
        _tslib.__metadata("design:returntype", void 0)
    ], FormTiptapComponent.prototype, "onConfChange", null);
    FormTiptapComponent = _tslib.__decorate([
        themeable_decorator.Themeable(),
        component_decorator.Component({
            name: 'bt-form-tiptap',
            directives: [bindTheme_directive.BindThemeDirective],
            components: { 'editor-content': vue3.EditorContent }
        })
    ], FormTiptapComponent);
    return FormTiptapComponent;
}(abstractVueForm_component.AbstractVueFormComponent));

module.exports = FormTiptapComponent;
