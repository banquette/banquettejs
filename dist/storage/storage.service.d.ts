import { ConfigurationService } from "@banquette/config/config/configuration.service";
import { AdapterInterface } from "./adapter/adapter.interface";
import { AdapterIdentifier } from "./types";
import './adapter/cookies.adapter';
import './adapter/local-storage.adapter';
export declare class StorageService {
    private readonly availableAdaptersOrdered;
    private readonly availableAdaptersMap;
    private readonly defaultAdapter;
    constructor(adapters: AdapterInterface[], configuration: ConfigurationService);
    /**
     * Get a specific adapter.
     *
     * @throws UsageException
     */
    use<T extends AdapterInterface>(adapter: AdapterIdentifier<T>): T;
    /**
     * Get a reference on the adapter currently used by the storage by default.
     */
    getDefaultAdapter(): AdapterInterface;
    /**
     * Get the value associated with a key or the default value is not found.
     */
    get(key: string, defaultValue?: any): Promise<any>;
    /**
     * Set the value of a key.
     */
    set(key: string, value: any): Promise<void>;
    /**
     * Remove a key.
     */
    remove(key: string): Promise<void>;
    /**
     * Clear the entire storage.
     */
    clear(): Promise<void>;
    /**
     * Gets how many keys are stored.
     */
    length(): Promise<number>;
    /**
     * Gets the list of all keys stored.
     */
    keys(): Promise<string[]>;
    /**
     * Try to resolve the input into a the key corresponding to an adapter in the available adapters map.
     *
     * @throws UsageException
     * @throws NoAdapterAvailableException
     */
    private resolveAdapter;
}
