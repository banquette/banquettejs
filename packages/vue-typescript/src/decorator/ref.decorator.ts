import { UsageException } from "@banquette/exception";
import { isNonEmptyString } from "@banquette/utils-string";
import { isFunction } from "@banquette/utils-type";
import { getOrCreateComponentMetadata } from "../utils/get-or-create-component-metadata";
import { ComponentMetadataInterface } from "./component-metadata.interface";

/**
 * Make a property reactive and visible to VueJS.
 */
export function Ref(): any {
    return (prototype: any, propertyKey: string) => {
        if (!isNonEmptyString(propertyKey) || isFunction(prototype.constructor.prototype[propertyKey])) {
            throw new UsageException('You can only use @Ref() on properties.');
        }
        const data: ComponentMetadataInterface = getOrCreateComponentMetadata(prototype);
        data.reactive.push(propertyKey);
    };
}
