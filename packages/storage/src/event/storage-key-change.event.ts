import { EventArg } from "@banquette/event";

/**
 * Event emitted when a value changes in a storage.
 *
 * `newValue` should be `undefined` when the key is removed.
 * `oldValue` should be `undefined` when the key is new.
 */
export class StorageKeyChangeEvent extends EventArg {
    public constructor(public readonly key: string,
                       public readonly newValue: any,
                       public readonly oldValue: any) {
        super();
    }
}
