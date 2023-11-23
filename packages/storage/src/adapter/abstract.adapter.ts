import { EventDispatcher, UnsubscribeFunction } from "@banquette/event";
import { ensureNumber, isBoolean, isNumber, isObject, isUndefined } from "@banquette/utils-type";
import { StorageEvents } from "../constant";
import { StorageClearEvent } from "../event/storage-clear.event";
import { StorageKeyChangeEvent } from "../event/storage-key-change.event";
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

export abstract class AbstractAdapter implements AdapterInterface {
    abstract readonly name: string;

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
    public abstract get<T, D = null>(key: string, defaultValue?: D): Promise<T|D>;

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
     * On demand dispatcher to only dispatch if there is a subscriber.
     */
    private _eventDispatcher: EventDispatcher|null = null;
    private get eventDispatcher(): EventDispatcher {
        if (this._eventDispatcher === null) {
            this._eventDispatcher = new EventDispatcher();
        }
        return this._eventDispatcher;
    }

    /**
     * Be notified when anything changes in the storage.
     */
    public onChange(callback: (event: StorageKeyChangeEvent|StorageClearEvent) => void): UnsubscribeFunction {
        return this.eventDispatcher.subscribe(StorageEvents.Change, callback);
    }

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
        setTimeout(() => {
            delete this.virtualValues[key];
        });
    }

    /**
     * Mark a key as removed until the next js cycle so if a something try the use the key
     * in the interval it will fail to get the removed value.
     */
    protected markAsRemoved(key: string): void {
        key = key.trim();
        this.virtualValues[key] = UndefinedSymbol;
        setTimeout(() => {
            if (this.virtualValues[key] === UndefinedSymbol) {
                delete this.virtualValues[key];
            }
        });
    }

    /**
     * Notify the outside world that a key has changed in the storage.
     */
    protected notifyKeyChange(key: string, newValue: any, oldValue: any): void {
        if (this._eventDispatcher && newValue !== oldValue) {
            this._eventDispatcher.dispatch(StorageEvents.Change, new StorageKeyChangeEvent(key, newValue, oldValue));
        }
    }

    /**
     * Notify the outside world that the storage has been cleared.
     */
    protected notifyClear(): void {
        if (this._eventDispatcher) {
            this._eventDispatcher.dispatch(StorageEvents.Change, new StorageClearEvent());
        }
    }
}
