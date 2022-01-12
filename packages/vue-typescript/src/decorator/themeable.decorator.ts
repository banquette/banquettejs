import { isArray } from "@banquette/utils-type/is-array";
import { isString } from "@banquette/utils-type/is-string";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Constructor } from "@banquette/utils-type/types";
import { getDecoratorsData } from "../utils";
import { DecoratorsDataInterface } from "./decorators-data.interface";

export interface ThemeableDecoratorOptions {
    /**
     * Name of the prop to use to define the variants to use when using the component.
     * If not defined, the default name is "variant".
     */
    prop?: string;

    /**
     * Css variables exposed to the themes.
     */
    vars?: string|string[]|Record<string, string>;
}

export type PrivateThemeableDecoratorOptions = Omit<Required<ThemeableDecoratorOptions>, 'vars'> & {vars: Record<string, string>};

export function Themeable(options: ThemeableDecoratorOptions = {}): any {
    return (ctor: Constructor) => {
        const data: DecoratorsDataInterface = getDecoratorsData(ctor.prototype) as DecoratorsDataInterface;
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
        options.prop = options.prop || 'variant';
        data.themeable = options as PrivateThemeableDecoratorOptions;
    };
}
