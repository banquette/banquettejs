import { UsageException } from "@banquette/exception";
import { kebabCase } from "@banquette/utils-string/case/kebab-case";
import { isNonEmptyString } from "@banquette/utils-string/is-non-empty-string";
import { isFunction } from "@banquette/utils-type/is-function";
import { isObject } from "@banquette/utils-type/is-object";
import { isString } from "@banquette/utils-type/is-string";
import { isType } from "@banquette/utils-type/is-type";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Constructor } from "@banquette/utils-type/types";
import { VUE_CLASS_COMPONENT_OPTIONS_NAME } from "../constants";
import { generateVccOpts, getDecoratorsData } from "../utils";
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
    components?: Record<string, Constructor>|Constructor[];
    directives?: Record<string, Constructor>|Constructor[];

    /**
     * Group(s) on which the component should be registered in the VueBuilder.
     */
    group?: string|string[]|null;

    /**
     * Function to call to create an instance of the component.
     * If not defined, the constructor is simply called without any parameters.
     */
    factory?: (() => any)|null;
}

/**
 * Define a class as a Vue component.
 * You must put this on every class you want to be used like a Vue component.
 * The component will automatically be registered into the VueBuilder in the specified groups.
 */
export function Component(name: string): any;
export function Component(options: ComponentDecoratorOptions): any;
export function Component(options: ComponentDecoratorOptions|string = {}): any {
    return (ctor: Constructor) => {
        const data: DecoratorsDataInterface & {component: ComponentDecoratorOptions} = getDecoratorsData(ctor.prototype) as DecoratorsDataInterface & {component: ComponentDecoratorOptions};
        if (isString(options)) {
            options = {name: options} as ComponentDecoratorOptions;
        }
        data.component = options;

        Object.defineProperty(ctor, VUE_CLASS_COMPONENT_OPTIONS_NAME, {
            enumerable: true,
            configurable: true,
            get: () => {
                const output = generateVccOpts(ctor, data);
                if (isString(data.component.template)) {
                    output.template = data.component.template;
                } else if (isObject(data.component.template) && (data.component.template as any).__esModule === true && (data.component as any).default) {
                    data.component = (data.component as any).default;
                } else if (isType<Function>(data.component, isFunction)) {
                    data.component = data.component();
                }
                if (data.component.template === false) {
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
