import { UsageException } from "@banquette/exception";
import { trim, isNonEmptyString } from "@banquette/utils-string";
import { isFunction, isObject, isType } from "@banquette/utils-type";
import { getOrCreateComponentMetadata } from "../utils/get-or-create-component-metadata";
import { ComponentMetadataInterface } from "./component-metadata.interface";

export interface ThemeVarDecoratorOptions {
    name: string;
    defaultValue?: any;
    transform?: (value: any) => any;
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
        const data: ComponentMetadataInterface = getOrCreateComponentMetadata(prototype);
        data.themeVars[propertyKey] = nameOrOptions;
    };
}
