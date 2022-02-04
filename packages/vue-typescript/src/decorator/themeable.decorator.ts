import { flatten } from "@banquette/utils-object/flatten";
import { isArray } from "@banquette/utils-type/is-array";
import { isString } from "@banquette/utils-type/is-string";
import { isUndefined } from "@banquette/utils-type/is-undefined";
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

    /**
     * Css variables exposed to the themes.
     */
    vars?: string|string[]|VarsMapInterface;
}

export type PrivateThemeableDecoratorOptions = Omit<Required<ThemeableDecoratorOptions>, 'vars'> & {vars: Record<string, string>};

export function Themeable(options: ThemeableDecoratorOptions = {}): any {
    return (ctor: Constructor) => {
        const data: ComponentMetadataInterface = getOrCreateComponentMetadata(ctor.prototype) as ComponentMetadataInterface;
        if (isString(options.vars)) {
            options.vars = [options.vars];
        }
        if (isArray(options.vars)) {
            const varsObj: Record<string, string> = {};
            for (const cssVar of options.vars) {
                varsObj[cssVar] = cssVar;
            }
            options.vars = varsObj;
        } else if (isUndefined(options.vars)) {
            options.vars = {};
        }
        options.vars = flatten(options.vars);
        options.prop = options.prop || 'variant';
        data.themeable = options as PrivateThemeableDecoratorOptions;
    };
}
