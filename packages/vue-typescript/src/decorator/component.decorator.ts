import { UsageException } from "@banquette/exception/usage.exception";
import { kebabCase } from "@banquette/utils-string/case/kebab-case";
import { isNonEmptyString } from "@banquette/utils-string/is-non-empty-string";
import { isString } from "@banquette/utils-type/is-string";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Constructor } from "@banquette/utils-type/types";
import { Component as VueComponent } from "@vue/runtime-core";
import { Directive, EmitsOptions } from "vue";
import { VUE_CLASS_COMPONENT_OPTIONS } from "../constants";
import { generateVccOpts } from "../generate-vccopts";
import { getOrCreateComponentMetadata } from "../utils/get-or-create-component-metadata";
import { VueBuilder } from "../vue-builder";
import { ComponentMetadataInterface } from "./component-metadata.interface";

export interface ComponentDecoratorOptions {
    /**
     * Name of the component for VueJS.
     * @see https://v3.vuejs.org/guide/component-registration.html#component-names
     */
    name?: string;

    /**
     * Template string of the component.
     *
     * Or`false` to explicitly ask for the component to have no template.
     * In which case a render function returning nothing will be added.
     *
     * If the string a the exact value "inherit", the template of the parent component will be used instead.
     */
    template?: string|'inherit'|false;

    /**
     * Components / directives dependencies.
     */
    components?: Record<string, VueComponent>|VueComponent[];
    directives?: Record<string, Constructor<Directive>>|Constructor<Directive>[];

    /**
     * Group(s) on which the component should be registered in the VueBuilder.
     * The registration is skipped if `null`.
     */
    group?: string|string[]|null;

    /**
     * Define if external attributes that don't resolve to props should be forwarded to the root element of the component.
     * Default: true.
     */
    inheritAttrs?: boolean;

    /**
     * Function to call to create an instance of the component.
     * If not defined, the constructor is simply called without any parameters.
     */
    factory?: (() => any)|null;

    /**
     * The "emits" option as expected by Vue.
     */
    emits?: EmitsOptions;
}

export type ComponentMetadata = Omit<ComponentDecoratorOptions, 'name'> & {name: string};

/**
 * Define a class as a Vue component.
 * You must put this on every class you want to be used like a Vue component.
 * The component will automatically be registered into the VueBuilder in the specified groups.
 */
export function Component(name: string): any;
export function Component(options: ComponentDecoratorOptions): any;
export function Component(options: ComponentDecoratorOptions|string = {}): any {
    return (ctor: Constructor) => {
        let vccOpts: any = null;
        const data: ComponentMetadataInterface = getOrCreateComponentMetadata(ctor.prototype);
        if (isString(options)) {
            options = {name: options};
        }
        data.component = options as ComponentMetadata;
        Object.defineProperty(ctor, VUE_CLASS_COMPONENT_OPTIONS, {
            enumerable: true,
            configurable: true,
            get: () => {
                if (vccOpts === null) {
                    vccOpts = generateVccOpts(ctor, data);
                }
                return vccOpts;
            }
        });
        if (isUndefined(options.name)) {
            if (!isNonEmptyString(ctor.name)) {
                throw new UsageException(
                    `Unable get the component name. Please set the "name" option in the "@Component" decorator ` +
                    `or ensure that constructors names are kept when you build your project for production.`
                );
            }
            options.name = kebabCase(ctor.name) as string;
        }
        if (options.group !== null) {
            VueBuilder.RegisterComponent(options.name, ctor, options.group);
        }
    };
}
