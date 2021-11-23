import { UsageException } from "@banquette/exception";
import { isNonEmptyString } from "@banquette/utils-string/is-non-empty-string";
import { getDecoratorsData } from "../utils";
import { DecoratorsDataInterface } from "./decorators-data.interface";

/**
 * Expose a property or method to the template.
 *
 * @param exposeAs If set to `null`, the ref is exposed to the template with the same name as the property or method.
 *                 If set to a `string`, the ref is exposed using it as name.
 */
export function Expose(exposeAs: string|null = null): Function {
    return (prototype: any, propertyKey: string) => {
        if (!isNonEmptyString(propertyKey)) {
            throw new UsageException('You can only use @Expose() on properties or methods.');
        }
        const data: DecoratorsDataInterface = getDecoratorsData(prototype);
        data.exposed[propertyKey] = exposeAs !== null ? exposeAs : propertyKey;
    };
}
