import { ConfigurationService } from "@banquette/config";
import { InjectLazy, InjectMultiple, Service, Injector } from "@banquette/dependency-injection";
import { UsageException } from "@banquette/exception";
import { isConstructor, isString, isSymbol, isUndefined } from "@banquette/utils-type";
import { AdapterInterface } from "./adapter/adapter.interface";
import './adapter/cookies.adapter';
import './adapter/local-storage.adapter';
import { StorageConfigurationSymbol } from "./config";
import { StorageAdapterTag } from "./constant";
import { NoAdapterAvailableException } from "./exception/no-adapter-available.exception";
import { StorageConfigurationInterface } from "./storage-configuration.interface";
import { AdapterIdentifier } from "./types";

@Service()
export class StorageService {
    private readonly availableAdaptersOrdered: AdapterInterface[];
    private readonly availableAdaptersMap: Record<string, AdapterInterface>;
    private readonly defaultAdapter: AdapterInterface;

    public constructor(@InjectMultiple(StorageAdapterTag) adapters: AdapterInterface[],
                       @InjectLazy(() => ConfigurationService) configuration: ConfigurationService) {
        this.availableAdaptersOrdered = [];
        this.availableAdaptersMap = {};
        for (const adapter of adapters) {
            if (adapter.isAvailable()) {
                this.availableAdaptersOrdered.push(adapter);
                this.availableAdaptersMap[adapter.constructor.name] = adapter;
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
        let adapterStr: string|null = null;
        if (isString(adapter) || isUndefined(adapter)) {
            if (!this.availableAdaptersOrdered.length) {
                throw new NoAdapterAvailableException();
            }
            // Only 'auto' is a valid string value
            // so we can take the first one without checking the value of the string.
            return this.availableAdaptersOrdered[0] as T;
        }
        if (isSymbol(adapter)) {
            return Injector.Get(adapter) as T;
        }
        if (isConstructor(adapter) && isString(adapter.name)) {
            adapterStr = adapter.name;
        }
        if (adapterStr === null) {
            throw new UsageException(`Failed to resolve adapter ${String(adapter)}.`);
        }
        if (isUndefined(this.availableAdaptersMap[adapterStr])) {
            throw new UsageException(`No adapter ${adapterStr} has been found in the list of available adapters.`);
        }
        return this.availableAdaptersMap[adapterStr] as T;
    }
}
