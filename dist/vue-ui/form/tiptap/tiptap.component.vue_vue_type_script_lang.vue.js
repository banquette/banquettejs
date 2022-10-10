/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../_virtual/_tslib.js';
import { Injector } from '@banquette/dependency-injection/injector';
import { UsageException } from '@banquette/exception/usage.exception';
import { kebabCase } from '@banquette/utils-string/case/kebab-case';
import { trim } from '@banquette/utils-string/format/trim';
import { isArray } from '@banquette/utils-type/is-array';
import { isNullOrUndefined } from '@banquette/utils-type/is-null-or-undefined';
import { isString } from '@banquette/utils-type/is-string';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { Import } from '@banquette/vue-typescript/decorator/import.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Themeable } from '@banquette/vue-typescript/decorator/themeable.decorator';
import { Watch, ImmediateStrategy } from '@banquette/vue-typescript/decorator/watch.decorator';
import { BindThemeDirective } from '@banquette/vue-typescript/theme/bind-theme.directive';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import { EditorContent, Editor } from '@tiptap/vue-3';
import { AbstractVueFormComponent } from '../abstract-vue-form.component.js';
import { BaseInputComposable } from '../base-input/base-input.composable.js';
import { TiptapConfigurationService } from './tiptap-configuration.service.js';
import { TiptapViewModel } from './tiptap.view-model.js';
import { isTiptapConfiguration } from './type.js';
import { ModulesToolbarAliases } from './utils.js';

var FormTiptapComponent = /** @class */ (function (_super) {
    __extends(FormTiptapComponent, _super);
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
            var baseExtensions = [Document, Paragraph, Text];
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
                    _this.editor = new Editor({
                        content: content,
                        extensions: extensions,
                        onUpdate: _this.createEventHandler('onUpdate', function () {
                            if (trim(editor.getText()).length > 0) {
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
            throw new UsageException('Inner configuration not ready.');
        }
        if (this.modules.indexOf(module) > -1) {
            throw new UsageException('You can\'t register the same module twice.');
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
        return new TiptapViewModel(this.proxy, this.base);
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
            var normalizedName = kebabCase(name);
            var namesCandidates = ['bt-form-tiptap-' + normalizedName, normalizedName];
            if (!isUndefined(ModulesToolbarAliases[name])) {
                var alias = ModulesToolbarAliases[name];
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
        if (isArray(conf.toolbars)) {
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
        if (!isUndefined(conf.modules)) {
            for (var _c = 0, _d = Object.keys(conf.modules); _c < _d.length; _c++) {
                var key = _d[_c];
                var componentName = resolveComponentName(key);
                if (componentName !== null) {
                    if (isUndefined(output.modules[componentName])) {
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
            if (!isUndefined(callback)) {
                callback.apply(this, args);
            }
        };
    };
    __decorate([
        Import(BaseInputComposable, {
            floatingLabel: false
        }),
        __metadata("design:type", BaseInputComposable)
    ], FormTiptapComponent.prototype, "base", void 0);
    __decorate([
        Prop({
            type: [String, Object],
            transform: function (v) {
                if (isNullOrUndefined(v)) {
                    return {};
                }
                if (isString(v)) {
                    var resolved = Injector.Get(TiptapConfigurationService).get(v);
                    if (!resolved) {
                        throw new UsageException("No configuration named \"".concat(v, "\" have been found."));
                    }
                    v = resolved;
                }
                if (!isTiptapConfiguration(v)) {
                    throw new UsageException('Invalid configuration. Expecting a `TiptapConfigurationInterface` object.');
                }
                return v;
            }
        }),
        __metadata("design:type", Object)
    ], FormTiptapComponent.prototype, "conf", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Object)
    ], FormTiptapComponent.prototype, "editor", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Object)
    ], FormTiptapComponent.prototype, "innerConfiguration", void 0);
    __decorate([
        Watch('conf', { immediate: ImmediateStrategy.BeforeMount, deep: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FormTiptapComponent.prototype, "onConfChange", null);
    FormTiptapComponent = __decorate([
        Themeable(),
        Component({
            name: 'bt-form-tiptap',
            directives: [BindThemeDirective],
            components: { 'editor-content': EditorContent }
        })
    ], FormTiptapComponent);
    return FormTiptapComponent;
}(AbstractVueFormComponent));

export { FormTiptapComponent as default };
