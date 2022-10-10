import { Primitive } from "@banquette/utils-type/types";
export interface VarsMapInterface {
    [key: string]: Primitive | VarsMapInterface;
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
    };
}
export declare type ThemeableMetadata = {
    componentName: string;
    prop: string;
    css: {
        vars: Record<string, string>;
        selectors: {
            static: Record<string, string>;
            dynamic: Array<{
                pattern: RegExp;
                selector: string;
            }>;
        };
    };
};
export declare function Themeable(options?: ThemeableDecoratorOptions): any;
