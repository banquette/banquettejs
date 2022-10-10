import { AnyObject } from "@banquette/utils-type/types";
import { Editor, Extensions } from '@tiptap/vue-3';
import { AbstractVueFormComponent } from "../abstract-vue-form.component";
import { BaseInputComposable } from "../base-input/base-input.composable";
import { TiptapModuleInterface } from "./modules/tiptap-module.interface";
import { TiptapConfigurationInterface } from "./tiptap-configuration.interface";
import { TiptapViewDataInterface } from "./tiptap-view-data.interface";
import { TiptapViewModel } from "./tiptap.view-model";
declare type ModuleInUse = {
    configuration: AnyObject;
    inToolbar: boolean;
};
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
export default class FormTiptapComponent extends AbstractVueFormComponent<TiptapViewDataInterface, TiptapViewModel> {
    /**
     * Holds the props exposed by the base input.
     */
    base: BaseInputComposable;
    conf: TiptapConfigurationInterface;
    /**
     * The Tiptap editor instance.
     */
    editor: Editor | null;
    /**
     * The configuration object used to build the tiptap editor.
     */
    innerConfiguration: InnerConfigurationInterface | null;
    /**
     * Number of modules currently in initialization.
     * This number may change when the configuration changes.
     *
     * The goal of this is to wait for all components to be mounted before
     * creating the Editor instance, to ensure all the required extensions are added.
     */
    private modulesInitializingCount;
    /**
     * Modules that are part of the current editor instance.
     * Each module register itself in this array by calling `registerModule` on its parent component.
     */
    private modules;
    /**
     * @inheritDoc
     */
    beforeMount(): void;
    /**
     * @inheritDoc
     */
    beforeUnmount(): void;
    /**
     * Method that must be called by all modules added to the editor.
     */
    registerModule(module: TiptapModuleInterface): void;
    /**
     * Method that must be called by all modules when they are destroyed.
     */
    unregisterModule(module: TiptapModuleInterface): void;
    /**
     * @inheritDoc
     */
    protected setupViewModel(): TiptapViewModel;
    protected onConfChange(newValue: TiptapConfigurationInterface): void;
    /**
     * @inheritDoc
     */
    protected onValueChange(newValue: any): void;
    /**
     * Convert a TiptapConfigurationInterface into a InnerConfigurationInterface object.
     */
    private resolveConfiguration;
    /**
     * Create a new Tiptap Editor instance.
     */
    private buildEditor;
    private createEventHandler;
}
export {};
