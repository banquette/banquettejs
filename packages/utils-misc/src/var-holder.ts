import { UsageException } from "@banquette/exception";
import { ensureArray, isObject, isString, isUndefined } from "@banquette/utils-type";

/**
 * A generic key/value pair storage you can use to store data in memory.
 */
export class VarHolder {
    protected bag: Record<any, any>;

    public constructor() {
        this.bag = {};
    }

    /**
     * Returns the parameters.
     *
     * @return array An array of parameters
     */
    public all() {
        return this.bag;
    }

    /**
     * Returns the parameter keys.
     *
     * @return array An array of parameter keys
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
    public get(key: string|string[], defaultValue: any = null): any {
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
    public set(key: string|string[], value: any): void {
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
     * Replaces the current parameters by a new set.
     *
     * @param parameters object An array of parameters
     */
    public replace(parameters: Record<any, any>) {
        this.bag = parameters;
    }

    /**
     * Adds parameters.
     *
     * @param parameters object An array of parameters
     */
    public add(parameters: Record<any, any>) {
        for (const name in parameters) {
            if (parameters.hasOwnProperty(name)) {
                this.bag[name] = parameters[name];
            }
        }
    }

    /**
     * Returns true if the parameter is defined.
     *
     * @param key string|string[] The key
     *
     * @return boolean true if the parameter exists, false otherwise
     */
    public has(key: string|string[]) {
        // We can't do:
        //   `this.get(key, undefined)`
        // because doing this will set the default value to `null` (the default value of the parameter).
        //
        // And I don't want to lose the ability to have the default value to null by default.
        // So the trick is to get the value once:
        const v = this.get(key);

        // If the value is null, it may not exist in the bag.
        if (v === null) {
            // But the value set by the user could be null, so do another get to be sure
            return this.get(key, '_') === null; // If the result is still null, the key was effectively set to null by the user.
        }
        // Otherwise the key exist.
        return true;
    }

    /**
     * Removes a parameter.
     *
     * @param key string The key
     */
    public remove(key: string) {
        delete(this.bag[key]);
    }

    /**
     * Returns the number of parameters.
     *
     * @return number
     */
    public count(): number {
        return Object.keys(this.bag).length;
    }
}
