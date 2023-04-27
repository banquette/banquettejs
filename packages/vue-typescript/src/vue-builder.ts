import { UsageException } from "@banquette/exception";
import { ensureArray, isFunction, isObject, isUndefined, Constructor } from "@banquette/utils-type";
import { AppConfig, Component } from "@vue/runtime-core";
import { App, ComponentPublicInstance, createApp, Directive } from "vue";

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
export class VueBuilder {
    public static DEFAULT_GROUP = 'default';

    /**
     * Components and directives to declare in a new Vue instance, indexed by group name.
     */
    private static Components: Record<string, Record<string, Component>> = {};
    private static Directives: Record<string, Record<string, Directive>> = {};

    /**
     * Map between the real directive object and the constructor used to create it.
     */
    private static DirectivesConstructorsMap = new WeakMap<Constructor, DirectiveDefinition>();

    /**
     * Options shared between all Vue apps.
     */
    private static Options: Record<string, any> = {};

    /**
     * Global properties available to all Vue apps.
     */
    private static GlobalProperties: Record<string, any> = {};

    /**
     * Register a component into the factory.
     *
     * When an instance of Vue is created using the factory, the component will be declared in the instance
     * if the group matches one of the groups the user is asking for.
     */
    public static RegisterComponent(name: string, component: Component, group: string|string[] = VueBuilder.DEFAULT_GROUP): void {
        const groups = ensureArray(group);
        for (let group of groups) {
            if (isUndefined(VueBuilder.Components[group])) {
                VueBuilder.Components[group] = {};
            }
            VueBuilder.Components[group][name] = component;
        }
    }

    /**
     * Register a directive into the factory.
     *
     * When an instance of Vue is created using the factory, the directive will be declared in the instance
     * if the group matches one of the groups the user is asking for.
     */
    public static RegisterDirective(name: string, directive: Directive, group: string|string[]|null = VueBuilder.DEFAULT_GROUP, ctor: Constructor|null = null): void {
        const groups = ensureArray(group);
        for (let group of groups) {
            if (group !== null) {
                if (isUndefined(VueBuilder.Directives[group])) {
                    VueBuilder.Directives[group] = {};
                }
                VueBuilder.Directives[group][name] = directive;
            }
        }
        if (ctor !== null) {
            VueBuilder.DirectivesConstructorsMap.set(ctor, {name, directive});
        }
    }

    /**
     * Register a property that will be accessible to all components of the app.
     */
    public static RegisterGlobalProperty(name: string, value: any): void {
        VueBuilder.GlobalProperties[name] = value;
    }

    /**
     * Get the real directive object generated from the class constructor on which decorators have been set.
     */
    public static GetDirectiveDefinition(ctor: Constructor): DirectiveDefinition {
        if (!VueBuilder.DirectivesConstructorsMap.has(ctor)) {
            throw new UsageException(`No directive definition found for ${ctor.name || '(Unnamed constructor)'}.`);
        }
        return VueBuilder.DirectivesConstructorsMap.get(ctor) as DirectiveDefinition;
    }

    /**
     * Register global options that will be merged with other options when creating any Vue app.
     */
    public static SetVueOptions(options: Partial<AppConfig>): void {
        VueBuilder.Options = VueBuilder.MergeVueOptions(VueBuilder.Options || {}, options);
    }

    /**
     * Create a new Vue instance.
     */
    public static CreateApp(group: string|string[] = VueBuilder.DEFAULT_GROUP, options: Partial<AppConfig> = {}): App<Element> {
        const app = createApp({});
        VueBuilder.ApplyToExistingApp(app, group, options);
        return app;
    }

    /**
     * Create a new Vue instance.
     */
    public static CreateAppAndMount(element: Element|string, group: string|string[] = VueBuilder.DEFAULT_GROUP, options: Partial<AppConfig> = {}): ComponentPublicInstance {
        return VueBuilder.CreateApp(group, options).mount(element);
    }

    public static ApplyToExistingApp(app: App, group: string|string[] = VueBuilder.DEFAULT_GROUP, options: Partial<AppConfig> = {}): void {
        const config = VueBuilder.MergeVueOptions({
            errorHandler: console.error,
            warnHandler: console.warn,
            globalProperties: VueBuilder.GlobalProperties,
            optionMergeStrategies: {},
            performance: false,
            compilerOptions: {
                isCustomElement: () => false,
                whitespace: 'condense',
                delimiters: ['{{', '}}'],
                comments: false
            }
        }, VueBuilder.Options, options);
        for (const key of Object.keys(config)) {
            (app.config as any)[key] = config[key];
        }
        let groups = (group === '*' ? Object.keys(VueBuilder.Components).concat(Object.keys(VueBuilder.Directives)) : ensureArray(group));
        groups = groups.filter((item, index) => {
            return groups.indexOf(item) === index;
        });
        for (const group of groups) {
            if (!isUndefined(VueBuilder.Components[group])) {
                for (const componentName of Object.keys(VueBuilder.Components[group])) {
                    app.component(componentName, VueBuilder.Components[group][componentName]);
                }
            }
            if (!isUndefined(VueBuilder.Directives[group])) {
                for (const directiveName of Object.keys(VueBuilder.Directives[group])) {
                    app.directive(directiveName, VueBuilder.Directives[group][directiveName]);
                }
            }
        }
    }

    /**
     * Merge multiple arrays of vue options together.
     */
    private static MergeVueOptions(...args: any[]): any {
        const output: any = args[0];
        for (let i = 1; i < args.length; ++i) {
            const obj = args[i];
            for (const key of Object.keys(obj)) {
                if (isFunction(output[key])) {
                    output[key] = ((_f1: Function, _f2: Function) => (...args: any[]) => _f1.apply(this, args) || _f2.apply(this, args))(output[key], obj[key]);
                } else if (isObject(obj[key])) {
                    output[key] = VueBuilder.MergeVueOptions(output[key] || {}, obj[key]);
                } else {
                    output[key] = obj[key];
                }
            }
        }
        return output;
    }
}
