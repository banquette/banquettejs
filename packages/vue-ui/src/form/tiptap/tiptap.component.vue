<style src="./tiptap.component.css" scoped></style>
<template src="./tiptap.component.html" ></template>
<script lang="ts">
import { Injector } from "@banquette/dependency-injection";
import { UsageException } from "@banquette/exception";
import { trim } from "@banquette/utils-string";
import { GenericCallback, isNullOrUndefined, isString, isUndefined } from "@banquette/utils-type";
import { BindThemeDirective, Component, Expose, ImmediateStrategy, Import, Prop, Themeable, Watch } from "@banquette/vue-typescript";
import { Editor, EditorContent, Extensions } from '@tiptap/vue-3'
import { BtAbstractVueForm } from "../abstract-vue-form.component";
import { BaseInputComposable, BtFormBaseInput } from "../base-input";
import { TiptapModuleInterface } from "./modules/tiptap-module.interface";
import { TiptapConfigurationInterface } from "./tiptap-configuration.interface";
import { TiptapConfigurationService } from "./tiptap-configuration.service";
import { TiptapViewDataInterface } from "./tiptap-view-data.interface";
import { TiptapViewModel } from "./tiptap.view-model";
import { isTiptapConfiguration } from "./type";
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Placeholder from "@tiptap/extension-placeholder";

type InnerConfigurationInterface = Required<TiptapConfigurationInterface>;

@Themeable()
@Component({
    name: 'bt-form-tiptap',
    directives: [BindThemeDirective],
    components: [EditorContent, BtFormBaseInput]
})
export default class BtFormTiptap extends BtAbstractVueForm<TiptapViewDataInterface, TiptapViewModel> {
    // To get autocompletion in the view.
    declare v: TiptapViewDataInterface;

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
                const resolved = Injector.Get(TiptapConfigurationService).get(v);
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
        const oldModules = this.innerConfiguration ? this.getUniqueModulesNamesFromConfiguration(this.innerConfiguration) : [];
        this.innerConfiguration = {
            toolbars: newValue.toolbars || [],
            modules: newValue.modules || [],
            extensions: newValue.extensions || []
        };
        const newModules = this.getUniqueModulesNamesFromConfiguration(this.innerConfiguration);
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

    private ignoreNextPlaceHolderUpdate = false;
    @Watch('placeholder', {immediate: ImmediateStrategy.BeforeMount})
    protected onPlaceholderChange(newValue: any): void {
        if (this.ignoreNextPlaceHolderUpdate) {
            this.ignoreNextPlaceHolderUpdate = false;
            return ;
        }
        if (newValue) {
            // Hacky way of denying the placeholder to the base input.
            this.$nextTick(() => {
                this.ignoreNextPlaceHolderUpdate = true;
                this.v.base.placeholder = null;
            });
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
     * Create a new Tiptap Editor instance.
     */
    private buildEditor = (() => {
        // Extensions always required, no matter the configuration.
        const baseExtensions: Extensions = [Document, Paragraph, Text, Placeholder.configure({
            placeholder: () => {
                return this.base?.placeholder || '';
            }
        })];
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
                module.setEditor(this.editor!);
                module.enable();
            }
            currentExtensions = extensions;
            editor = this.editor!;
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

    private getUniqueModulesNamesFromConfiguration(configuration: InnerConfigurationInterface): string[] {
        const modules: string[] = [];
        for (const module of configuration.toolbars) {
            for (const item of module) {
                if (!modules.includes(item.component.name)) {
                    modules.push(item.component.name);
                }
            }
        }
        for (const module of configuration.modules) {
            if (!modules.includes(module.component.name)) {
                modules.push(module.component.name);
            }
        }
        return modules;
    }
}
</script>
