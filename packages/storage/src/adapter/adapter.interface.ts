
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
    get<T>(key: string, defaultValue?: any): Promise<T|null>;

    /**
     * Get the value associated with the given key synchronously.
     * All adapters may not support this.
     */
    getSync?<T>(key: string, defaultValue?: any): T|null;

    /**
     * Set the value for the given key.
     */
    set(key: string, value: any): Promise<void>;

    /**
     * Set a value synchronously.
     * All adapters may not support this.
     */
    setSync?<T>(key: string, value: any): void;

    /**
     * Remove a key from the storage.
     */
    remove(key: string): Promise<void>;

    /**
     * Remove a key from the storage synchronously.
     * All adapters may not support this.
     */
    removeSync?<T>(key: string): void;

    /**
     * Clear the entire key value store.
     */
    clear(): Promise<void>;

    /**
     * Clear the entire key value store synchronously.
     * All adapters may not support this.
     */
    clearSync?(): void;

    /**
     * Gets how many keys are stored in the storage.
     */
    length(): Promise<number>;

    /**
     * Gets how many keys are stored in the storage synchronously.
     * All adapters may not support this.
     */
    lengthSync?(): number;

    /**
     * Gets the list of all keys stored in the storage.
     */
    keys(): Promise<string[]>;

    /**
     * Gets the list of all keys stored in the storage synchronously.
     * All adapters may not support this.
     */
    keysSync?(): string[];
}

export const AdapterInterfaceSymbol = Symbol("AdapterInterface");
