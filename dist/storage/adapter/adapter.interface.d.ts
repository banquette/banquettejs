import { UnsubscribeFunction } from "@banquette/event/type";
import { StorageClearEvent } from "../event/storage-clear.event";
import { StorageKeyChangeEvent } from "../event/storage-key-change.event";
export interface AdapterInterface {
    /**
     * Test if the adapter is available in the current configuration.
     */
    isAvailable(): boolean;
    /**
     * Get the priority of the adapter.
     * The higher the number the upper in the list the service will be.
     */
    getPriority(): number;
    /**
     * Get the value associated with the given key.
     */
    get<T, D = null>(key: string, defaultValue?: D): Promise<T | D>;
    /**
     * Set the value for the given key.
     */
    set(key: string, value: any): Promise<void>;
    /**
     * Remove a key from the storage.
     */
    remove(key: string): Promise<void>;
    /**
     * Clear the entire key value store.
     */
    clear(): Promise<void>;
    /**
     * Gets how many keys are stored in the storage.
     */
    length(): Promise<number>;
    /**
     * Gets the list of all keys stored in the storage.
     */
    keys(): Promise<string[]>;
    /**
     * Subscribe to change notifications on the storage.
     */
    onChange(callback: (event: StorageKeyChangeEvent | StorageClearEvent) => void): UnsubscribeFunction;
}
