import { UsageException } from "@banquette/exception/usage.exception";
import { isNonEmptyString } from "@banquette/utils-string/is-non-empty-string";
import { isFunction } from "@banquette/utils-type/is-function";
import { getOrCreateComponentMetadata } from "../utils/get-or-create-component-metadata";
import { ComponentMetadataInterface } from "./component-metadata.interface";

export interface TemplateRefDecoratorOptions {
    name: string;
    resolve: boolean;
}

export function TemplateRef(name: string, resolveComponent: boolean = false): any {
    return (prototype: any, propertyKey: string) => {
        if (!isNonEmptyString(propertyKey) || isFunction(prototype.constructor.prototype[propertyKey])) {
            throw new UsageException('You can only use @TemplateRef() on properties.');
        }
        const data: ComponentMetadataInterface = getOrCreateComponentMetadata(prototype);
        data.templateRefs[propertyKey] = {name, resolve: resolveComponent};
    };
}
