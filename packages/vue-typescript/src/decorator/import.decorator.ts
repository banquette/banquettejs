import { UsageException } from "@banquette/exception";
import { isNonEmptyString } from "@banquette/utils-string";
import { Constructor, isFunction, isNullOrUndefined, isUndefined } from "@banquette/utils-type";
import { PrefixOrAlias } from "../type";
import { getDecoratorsData } from "../utils";
import { DecoratorsDataInterface } from "./decorators-data.interface";

export interface ImportDecoratorOptions {
    /**
     * Constructor of the composable object.
     */
    composable: Constructor;

    /**
     * Define how exposed elements should be named for the template.
     * If can define `prefixes` or `aliases` depending on the **type** of input.
     *
     * It can take the following values:
     *   - `null`: the name of the property `@Import` is set on is used as prefix (default behavior).
     *
     *   - `false`: means no prefix is added, elements will have the exact same name in the template and the import.
     *
     *   - a `string`: the given string is used as prefix (followed by ":") to everything the import exposes.
     *
     * The values above create **prefixes**, the values below create **aliases**:
     *
     *   - an `object`: a key/value pair where each key is a element exposed by the import and the
     *                  value the name if should have in the template.
     *                  Elements omitted in the object are not exposed anymore.
     *                  This DOES NOT define prefixes, it defines the complete name of each element.
     *
     *   - a `function`: a function that is called for each item the requires an alias,
     *                   expecting in return the full name the element should have in the template,
     *                   or `false` to not expose the element.
     */
    prefixOrAlias?: PrefixOrAlias;
}

export function Import(composable?: Constructor): any;
export function Import(composable?: Constructor, prefixOrAlias?: PrefixOrAlias): any;
export function Import(options?: ImportDecoratorOptions): any;
export function Import(composableOrOptions?: Constructor|ImportDecoratorOptions, prefixOrAlias?: PrefixOrAlias): any {
    return (prototype: any, propertyKey: string) => {
        const data: DecoratorsDataInterface = getDecoratorsData(prototype);
        if (!isNonEmptyString(propertyKey) || isFunction(prototype.constructor.prototype[propertyKey])) {
            throw new UsageException('You can only use @Import() on properties.');
        }
        if (!isUndefined(data.imports[propertyKey])) {
            throw new UsageException(`You cannot define multiple @Import on the same property (${propertyKey}).`);
        }
        const options: ImportDecoratorOptions = isFunction(composableOrOptions) ? {composable: composableOrOptions as Constructor} : composableOrOptions as ImportDecoratorOptions;
        options.prefixOrAlias = !isUndefined(options.prefixOrAlias) ? options.prefixOrAlias : prefixOrAlias;
        if (isNullOrUndefined(options.prefixOrAlias)) {
            options.prefixOrAlias = propertyKey;
        }
        data.imports[propertyKey] = options;
    };
}
