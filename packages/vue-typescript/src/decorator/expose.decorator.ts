import { UsageException } from "@banquette/exception";
import { getObjectValue } from "@banquette/utils-object";
import { isNonEmptyString } from "@banquette/utils-string";
import { isObject } from "@banquette/utils-type";
import { getOrCreateComponentMetadata } from "../utils/get-or-create-component-metadata";
import { ComponentMetadataInterface } from "./component-metadata.interface";

export interface ExposeDecoratorOptions {
    /**
     * If set to `null`, the ref is exposed to the template with the same name as the property or method.
     * If set to a `string`, the ref is exposed using it as name.
     */
    exposeAs?: string;

    /**
     * If set to `false`, the typescript instance of the component will receive the value "unprofixied".
     * Meaning the proxies set by Vue to track changes will be removed.
     * That's mainly a performance optimization, if you don't need changes made on the object to be tracked by Vue.
     */
    observe?: boolean;
}

export type ExposeMetadata = {exposeAs: string, observe: boolean};

/**
 * Expose a property or method to the template.
 */
export function Expose(options: ExposeDecoratorOptions): Function;
export function Expose(exposeAs?: string|null, observe?: boolean): Function;
export function Expose(optionsOrExposeAs: ExposeDecoratorOptions|string|null = null, observe: boolean = true): Function {
    return (prototype: any, propertyKey: string) => {
        if (!isNonEmptyString(propertyKey)) {
            throw new UsageException('You can only use @Expose() on properties or methods.');
        }
        const data: ComponentMetadataInterface = getOrCreateComponentMetadata(prototype);
        const isObj = optionsOrExposeAs !== null && isObject(optionsOrExposeAs);
        data.exposed[propertyKey] = {
            exposeAs: isObj ? getObjectValue(optionsOrExposeAs, 'exposeAs', propertyKey) : (optionsOrExposeAs || propertyKey),
            observe: isObj ? getObjectValue(optionsOrExposeAs, 'observe', observe) : observe
        };
    };
}
