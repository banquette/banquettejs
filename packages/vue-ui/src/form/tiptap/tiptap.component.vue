<style src="./tiptap.component.css" scoped></style>
<template src="./tiptap.component.html" ></template>
<script lang="ts">
import { Injector } from "@banquette/dependency-injection/injector";
import { UsageException } from "@banquette/exception/usage.exception";
import { kebabCase } from "@banquette/utils-string/case/kebab-case";
import { trim } from "@banquette/utils-string/format/trim";
import { isArray } from "@banquette/utils-type/is-array";
import { isNullOrUndefined } from "@banquette/utils-type/is-null-or-undefined";
import { isString } from "@banquette/utils-type/is-string";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { AnyObject, GenericCallback } from "@banquette/utils-type/types";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Import } from "@banquette/vue-typescript/decorator/import.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript/decorator/watch.decorator";
import { BindThemeDirective } from "@banquette/vue-typescript/theme/bind-theme.directive";
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import { Editor, EditorContent, Extensions } from '@tiptap/vue-3'
import { AbstractVueFormComponent } from "../abstract-vue-form.component";
import { BaseInputComposable } from "../base-input/base-input.composable";
import { TiptapModuleInterface } from "./modules/tiptap-module.interface";
import { TiptapConfigurationStorage } from "./tiptap-configuration-storage";
import { TiptapConfigurationInterface } from "./tiptap-configuration.interface";
import { TiptapViewDataInterface } from "./tiptap-view-data.interface";
import { TiptapViewModel } from "./tiptap.view-model";
import { isTiptapConfiguration } from "./type";
import { ModulesToolbarAliases } from "./utils";

type ModuleInUse = {configuration: AnyObject, inToolbar: boolean};
interface InnerConfigurationInterface {
    /**
     * Array of arrays of components' names.
     */
    toolbars: string[][];

    /**
     * Map containing all modules in use with their configuration.
     */
    modules: Record<string, ModuleInUse>;

    /**
     * Array of extensions that don't depend on the modules.
     */
    extensions: Extensions;
}

@Themeable()
@Component({
    name: 'bt-form-tiptap',
    directives: [BindThemeDirective],
    components: {'editor-content': EditorContent}
})
export default class TiptapComponent extends AbstractVueFormComponent<TiptapViewDataInterface, TiptapViewModel> {
    /**
     * Holds the props exposed by the base input.
     */
    @Import(BaseInputComposable, {
        floatingLabel: false
    }) public base!: BaseInputComposable;

    @Prop({
        type: [String, Object],
        transform: (v: any) => {
            if (isNullOrUndefined(v)) {
                return {};
            }
            if (isString(v)) {
                const resolved = Injector.Get(TiptapConfigurationStorage).get(v);
                if (!resolved) {
                    throw new UsageException(`No configuration named "${v}" have been found.`);
                }
                v = resolved;
            }
            if (!isTiptapConfiguration(v)) {
                throw new UsageException('Invalid configuration. Expecting a `TiptapConfigurationInterface` object.');
            }
            return v;
        }
    }) public conf!: TiptapConfigurationInterface;

    /**
     * The Tiptap editor instance.
     */
    @Expose() public editor: Editor|null = null;

    /**
     * The configuration object used to build the tiptap editor.
     */
    @Expose() public innerConfiguration: InnerConfigurationInterface|null = null;

    /**
     * Number of modules currently in initialization.
     * This number may change when the configuration changes.
     *
     * The goal of this is to wait for all components to be mounted before
     * creating the Editor instance, to ensure all the required extensions are added.
     */
    private modulesInitializingCount: number = 0;

    /**
     * Modules that are part of the current editor instance.
     * Each module register itself in this array by calling `registerModule` on its parent component.
     */
    private modules: TiptapModuleInterface[] = [];

    /**
     * @inheritDoc
     */
    public beforeMount(): void {
        super.beforeMount();
        this.base.floatingLabel = false;
    }

    /**
     * @inheritDoc
     */
    public beforeUnmount() {
        super.beforeUnmount();
        if (this.editor) {
            this.editor.destroy();
            this.editor = null;
        }
    }

    /**
     * Method that must be called by all modules added to the editor.
     */
    public registerModule(module: TiptapModuleInterface): void {
        if (!this.innerConfiguration) {
            throw new UsageException('Inner configuration not ready.');
        }
        if (this.modules.indexOf(module) > -1) {
            throw new UsageException('You can\'t register the same module twice.');
        }
        this.modules.push(module);
        if (--this.modulesInitializingCount === 0) {
            queueMicrotask(() => {
                this.buildEditor(this.innerConfiguration as InnerConfigurationInterface);
            });
        }
    }

    /**
     * Method that must be called by all modules when they are destroyed.
     */
    public unregisterModule(module: TiptapModuleInterface): void {
        const pos = this.modules.indexOf(module);
        if (pos > -1) {
            this.modules.splice(pos, 1);
        }
    }

    /**
     * @inheritDoc
     */
    protected setupViewModel(): TiptapViewModel {
        return new TiptapViewModel(this.proxy, this.base);
    }

