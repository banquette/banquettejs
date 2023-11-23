import {ConfigurationService} from "@banquette/config";
import {Inject, InjectLazy, InjectMultiple, Service} from "@banquette/dependency-injection";
import {UsageException} from "@banquette/exception";
import {Constructor, isConstructor, isObject, isString, isUndefined} from "@banquette/utils-type";
import {AdapterInterface} from "./adapter/adapter.interface";
import {StorageConfigurationSymbol} from "./config";
import {StorageAdapterTag} from "./constant";
import {NoAdapterAvailableException} from "./exception/no-adapter-available.exception";
import {StorageConfigurationInterface} from "./storage-configuration.interface";
import {AdapterIdentifier} from "./types";
import {LocalStorageAdapter} from "./adapter/local-storage.adapter";

@Service()
export class StorageService {
    private readonly availableAdaptersOrdered: AdapterInterface[];
    private readonly availableAdaptersAliasMap: Record<string, AdapterInterface>;
    private readonly availableAdaptersMap: Map<Constructor<AdapterInterface>, AdapterInterface>;
    private readonly defaultAdapter: AdapterInterface;

    public constructor(
        @Inject(LocalStorageAdapter) localStorageAdapter: LocalStorageAdapter[],
        @Inject(LocalStorageAdapter) cookieAdapter: LocalStorageAdapter[],
        @InjectMultiple(StorageAdapterTag) adapters: AdapterInterface[],
        @InjectLazy(() => ConfigurationService) configuration: ConfigurationService
    ) {
        this.availableAdaptersOrdered = [];
        this.availableAdaptersAliasMap = {};
        this.availableAdaptersMap = new Map<Constructor<AdapterInterface>, AdapterInterface>;
        for (const adapter of adapters) {
            if (adapter.isAvailable()) {
                this.availableAdaptersOrdered.push(adapter);
                this.availableAdaptersAliasMap[adapter.name] = adapter;
                this.availableAdaptersMap.set(adapter.constructor as Constructor<AdapterInterface>, adapter);
            }
        }
        this.availableAdaptersOrdered.sort((a: AdapterInterface, b: AdapterInterface) => {
            return b.getPriority() - a.getPriority();
        });
        this.defaultAdapter = this.resolveAdapter(configuration.get<StorageConfigurationInterface>(StorageConfigurationSymbol).defaultAdapter);
    }

    /**
     * Get a specific adapter.
     *
     * @throws UsageException
     */
    public use<T extends AdapterInterface>(adapter: AdapterIdentifier<T>): T {
        return this.resolveAdapter<T>(adapter);
    }

    /**
     * Get a reference on the adapter currently used by the storage by default.
     */
    public getDefaultAdapter(): AdapterInterface {
        return this.defaultAdapter;
    }

    /**
     * Get the value associated with a key or the default value is not found.
     */
    public get(key: string, defaultValue?: any): Promise<any> {
        return this.defaultAdapter.get(key, defaultValue);
    }

    /**
     * Set the value of a key.
     */
    public set(key: string, value: any): Promise<void> {
        return this.defaultAdapter.set(key, value);
    }

    /**
     * Remove a key.
     */
    public remove(key: string): Promise<void> {
        return this.defaultAdapter.remove(key);
    }

    /**
     * Clear the entire storage.
     */
    public clear(): Promise<void> {
        return this.defaultAdapter.clear();
    }

    /**
     * Gets how many keys are stored.
     */
    public length(): Promise<number> {
        return this.defaultAdapter.length();
    }

    /**
     * Gets the list of all keys stored.
     */
    public keys(): Promise<string[]> {
        return this.defaultAdapter.keys();
    }

    /**
     * Try to resolve the input into a the key corresponding to an adapter in the available adapters map.
     *
     * @throws UsageException
     * @throws NoAdapterAvailableException
     */
    private resolveAdapter<T extends AdapterInterface>(adapter: AdapterIdentifier<T>): T {
        if (!this.availableAdaptersOrdered.length) {
            throw new NoAdapterAvailableException();
        }
        if (isConstructor(adapter)) {
            if (this.availableAdaptersMap.has(adapter)) {
                return this.availableAdaptersMap.get(adapter) as T;
            }
            throw new UsageException(`No adapter has been found for the constructor ${adapter}. Try using a string alias instead.`);
        }
        if (isString(adapter)) {
            if (adapter === 'auto') {
                return this.availableAdaptersOrdered[0] as T;
            }
            if (!isUndefined(this.availableAdaptersAliasMap[adapter])) {
                return this.availableAdaptersAliasMap[adapter] as T;
            }
            throw new UsageException(`No adapter alias "${adapter}" has been found in the list of available adapters.`);
        }
        // Suppose the adapter is already an instance of an adapter.
        if (isObject(adapter)) {
            return adapter as T;
        }
        throw new UsageException(`Unable to resolve the adapter. Invalid input.`);
    }
}
