import { isArray } from "@banquette/utils-type/is-array";
import { isString } from "@banquette/utils-type/is-string";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Constructor } from "@banquette/utils-type/types";
import { getDecoratorsData } from "../utils";
import { DecoratorsDataInterface } from "./decorators-data.interface";

export interface PresetDecoratorOptions {
    /**
     * Name of the component for the preset container.
     * If multiple components share the same name they will share the variables with the same name.
     */
    name: string;

    /**
     * Name of the prop to use to define the name of the preset when using the component.
     * If not defined, the default name is "preset".
     */
    prop?: string;

    /**
     * Css variables exposed to the preset.
     */
    cssVars?: string|string[]|Record<string, string>;
}

export type PrivatePresetDecoratorOptions = Omit<Required<PresetDecoratorOptions>, 'cssVars'> & {cssVars: Record<string, string>};

export function Preset(name: string): any;
export function Preset(options: PresetDecoratorOptions): any;
export function Preset(options: PresetDecoratorOptions|string): any {
    return (ctor: Constructor) => {
        const data: DecoratorsDataInterface = getDecoratorsData(ctor.prototype) as DecoratorsDataInterface;
        if (isString(options)) {
            options = {name: options};
        }
        if (isString(options.cssVars)) {
            options.cssVars = [options.cssVars];
        }
        if (isArray(options.cssVars)) {
            const cssVarsObj: Record<string, string> = {};
            for (const cssVar of options.cssVars) {
                cssVarsObj[cssVar] = cssVar;
            }
            options.cssVars = cssVarsObj;
        } else if (isUndefined(options.cssVars)) {
            options.cssVars = {};
        }
        options.prop = options.prop || 'preset';
        data.preset = options as PrivatePresetDecoratorOptions;
    };
}
