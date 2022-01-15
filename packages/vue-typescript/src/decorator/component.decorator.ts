import { UsageException } from "@banquette/exception";
import { kebabCase } from "@banquette/utils-string/case/kebab-case";
import { isNonEmptyString } from "@banquette/utils-string/is-non-empty-string";
import { isFunction } from "@banquette/utils-type/is-function";
import { isObject } from "@banquette/utils-type/is-object";
import { isString } from "@banquette/utils-type/is-string";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Constructor } from "@banquette/utils-type/types";
import { Component as VueComponent } from "@vue/runtime-core";
import { Directive } from "vue";
import { VUE_CLASS_COMPONENT_OPTIONS_NAME } from "../constants";
import { generateVccOpts } from "../generate-vccopts";
import { getDecoratorsData } from "../utils/get-decorators-data";
import { VueBuilder } from "../vue-builder";
import { DecoratorsDataInterface } from "./decorators-data.interface";

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
     */
    template?: string|false;

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
     * Function to call to create an instance of the component.
     * If not defined, the constructor is simply called without any parameters.
     */
    factory?: (() => any)|null;
}

export type PrivateComponentDecoratorOptions = Omit<ComponentDecoratorOptions, 'name'> & {name: string};

/**
 * Define a class as a Vue component.
 * You must put this on every class you want to be used like a Vue component.
 * The component will automatically be registered into the VueBuilder in the specified groups.
 */
export function Component(name: string): any;
export function Component(options: ComponentDecoratorOptions): any;
export function Component(options: ComponentDecoratorOptions|string = {}): any {
    return (ctor: Constructor) => {
        const data: DecoratorsDataInterface = getDecoratorsData(ctor.prototype);
        if (isString(options)) {
            options = {name: options};
        }
        data.component = options as PrivateComponentDecoratorOptions;
        Object.defineProperty(ctor, VUE_CLASS_COMPONENT_OPTIONS_NAME, {
            enumerable: true,
            configurable: true,
            get: () => {
                const output = generateVccOpts(ctor, data);
                if (isString(data.component.template)) {
                    output.template = data.component.template;
                } else if (isObject(data.component.template) && (data.component.template as any).__esModule === true && (data.component as any).default) {
                    data.component = (data.component as any).default;
                } else if (isFunction(data.component)) {
                    data.component = data.component();
                } else if (data.component.template === false) {
                    output.render = () => '';
                }
                return output;
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
