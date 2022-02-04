import { WatchOptions as VueWatchOptions } from "@vue/runtime-core";
import { getOrCreateComponentMetadata } from "../utils/get-or-create-component-metadata";
import { ComponentMetadataInterface } from "./component-metadata.interface";

export type WatchFunction = () => string|string[];
export type WatchSource = string|string[]|WatchFunction;

export type WatchOptions = Omit<VueWatchOptions, 'immediate'> & {immediate?: boolean|ImmediateStrategy};

export enum ImmediateStrategy {
    /**
     * The default behavior of VueJS, the callback is invoked immediately when the watcher is created.
     */
    Sync = 'sync',

    /**
     * Invoke the callback when the "beforeMount" hook is fired.
     */
    BeforeMount = 'beforeMount',

    /**
     * Invoke the callback when the "mounted" hook is fired.
     */
    Mounted = 'mounted',

    /**
     * Wait the next tick to invoke the callback, this ensures the component is totally initialized and rendered.
     */
    NextTick = 'nextTick'
}

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
        const data: ComponentMetadataInterface = getOrCreateComponentMetadata(prototype);
        data.watch.push({
            target: propertyKey,
            source,
            options
        });
    };
}
