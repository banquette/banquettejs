import { AbstractAdapter } from "./abstract.adapter";
import { SynchronousAdapterInterface } from "./synchronous-adapter.interface";
export declare class MemoryAdapter extends AbstractAdapter implements SynchronousAdapterInterface {
    private store;
    /**
     * Test if the adapter is available in the current configuration.
     */
    isAvailable(): boolean;
    /**
     * Get the priority of the adapter.
     */
    getPriority(): number;
    /**
     * Get the value associated with the given key.
     */
    get<T, D = null>(key: string, defaultValue?: D): Promise<T | D>;
    /**
     * Get the value associated with the given key synchronously.
     */
    getSync<T, D = null>(key: string, defaultValue?: D): T | D;
    /**
     * Set the value for the given key.
     */
    set(key: string, value: any): Promise<void>;
    /**
     * Set the value for the given key synchronously.
     */
    setSync(key: string, value: any): void;
    /**
     * Remove any value associated with this key.
     */
    remove(key: string): Promise<void>;
    /**
     * Remove any value associated with this key synchronously.
     */
    removeSync(key: string): void;
    /**
     * Clear the entire key value store.
     */
    clear(): Promise<void>;
    /**
     * Clear the entire key value store synchronously.
     */
    clearSync(): void;
    /**
     * Gets how many keys are stored in the storage.
     */
    length(): Promise<number>;
    /**
     * Gets how many keys are stored in the storage synchronously.
     */
    lengthSync(): number;
    /**
     * Gets the list of all keys stored in the storage.
     */
    keys(): Promise<string[]>;
    /**
     * Gets the list of all keys stored in the storage synchronously.
     */
    keysSync(): string[];
}
