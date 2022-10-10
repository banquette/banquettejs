/**
 * A generic key/value pair storage you can use to store data in memory.
 */
export declare class VarHolder<K extends keyof any = any, V = any> {
    protected bag: Partial<Record<K, V>>;
    constructor(bag?: Partial<Record<K, V>>);
    /**
     * Returns the whole container.
     */
    all(): Partial<Record<K, V>>;
    /**
     * Returns all the keys registered in the container.
     */
    keys(): string[];
    /**
     * Get a value stored in the bag.
     *
     * You can give an array of keys to fetch in depth.
     * You can also get a value several levels deep using the dot notation.
     *
     * Example:
     *   - get('env')
     *   - get('http.timeout', 2000) will get the "timeout" value of the "http" key
     *   - get(['http', 'timeout'], 2000) same as above
     */
    get(key: K | K[], defaultValue?: V | null): any;
    /**
     * Set a value in the bag.
     *
     * You can give an array of keys to set a value deep in the object.
     * You can also set a value several levels deep using the dot notation.
     *
     * Example:
     *   - set('http.timeout', 2000) will set the "timeout" value of the "http" key
     *   - set(['http', 'timeout'], 2000) same as above
     */
    set(key: K | K[], value: V): void;
    /**
     * Replaces the current values by a new set.
     */
    replace(values: Partial<Record<K, V>>): void;
    /**
     * Merge input values with the ones already stored in the container.
     */
    add(values: Partial<Record<K, V>>): void;
    /**
     * Returns true if the value is defined in the container.
     */
    has(key: K | K[]): boolean;
    /**
     * Removes a value from the container.
     */
    remove(key: K): void;
    /**
     * Clear the container of all its values.
     */
    clear(): void;
    /**
     * Returns the number of values registered in the container.
     */
    count(): number;
}
