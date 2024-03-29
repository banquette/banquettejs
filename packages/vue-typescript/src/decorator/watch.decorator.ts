import { isUndefined } from "@banquette/utils-type";
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
    Sync = 1,

    /**
     * Invoke the callback when the "beforeMount" hook is fired.
     */
    BeforeMount = 2,

    /**
     * Invoke the callback when the "mounted" hook is fired.
     */
    Mounted = 4,

    /**
     * Wait the next tick to invoke the callback, this ensures the component is totally initialized and rendered.
     */
    NextTick = 8,

    /**
     * Invoke the callback when the "serverPrefetch" (SSR) hook is fired.
     */
    SsrPrefetch = 16
}

export interface WatchDecoratorOptions {
    target: string;
    source: WatchSource;
    options: WatchOptions;
}

export type PrivateWatchOptions = Omit<WatchOptions, 'immediate'> & {immediate: ImmediateStrategy|false};
export type WatchMetadata = Omit<WatchDecoratorOptions, 'options'> & {options: PrivateWatchOptions};

/**
 * Make Vue call a method when changes are detected on a property.
 */
export function Watch(source: WatchSource, options: WatchOptions = {}): Function {
    return (prototype: any, propertyKey: string) => {
        const data: ComponentMetadataInterface = getOrCreateComponentMetadata(prototype);
        if (isUndefined(options.immediate)) {
            options.immediate = ImmediateStrategy.Mounted;
        } else if (options.immediate === true) {
            options.immediate = ImmediateStrategy.Sync;
        }
        data.watch.push({
            target: propertyKey,
            source,
            options: options as PrivateWatchOptions
        });
    };
}