    @Watch('conf', {immediate: ImmediateStrategy.BeforeMount, deep: true})
    protected onConfChange(newValue: TiptapConfigurationInterface) {
        const oldModules = this.innerConfiguration !== null ? Object.keys(this.innerConfiguration.modules) : [];
        this.innerConfiguration = this.resolveConfiguration(newValue);
        const newModules = Object.keys(this.innerConfiguration.modules);

        this.modulesInitializingCount = 0;
        for (const newModule of newModules) {
            if (oldModules.indexOf(newModule) < 0) {
                this.modulesInitializingCount++;
            }
        }
        if (!this.modulesInitializingCount) {
            this.buildEditor(this.innerConfiguration);
        }
    }

    /**
     * @inheritDoc
     */
    protected onValueChange(newValue: any): void {
        super.onValueChange(newValue);
        if (this.editor && this.editor.getHTML() !== newValue) {
            this.editor.commands.setContent(newValue);
        }
    }

    /**
     * Convert a TiptapConfigurationInterface into a InnerConfigurationInterface object.
     */
    private resolveConfiguration(conf: TiptapConfigurationInterface): InnerConfigurationInterface {
        const output: InnerConfigurationInterface = {toolbars: [], modules: {}, extensions: conf.extensions || []};
        const resolveComponentName = (name: string): string|null => {
            const normalizedName = kebabCase(name);
            const namesCandidates = ['bt-form-tiptap-' + normalizedName, normalizedName];
            if (!isUndefined(ModulesToolbarAliases[name])) {
                const alias = ModulesToolbarAliases[name];
                namesCandidates.push.apply(namesCandidates, ['bt-form-tiptap-' + alias, alias]);
            }
            for (const candidate of namesCandidates) {
                if (Object.keys(this.$.root.appContext.components).indexOf(candidate) > -1) {
                    return candidate;
                }
            }
            console.warn(`Failed to find an existing Vue component for name "${normalizedName}". The following names have been tried: ${namesCandidates.join(', ')}`);
            return null;
        };
        if (isArray(conf.toolbars)) {
            for (const toolbar of conf.toolbars) {
                const resolvedToolbar: string[] = [];
                for (let item of toolbar) {
                    let componentName: any = item;
                    componentName = resolveComponentName(componentName);
                    if (componentName !== null) {
                        resolvedToolbar.push(componentName);
                        output.modules[componentName] = {inToolbar: true, configuration: {}};
                    }
                }
                if (resolvedToolbar.length > 0) {
                    output.toolbars.push(resolvedToolbar);
                }
            }
        }
        if (!isUndefined(conf.modules)) {
            for (const key of Object.keys(conf.modules)) {
                const componentName = resolveComponentName(key);
                if (componentName !== null) {
                    if (isUndefined(output.modules[componentName])) {
                        output.modules[componentName] = {inToolbar: false, configuration: (conf.modules as any)[key]};
                    } else {
                        output.modules[componentName].configuration = (conf.modules as any)[key];
                    }
                }
            }
        }
        return output;
    }

    /**
     * Create a new Tiptap Editor instance.
     */
    private buildEditor = (() => {
        // Extensions always required, no matter the configuration.
        const baseExtensions = [Document, Paragraph, Text];
        let currentExtensions: Extensions = [];
        let editor!: Editor;
        return (configuration: InnerConfigurationInterface): void => {
            let content = this.vm.viewData.control.value || '';
            if (this.editor) {
                content = this.editor.getHTML();
                this.editor.destroy();
            }
            let hasNewExtension: boolean = false;
            const extensions: Extensions = ([] as Extensions).concat(baseExtensions);
            const addExtensions = (_extensions: Extensions) => {
                for (const extension of _extensions) {
                    if (extensions.indexOf(extension) < 0) {
                        extensions.push(extension);
                        if (currentExtensions.indexOf(extension) < 0) {
                            hasNewExtension = true;
                        }
                    }
                }
            };
            addExtensions(configuration.extensions || []);
            for (const module of this.modules) {
                addExtensions(module.getExtensions());
            }
            if (!this.editor || hasNewExtension || extensions.length !== currentExtensions.length) {
                this.editor = new Editor({
                    content,
                    extensions,
                    onUpdate: this.createEventHandler('onUpdate', () => {
                        if (trim(editor.getText()).length > 0) {
                            this.vm.viewData.control.value = editor.getHTML();
                        } else {
                            this.vm.viewData.control.value = '';
                        }
                    }),
                    onTransaction: this.createEventHandler('onTransaction')
                });
            }
            for (const module of this.modules) {
                module.setEditor(this.editor);
                module.enable();
            }
            currentExtensions = extensions;
            editor = this.editor;
        }
    })();

    private createEventHandler(eventName: string, callback?: GenericCallback): GenericCallback {
        const that = this;
        return function(this: any, ...args: any[]) {
            for (const module of that.modules) {
                (module as any)[eventName].apply(module, args);
            }
            if (!isUndefined(callback)) {
                callback.apply(this, args);
            }
        };
    }
}
</script>
