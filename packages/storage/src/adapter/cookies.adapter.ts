import { ConfigurationService } from "@banquette/config/config/configuration.service";
import { InjectLazy } from "@banquette/dependency-injection/decorator/inject-lazy.decorator";
import { Service } from "@banquette/dependency-injection/decorator/service.decorator";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { StorageAdapterTag } from "../constant";
import { AbstractAdapter } from "./abstract.adapter";
import { SynchronousAdapterInterface } from "./synchronous-adapter.interface";

@Service(StorageAdapterTag)
export class CookiesAdapter extends AbstractAdapter implements SynchronousAdapterInterface {
    /**
     * Prefix to be able to differentiate between cookies managed by the storage and cookies who don't.
     */
    private prefix: string;

    public constructor(@InjectLazy(() => ConfigurationService) configuration: ConfigurationService) {
        super();
        this.prefix = configuration.get<string>('storage.cookieAdapter.prefix');
    }

    /**
     * Test if the adapter is available in the current configuration.
     */
    public isAvailable(): boolean {
        return !isUndefined(document.cookie);
    }

    /**
     * Get the priority of the adapter.
     */
    public getPriority(): number {
        return 0;
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
        const value = '; ' + document.cookie;
        const parts: string[] = value.split('; ' + this.prefix + key + '=');
        if (parts.length === 2) {
            // @ts-ignore
            return this.decode(parts.pop().split(';').shift());
        }
        const virtualValue = this.getVirtual(key);
        if (!isUndefined(virtualValue)) {
            return this.decode(virtualValue);
        }
        return !isUndefined(defaultValue) ? defaultValue : (null as any);
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
        const date = new Date();
        date.setTime(date.getTime() + (4 * 365 * 24 * 60 * 60 * 1000));
        const expires = '; expires=' + date.toUTCString();
        const encoded = this.encode(value);
        document.cookie = (this.prefix ? this.prefix : '') + key + '=' + this.encode(value)  + expires + '; path=/';
        this.setVirtual(key, encoded);
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
        document.cookie = this.prefix + key + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        this.markAsRemoved(key);
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
        const keys: string[] = this.keysSync();
        for (const key of keys) {
            this.removeSync(key);
        }
        this.notifyClear();
    }

    /**
     * Gets how many keys are stored in the storage.
     */
    public async length(): Promise<number> {
        return this.keysSync().length;
    }

    /**
     * Gets how many keys are stored in the storage synchronously.
     */
    public lengthSync(): number {
        return this.keysSync().length;
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
        const cookies = document.cookie.split(';');
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < cookies.length; i++) {
            const key = cookies[i].split('=')[0];
            if (key !== '' && this.getVirtual(key)) {
                keys.push(key);
            }
        }
        return keys;
    }
}
