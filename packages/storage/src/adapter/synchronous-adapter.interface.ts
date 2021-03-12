
export interface SynchronousAdapterInterface {
    /**
     * Get the value associated with the given key synchronously.
     * All adapters may not support this.
     */
    getSync<T>(key: string, defaultValue?: any): T|null;

    /**
     * Set a value synchronously.
     * All adapters may not support this.
     */
    setSync<T>(key: string, value: any): void;

    /**
     * Remove a key from the storage synchronously.
     * All adapters may not support this.
     */
    removeSync<T>(key: string): void;

    /**
     * Clear the entire key value store synchronously.
     * All adapters may not support this.
     */
    clearSync(): void;

    /**
     * Gets how many keys are stored in the storage synchronously.
     * All adapters may not support this.
     */
    lengthSync(): number;

    /**
     * Gets the list of all keys stored in the storage synchronously.
     * All adapters may not support this.
     */
    keysSync(): string[];
}
