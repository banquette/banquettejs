import { UsageException } from "@banquette/exception/usage.exception";
import { getObjectKeys } from "@banquette/utils-object/get-object-keys";
import { ensureArray } from "@banquette/utils-type/ensure-array";
import { isObject } from "@banquette/utils-type/is-object";
import { isString } from "@banquette/utils-type/is-string";
import { isUndefined } from "@banquette/utils-type/is-undefined";

/**
 * A generic key/value pair storage you can use to store data in memory.
 */
export class VarHolder<K extends keyof any = any, V = any> {
    protected bag: Partial<Record<K, V>>;

    public constructor(bag?: Partial<Record<K, V>>) {
        if (!isUndefined(bag)) {
            this.bag = Object.assign({}, bag);
        } else {
            this.bag = {};
        }
    }

    /**
     * Returns the whole container.
     */
    public all() {
        return Object.assign({}, this.bag);
    }

    /**
     * Returns all the keys registered in the container.
     */
    public keys() {
        return Object.keys(this.bag);
    }

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
    public get(key: K|K[], defaultValue: V|null = null): any {
        const keys = isString(key) ? key.split('.') : ensureArray(key);
        let bag: any = this.bag;

        for (let i = 0; i < keys.length; ++i) {
            if (isUndefined(bag[keys[i]]) || (!isObject(bag[keys[i]]) && i < keys.length - 1)) {
                return defaultValue;
            }
            bag = bag[keys[i]];
        }
        return bag;
    }

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
    public set(key: K|K[], value: V): void {
        const keys = isString(key) ? key.split('.') : ensureArray(key);
        let bag: any = this.bag;

        for (let i = 0; i < keys.length - 1; ++i) {
            if (isUndefined(bag[keys[i]])) {
                bag[keys[i]] = {};
            }
            if (!isObject(bag[keys[i]])) {
                throw new UsageException('The key "' + keys[i] + '" is already used by a non object value.');
            }
            bag = bag[keys[i]];
        }
        bag[keys[keys.length - 1]] = value;
    }

    /**
     * Replaces the current values by a new set.
     */
    public replace(values: Partial<Record<K, V>>) {
        this.bag = values;
    }

    /**
     * Merge input values with the ones already stored in the container.
     */
    public add(values: Partial<Record<K, V>>) {
        for (const key of getObjectKeys(values)) {
            this.bag[key] = values[key];
        }
    }

    /**
     * Returns true if the value is defined in the container.
     */
    public has(key: K|K[]) {
        // We can't do:
        //   `this.get(key, undefined)`
        // because doing this will set the default value to `null` (the default value of the "defaultValue" parameter).
        //
        // So to not lose the ability to have the default value to null by default,
        // the trick is to get the value once:
        const v = this.get(key);

        // If the value is null, it may not exist in the bag.
        if (v === null) {
            // But the value set by the user could be null, so do another get to be sure
            return this.get(key, '_' as any) === null; // If the result is still null, the key was effectively set to null by the user.
        }
        // Otherwise the key exist.
        return true;
    }

    /**
     * Removes a value from the container.
     */
    public remove(key: K) {
        delete(this.bag[key]);
    }

    /**
     * Clear the container of all its values.
     */
    public clear(): void {
        this.bag = {};
    }

    /**
     * Returns the number of values registered in the container.
     */
    public count(): number {
        return Object.keys(this.bag).length;
    }
}
