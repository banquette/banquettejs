import { flattenObject } from "@banquette/utils-object";
import { Constructor, Primitive } from "@banquette/utils-type";
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
        selectors: {
            static: Record<string, string>,
            dynamic: Array<{pattern: RegExp, selector: string}>
        };
    }
};

export function Themeable(options: ThemeableDecoratorOptions = {}): any {
    return (ctor: Constructor) => {
        const data: ComponentMetadataInterface = getOrCreateComponentMetadata(ctor.prototype) as ComponentMetadataInterface;
        const flattenedSelectors = flattenObject(options.css?.selectors || {});
        data.themeable = {
            componentName: data.component.name,
            prop: options.prop || 'variant',
            css: {
                vars: flattenObject(options.css?.vars || {}),
                selectors: {static: {}, dynamic: []}
            }
        };
        for (const key of Object.keys(flattenedSelectors)) {
            if (key.indexOf('(') > -1) {
                data.themeable.css.selectors.dynamic.push({
                    pattern: new RegExp(key, 'g'),
                    selector: flattenedSelectors[key]
                })
            } else {
                data.themeable.css.selectors.static[key] = flattenedSelectors[key];
            }
        }
    };
}
