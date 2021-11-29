import { UsageException } from "@banquette/exception";
import { isNonEmptyString } from "@banquette/utils-string/is-non-empty-string";
import { isFunction } from "@banquette/utils-type/is-function";
import { getDecoratorsData } from "../utils";
import { DecoratorsDataInterface } from "./decorators-data.interface";

export interface ProvideDecoratorOptions {
    /**
     * The name child components will have to use to inject the value.
     */
    provideAs: string;

    /**
     * If `true` the value will not be writeable by child components.
     */
    readonly: boolean;
}

/**
 * Provide a property to child components.
 *
 * @param provideAs If set to `null`, the value is provided with the same name as the property the decorator has been put on.
 *                  If set to a `string`, the value is provided using it as name.
 * @param readonly  If `true` the value will not be writeable by child components.
 */
export function Provide(provideAs: string|null = null, readonly: boolean = true): Function {
    return (prototype: any, propertyKey: string) => {
        const data: DecoratorsDataInterface = getDecoratorsData(prototype);
        if (!isNonEmptyString(propertyKey) || isFunction(prototype.constructor.prototype[propertyKey])) {
            throw new UsageException('You can only use @Provide() on properties.');
        }
        data.provided[propertyKey] = {
            provideAs: provideAs || propertyKey,
            readonly
        };
    };
}
