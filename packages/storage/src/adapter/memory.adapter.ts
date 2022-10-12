import { Service } from "@banquette/dependency-injection/decorator/service.decorator";
import { isServer } from "@banquette/utils-misc/is-server";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { StorageAdapterTag } from "../constant";
import { AbstractAdapter } from "./abstract.adapter";
import { SynchronousAdapterInterface } from "./synchronous-adapter.interface";

@Service(StorageAdapterTag)
export class MemoryAdapter extends AbstractAdapter implements SynchronousAdapterInterface {
    private store: Record<string, string> = {};

    /**
     * Test if the adapter is available in the current configuration.
     */
    public isAvailable(): boolean {
        return isServer();
    }

    /**
     * Get the priority of the adapter.
     */
    public getPriority(): number {
        return 1;
    }

    /**
     * Get the value associated with the given key.
     */
    public async get<T, D = null>(key: string, defaultValue?: D): Promise<T|D> {
        return this.getSync(key, defaultValue);
    }

    /**
     * Get the value associated with the given key synchronously.
     */
    public getSync<T, D = null>(key: string, defaultValue?: D): T|D {
        const value: string|null = !isUndefined(this.store[key]) ? this.store[key] : null;
        return value !== null ? this.decode(value) : (!isUndefined(defaultValue) ? defaultValue : (null as any));
    }

    /**
     * Set the value for the given key.
     */
    public async set(key: string, value: any): Promise<void> {
        this.setSync(key, value);
    }

    /**
     * Set the value for the given key synchronously.
     */
    public setSync(key: string, value: any): void {
        const oldValue = this.getSync(key);
        this.store[key] = this.encode(value);
        this.notifyKeyChange(key, value, oldValue);
    }

    /**
     * Remove any value associated with this key.
     */
    public async remove(key: string): Promise<void> {
        this.removeSync(key);
    }

    /**
     * Remove any value associated with this key synchronously.
     */
    public removeSync(key: string): void {
        const oldValue = this.getSync(key);
        if (!isUndefined(this.store[key])) {
            delete this.store[key];
        }
        this.notifyKeyChange(key, undefined, oldValue);
    }

    /**
     * Clear the entire key value store.
     */
    public async clear(): Promise<void> {
        this.clearSync();
    }

    /**
     * Clear the entire key value store synchronously.
     */
    public clearSync(): void {
        this.store = {};
        this.notifyClear();
    }

    /**
     * Gets how many keys are stored in the storage.
     */
    public async length(): Promise<number> {
        return this.lengthSync();
    }

    /**
     * Gets how many keys are stored in the storage synchronously.
     */
    public lengthSync(): number {
        return Object.keys(this.store).length;
    }

    /**
     * Gets the list of all keys stored in the storage.
     */
    public async keys(): Promise<string[]> {
        return this.keysSync();
    }

    /**
     * Gets the list of all keys stored in the storage synchronously.
     */
    public keysSync(): string[] {
        return Object.keys(this.store);
    }
}
