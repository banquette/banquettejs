import { Constructor } from "@banquette/utils-type/types";
import { AppConfig, Component } from "@vue/runtime-core";
import { App, ComponentPublicInstance, Directive } from "vue";
export interface DirectiveDefinition {
    name: string;
    directive: Directive;
}
/**
 * Offer a convenient way to create a Vue instance only containing a limited number of components, organized by group.
 * All built-in Vue components of Banquette register themselves into the VueBuilder under one or multiple groups.
 *
 * For example, form components are registered under the "form" group, by calling:
 * `VueBuilder.RegisterComponent(FormInputComponent, ['default', 'form'])`.
 *
 * You can then create a Vue instance that has access to these component by doing:
 * `VueBuilder.Create('form')`.
 *
 * The VueBuilder is also used by the "VueApp" DOM module to create the app instance.
 */
export declare class VueBuilder {
    static DEFAULT_GROUP: string;
    /**
     * Components and directives to declare in a new Vue instance, indexed by group name.
     */
    private static Components;
    private static Directives;
    /**
     * Map between the real directive object and the constructor used to create it.
     */
    private static DirectivesConstructorsMap;
    /**
     * Options shared between all Vue apps.
     */
    private static Options;
    /**
     * Global properties available to all Vue apps.
     */
    private static GlobalProperties;
    /**
     * Register a component into the factory.
     *
     * When an instance of Vue is created using the factory, the component will be declared in the instance
     * if the group matches one of the groups the user is asking for.
     */
    static RegisterComponent(name: string, component: Component, group?: string | string[]): void;
    /**
     * Register a directive into the factory.
     *
     * When an instance of Vue is created using the factory, the directive will be declared in the instance
     * if the group matches one of the groups the user is asking for.
     */
    static RegisterDirective(name: string, directive: Directive, group?: string | string[] | null, ctor?: Constructor | null): void;
    /**
     * Register a property that will be accessible to all components of the app.
     */
    static RegisterGlobalProperty(name: string, value: any): void;
    /**
     * Get the real directive object generated from the class constructor on which decorators have been set.
     */
    static GetDirectiveDefinition(ctor: Constructor): DirectiveDefinition;
    /**
     * Register global options that will be merged with other options when creating any Vue app.
     */
    static SetVueOptions(options: Partial<AppConfig>): void;
    /**
     * Create a new Vue instance.
     */
    static CreateApp(group?: string | string[], options?: Partial<AppConfig>): App<Element>;
    /**
     * Create a new Vue instance.
     */
    static CreateAppAndMount(element: Element | string, group?: string | string[], options?: Partial<AppConfig>): ComponentPublicInstance;
    static ApplyToExistingApp(app: App, group?: string | string[], options?: Partial<AppConfig>): void;
    /**
     * Merge multiple arrays of vue options together.
     */
    private static MergeVueOptions;
}
