import { EventArg } from "@banquette/event/event-arg";
/**
 * Event emitted when a value changes in a storage.
 *
 * `newValue` should be `undefined` when the key is removed.
 * `oldValue` should be `undefined` when the key is new.
 */
export declare class StorageKeyChangeEvent extends EventArg {
    readonly key: string;
    readonly newValue: any;
    readonly oldValue: any;
    constructor(key: string, newValue: any, oldValue: any);
}
