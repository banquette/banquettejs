import { UsageException } from "@banquette/exception";
import { isNonEmptyString } from "@banquette/utils-string";
import { isFunction } from "@banquette/utils-type";
import { getOrCreateComponentMetadata } from "../utils/get-or-create-component-metadata";
import { ComponentMetadataInterface } from "./component-metadata.interface";

export interface InjectProvidedDecoratorOptions {
    /**
     * The name of the value to provide.
     */
    target: string;

    /**
     * The default value to use if none is found in parent components.
     */
    defaultValue: any;
}

/**
 * Inject a value provided by a parent component.
 *
 * @param target       name of the value to inject
 * @param defaultValue default value if none is found in parent components
 */
export function InjectProvided(target: string, defaultValue?: any): Function {
    return (prototype: any, propertyKey: string) => {
        const data: ComponentMetadataInterface = getOrCreateComponentMetadata(prototype);
        if (!isNonEmptyString(propertyKey) || isFunction(prototype.constructor.prototype[propertyKey])) {
            throw new UsageException('You can only use @InjectProvided() on properties.');
        }
        data.injected[propertyKey] = {target, defaultValue};
    };
}
