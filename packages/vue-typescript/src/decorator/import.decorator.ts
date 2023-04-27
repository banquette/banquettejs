import { UsageException } from "@banquette/exception";
import { isNonEmptyString } from "@banquette/utils-string";
import { isFunction, isNullOrUndefined, isUndefined, Constructor } from "@banquette/utils-type";
import { PrefixOrAlias } from "../type";
import { getOrCreateComponentMetadata } from "../utils/get-or-create-component-metadata";
import { ComponentMetadataInterface } from "./component-metadata.interface";

export interface ImportDecoratorOptions {
    /**
     * Constructor of the composable object.
     */
    composable: Constructor;

    /**
     * Define how exposed elements should be named for the template.
     * It can define `prefixes` or `aliases` depending on the **type** of input.
     *
     * It can take the following values:
     *   - `null`: the name of the property `@Import` is set on is used as prefix (default behavior).
     *
     *   - `false`: means no prefix is added, elements will have the exact same name in the template and the import.
     *
     *   - a `string`: the given string is used as prefix to everything the import exposes.
     *
     * The values above create **prefixes**, the values below create **aliases**:
     *
     *   - an `object`: a key/value pair where each key is a element exposed by the import and the
     *                  value the name if should have in the template.
     *                  Elements omitted in the object are exposed with their original name.
     *                  A `false` value will stop the element from being exposed.
     *                  This DOES NOT define prefixes, it defines the complete name of each element.
     *
     *   - a `function`: a function that is called for each item that requires an alias,
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
        const data: ComponentMetadataInterface = getOrCreateComponentMetadata(prototype);
        if (!isNonEmptyString(propertyKey) || isFunction(prototype.constructor.prototype[propertyKey])) {
            throw new UsageException('You can only use @Import() on properties.');
        }
        if (!isUndefined(data.imports[propertyKey])) {
            throw new UsageException(`You cannot define multiple @Import on the same property (${propertyKey}).`);
        }
        const options: ImportDecoratorOptions = isFunction(composableOrOptions) ? {composable: composableOrOptions as Constructor} : composableOrOptions as ImportDecoratorOptions;
        options.prefixOrAlias = !isUndefined(options.prefixOrAlias) ? options.prefixOrAlias : prefixOrAlias;
        if (isNullOrUndefined(options.prefixOrAlias)) {
            options.prefixOrAlias = (i) => propertyKey + i[0].toUpperCase() + i.substring(1);
        }
        data.imports[propertyKey] = options;
    };
}
