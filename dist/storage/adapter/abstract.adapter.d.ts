import { UnsubscribeFunction } from "@banquette/event/type";
import { StorageClearEvent } from "../event/storage-clear.event";
import { StorageKeyChangeEvent } from "../event/storage-key-change.event";
import { AdapterInterface } from "./adapter.interface";
export declare abstract class AbstractAdapter implements AdapterInterface {
    /**
     * Test if the adapter is available in the current configuration.
     */
    abstract isAvailable(): boolean;
    /**
     * Get the priority of the adapter.
     */
    abstract getPriority(): number;
    /**
     * Get the value associated with the given key.
     */
    abstract get<T, D = null>(key: string, defaultValue?: D): Promise<T | D>;
    /**
     * Set the value for the given key.
     */
    abstract set(key: string, value: any): Promise<void>;
    /**
     * Remove any value associated with this key.
     */
    abstract remove(key: string): Promise<void>;
    /**
     * Clear the entire key value store.
     */
    abstract clear(): Promise<void>;
    /**
     * Gets how many keys are stored in the storage.
     */
    abstract length(): Promise<number>;
    /**
     * Gets the list of all keys stored in the storage.
     */
    abstract keys(): Promise<string[]>;
    /**
     * So the storage can handle asynchronous tasks synchronously.
     */
    private virtualValues;
    /**
     * On demand dispatcher to only dispatch if there is a subscriber.
     */
    private _eventDispatcher;
    private get eventDispatcher();
    /**
     * Be notified when anything changes in the storage.
     */
    onChange(callback: (event: StorageKeyChangeEvent | StorageClearEvent) => void): UnsubscribeFunction;
    /**
     * Encode the value into a string holding the original type.
     */
    protected encode(value: any): string;
    /**
     * Decode a value previously encoded using encode().
     */
    protected decode(value: string | null): any;
    /**
     * Try to get a value from the virtual values object.
     */
    protected getVirtual(key: string): any;
    /**
     * Set a value from the virtual values object.
     */
    protected setVirtual(key: string, value: string): void;
    /**
     * Mark a key as removed until the next js cycle so if a something try the use the key
     * in the interval it will fail to get the removed value.
     */
    protected markAsRemoved(key: string): void;
    /**
     * Notify the outside world that a key has changed in the storage.
     */
    protected notifyKeyChange(key: string, newValue: any, oldValue: any): void;
    /**
     * Notify the outside world that the storage has been cleared.
     */
    protected notifyClear(): void;
}
