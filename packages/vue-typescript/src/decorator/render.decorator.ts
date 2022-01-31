import { UsageException } from "@banquette/exception/usage.exception";
import { isNonEmptyString } from "@banquette/utils-string/is-non-empty-string";
import { isFunction } from "@banquette/utils-type/is-function";
import { getDecoratorsData } from "../utils/get-decorators-data";
import { DecoratorsDataInterface } from "./decorators-data.interface";

/**
 * Mark a method as the `render` method.
 */
export function Render(): Function {
    return (prototype: any, propertyKey: string) => {
        const data: DecoratorsDataInterface = getDecoratorsData(prototype);
        if (!isNonEmptyString(propertyKey) || !isFunction(prototype.constructor.prototype[propertyKey])) {
            throw new UsageException('You can only use @Render() on methods.');
        }
        if (data.renderMethod) {
            throw new UsageException('You can only define one render method.');
        }
        data.renderMethod = propertyKey;
    };
}
