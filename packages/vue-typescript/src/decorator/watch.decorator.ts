import { UsageException } from "@banquette/exception";
import { isNonEmptyString } from "@banquette/utils-string";
import { isFunction } from "@banquette/utils-type";
import { WatchOptions } from "@vue/runtime-core";
import { getDecoratorsData } from "../utils";
import { DecoratorsDataInterface } from "./decorators-data.interface";

export type WatchFunction = () => string|string[];
export type WatchSource = string|WatchFunction|Array<string|WatchFunction>;

export interface WatchDecoratorOptions {
    target: string;
    source: WatchSource;
    options: WatchOptions;
}

/**
 * Make Vue call a method when changes are detected on a property.
 */
export function Watch(source: WatchSource, options: WatchOptions = {}): Function {
    return (prototype: any, propertyKey: string) => {
        if (!isNonEmptyString(propertyKey) || !isFunction(prototype.constructor.prototype[propertyKey])) {
            throw new UsageException('You can only use @Watch() on methods.');
        }
        const data: DecoratorsDataInterface = getDecoratorsData(prototype);
        data.watch.push({
            target: propertyKey,
            source,
            options
        });
    };
}
