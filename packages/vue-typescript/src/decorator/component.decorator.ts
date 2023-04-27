import { isString, isUndefined, Constructor } from "@banquette/utils-type";
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
export function Component(name?: string): any;
export function Component(options: ComponentDecoratorOptions): any;
export function Component(options?: ComponentDecoratorOptions|string): any {
    return (ctor: Constructor) => {
        let vccOpts: any = null;
        const data: ComponentMetadataInterface = getOrCreateComponentMetadata(ctor.prototype);
        if (isString(options)) {
            options = {name: options};
        } else {
            options = options || {};
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
        if (!isUndefined(options.name)) {
            VueBuilder.RegisterComponent(options.name, ctor, options.group || VueBuilder.DEFAULT_GROUP);
        }
    };
}
