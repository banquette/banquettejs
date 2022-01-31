import { UsageException } from "@banquette/exception/usage.exception";
import { trim } from "@banquette/utils-string/format/trim";
import { isNonEmptyString } from "@banquette/utils-string/is-non-empty-string";
import { isFunction } from "@banquette/utils-type/is-function";
import { isObject } from "@banquette/utils-type/is-object";
import { isType } from "@banquette/utils-type/is-type";
import { getDecoratorsData } from "../utils/get-decorators-data";
import { DecoratorsDataInterface } from "./decorators-data.interface";

export interface ThemeVarDecoratorOptions {
    name: string;
    defaultValue?: any;
    validate?: (value: any) => any;
}

/**
 * Make a css variable from the theme accessible from the component instance.
 */
export function ThemeVar(options: ThemeVarDecoratorOptions): any;
export function ThemeVar(name: string, defaultValue?: any): any;
export function ThemeVar(nameOrOptions: ThemeVarDecoratorOptions|string, defaultValue?: any): any {
    return (prototype: any, propertyKey: string) => {
        if (!isNonEmptyString(propertyKey) || isFunction(prototype.constructor.prototype[propertyKey])) {
            throw new UsageException('You can only use @ThemeVar() on properties.');
        }
        if (!isType<ThemeVarDecoratorOptions>(nameOrOptions, isObject)) {
            nameOrOptions = {name: nameOrOptions, defaultValue};
        }
        nameOrOptions.name = trim(nameOrOptions.name);
        const data: DecoratorsDataInterface = getDecoratorsData(prototype);
        data.themeVars[propertyKey] = nameOrOptions;
    };
}