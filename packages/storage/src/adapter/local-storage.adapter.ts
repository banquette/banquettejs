import { Injector } from "@banquette/core";
import { isFunction, isObject } from "@banquette/utils";
import { injectable } from "inversify";
import { AbstractAdapter } from "./abstract.adapter";
import { AdapterInterfaceSymbol } from "./adapter.interface";
import { SynchronousAdapterInterface } from "./synchronous-adapter.interface";

@injectable()
export class LocalStorageAdapter extends AbstractAdapter implements SynchronousAdapterInterface {
    /**
     * Test if the adapter is available in the current configuration.
     */
    public isAvailable(): boolean {
        return isObject(window.localStorage) && isFunction(window.localStorage.getItem);
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
    public async get<T>(key: string, defaultValue: any = null): Promise<T|null> {
        return this.getSync(key, defaultValue);
    }

    /**
     * Get the value associated with the given key synchronously.
     */
    public getSync<T>(key: string, defaultValue: any = null): T|null {
        const value: string|null = window.localStorage.getItem(key);
        return value !== null ? this.decode(value) : defaultValue;
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
        window.localStorage.setItem(key, this.encode(value));
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
        window.localStorage.removeItem(key);
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
        window.localStorage.clear();
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
        return window.localStorage.length;
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
        const keys: string[] = [];
        for (let i = 0, c = localStorage.length; i < c; ++i) {
            keys.push(localStorage.key(i) as string);
        }
        return keys;
    }
}
Injector.RegisterService(AdapterInterfaceSymbol, LocalStorageAdapter);
