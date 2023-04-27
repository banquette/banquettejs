import { UsageException } from "@banquette/exception";
import { isNonEmptyString } from "@banquette/utils-string";
import { isFunction } from "@banquette/utils-type";
import { getOrCreateComponentMetadata } from "../utils/get-or-create-component-metadata";
import { ComponentMetadataInterface } from "./component-metadata.interface";

/**
 * Mark a method as the `render` method.
 */
export function Render(): Function {
    return (prototype: any, propertyKey: string) => {
        const data: ComponentMetadataInterface = getOrCreateComponentMetadata(prototype);
        if (!isNonEmptyString(propertyKey) || !isFunction(prototype.constructor.prototype[propertyKey])) {
            throw new UsageException('You can only use @Render() on methods.');
        }
        if (data.renderMethod) {
            throw new UsageException('You can only define one render method.');
        }
        data.renderMethod = propertyKey;
    };
}
