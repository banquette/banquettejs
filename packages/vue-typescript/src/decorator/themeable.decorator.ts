import { flattenObject } from "@banquette/utils-object/flatten-object";
import { ensureObject } from "@banquette/utils-type/ensure-object";
import { Constructor, Primitive } from "@banquette/utils-type/types";
import { getOrCreateComponentMetadata } from "../utils/get-or-create-component-metadata";
import { ComponentMetadataInterface } from "./component-metadata.interface";

export interface VarsMapInterface {
    [key: string]: Primitive|VarsMapInterface;
}

export interface ThemeableDecoratorOptions {
    /**
     * Name of the prop to use to define the variants to use when using the component.
     * If not defined, the default name is "variant".
     */
    prop?: string;

    css?: {
        /**
         * Css variables exposed to the theme.
         */
        vars?: VarsMapInterface;

        /**
         * Selectors exposed to the theme.
         */
        selectors?: VarsMapInterface;
    }
}

export type ThemeableMetadata = {
    componentName: string;
    prop: string;
    css: {
        vars: Record<string, string>;
        selectors: Record<string, string>;
    }
};

export function Themeable(options: ThemeableDecoratorOptions = {}): any {
    return (ctor: Constructor) => {
        const data: ComponentMetadataInterface = getOrCreateComponentMetadata(ctor.prototype) as ComponentMetadataInterface;
        options.css = ensureObject(options.css) as {};
        options.css.vars = flattenObject(options.css.vars || {});
        options.css.selectors = flattenObject(options.css.selectors || {});
        options.prop = options.prop || 'variant';
        data.themeable = Object.assign(options, {componentName: data.component.name, activeVariants: []}) as ThemeableMetadata;
    };
}
