
export interface SynchronousAdapterInterface {
    /**
     * Get the value associated with the given key synchronously.
     */
    getSync<T, D = null>(key: string, defaultValue?: D): T|D;

    /**
     * Set a value synchronously.
     */
    setSync<T>(key: string, value: any): void;

    /**
     * Remove a key from the storage synchronously.
     */
    removeSync<T>(key: string): void;

    /**
     * Clear the entire storage synchronously.
     */
    clearSync(): void;

    /**
     * Get how many keys are stored synchronously.
     */
    lengthSync(): number;

    /**
     * Get the list of all keys stored synchronously.
     */
    keysSync(): string[];
}
