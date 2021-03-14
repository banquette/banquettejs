import { ensureNumber, isBoolean, isNumber, isObject, isUndefined } from "@banquette/utils";
import { injectable } from "inversify";
import { AdapterInterface } from "./adapter.interface";

const UndefinedSymbol = Symbol('undefined');
enum Types {
    Json,
    Number,
    Boolean,
    String,
    Null,
    Undefined
}

@injectable()
export abstract class AbstractAdapter implements AdapterInterface {
    /**
     * Test if the adapter is available in the current configuration.
     */
    public abstract isAvailable(): boolean;
    /**
     * Get the priority of the adapter.
     */
    public abstract getPriority(): number;

    /**
     * Get the value associated with the given key.
     */
    public abstract get<T>(key: string, defaultValue?: any): Promise<T|null>;

    /**
     * Set the value for the given key.
     */
    public abstract set(key: string, value: any): Promise<void>;

    /**
     * Remove any value associated with this key.
     */
    public abstract remove(key: string): Promise<void>;

    /**
     * Clear the entire key value store.
     */
    public abstract clear(): Promise<void>;

    /**
     * Gets how many keys are stored in the storage.
     */
    public abstract length(): Promise<number>;

    /**
     * Gets the list of all keys stored in the storage.
     */
    public abstract keys(): Promise<string[]>;

    /**
     * So the storage can handle asynchronous tasks synchronously.
     */
    private virtualValues: Record<string, string|symbol> = {};

    /**
     * Encode the value into a string holding the original type.
     */
    protected encode(value: any): string {
        if (isObject(value)) {
            return Types.Json + ':' + JSON.stringify(value);
        }
        if (isNumber(value)) {
            return Types.Number + ':' + value;
        }
        if (isBoolean(value)) {
            return Types.Boolean + ':' + (value ? 1 : 0);
        }
        if (value === null) {
            return Types.Null + ':';
        }
        if (isUndefined(value)) {
            return Types.Undefined + ':';
        }
        return Types.String + ':' + value;
    }

    /**
     * Decode a value previously encoded using encode().
     */
    protected decode(value: string|null): any {
        if (value === null) {
            return null;
        }
        if (value.length < 2 || value[1] !== ':') {
            // Maybe not stored using the storage service?
            return value;
        }
        const type: number = parseInt(value.substring(0, 1), 10);
        value = value.substring(2);
        switch (type) {
            case Types.String: return value;
            case Types.Number: return ensureNumber(value);
            case Types.Boolean: return value === '1';
            case Types.Json: return JSON.parse(value);
            case Types.Null: return null;
        }
    }

    /**
     * Try to get a value from the virtual values object.
     */
    protected getVirtual(key: string): any {
        key = key.trim();
        return this.virtualValues[key] === UndefinedSymbol ? undefined : this.virtualValues[key];
    }

    /**
     * Set a value from the virtual values object.
     */
    protected setVirtual(key: string, value: string): void {
        key = key.trim();
        this.virtualValues[key] = value;
        window.setTimeout(() => {
            delete this.virtualValues[key];
        });
    }

    /**
     * Mark a key as removed until the next js cycle so is any call trying the use the key
     * in the interval time will fail to get the removed value.
     */
    protected markAsRemoved(key: string): void {
        key = key.trim();
        this.virtualValues[key] = UndefinedSymbol;
        window.setTimeout(() => {
            if (this.virtualValues[key] === UndefinedSymbol) {
                delete this.virtualValues[key];
            }
        });
    }
}
