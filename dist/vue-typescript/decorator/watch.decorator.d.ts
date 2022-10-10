import { WatchOptions as VueWatchOptions } from "@vue/runtime-core";
export declare type WatchFunction = () => string | string[];
export declare type WatchSource = string | string[] | WatchFunction;
export declare type WatchOptions = Omit<VueWatchOptions, 'immediate'> & {
    immediate?: boolean | ImmediateStrategy;
};
export declare enum ImmediateStrategy {
    /**
     * The default behavior of VueJS, the callback is invoked immediately when the watcher is created.
     */
    Sync = "sync",
    /**
     * Invoke the callback when the "beforeMount" hook is fired.
     */
    BeforeMount = "beforeMount",
    /**
     * Invoke the callback when the "mounted" hook is fired.
     */
    Mounted = "mounted",
    /**
     * Wait the next tick to invoke the callback, this ensures the component is totally initialized and rendered.
     */
    NextTick = "nextTick"
}
export interface WatchDecoratorOptions {
    target: string;
    source: WatchSource;
    options: WatchOptions;
}
export declare type PrivateWatchOptions = Omit<WatchOptions, 'immediate'> & {
    immediate: ImmediateStrategy | false;
};
export declare type WatchMetadata = Omit<WatchDecoratorOptions, 'options'> & {
    options: PrivateWatchOptions;
};
/**
 * Make Vue call a method when changes are detected on a property.
 */
export declare function Watch(source: WatchSource, options?: WatchOptions): Function;
