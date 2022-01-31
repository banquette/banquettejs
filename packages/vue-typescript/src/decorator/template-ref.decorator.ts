import { UsageException } from "@banquette/exception/usage.exception";
import { isNonEmptyString } from "@banquette/utils-string/is-non-empty-string";
import { isFunction } from "@banquette/utils-type/is-function";
import { getDecoratorsData } from "../utils/get-decorators-data";
import { DecoratorsDataInterface } from "./decorators-data.interface";

export function TemplateRef(name: string): any {
    return (prototype: any, propertyKey: string) => {
        if (!isNonEmptyString(propertyKey) || isFunction(prototype.constructor.prototype[propertyKey])) {
            throw new UsageException('You can only use @TemplateRef() on properties.');
        }
        const data: DecoratorsDataInterface = getDecoratorsData(prototype);
        data.templateRefs[propertyKey] = name;
    };
}
