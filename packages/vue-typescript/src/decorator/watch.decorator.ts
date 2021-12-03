import { WatchOptions as VueWatchOptions } from "@vue/runtime-core";
import { getDecoratorsData } from "../utils";
import { DecoratorsDataInterface } from "./decorators-data.interface";

export type WatchFunction = () => string|string[];
export type WatchSource = string|string[]|WatchFunction;

export type WatchOptions = VueWatchOptions & {synchronous?: boolean};

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
        const data: DecoratorsDataInterface = getDecoratorsData(prototype);
        data.watch.push({
            target: propertyKey,
            source,
            options
        });
    };
}
