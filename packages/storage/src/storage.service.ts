import { Injector, UsageException } from "@banquette/core";
import { isConstructor, isString, isSymbol, isUndefined } from "@banquette/utils";
import { inject, injectable, LazyServiceIdentifer, multiInject } from "inversify";
import { SharedConfiguration, SharedConfigurationSymbol } from "@banquette/core";
import { AdapterInterface, AdapterInterfaceSymbol } from "./adapter/adapter.interface";
import './adapter/cookies.adapter';
import './adapter/local-storage.adapter';
import { StorageConfigurationSymbol } from "./config";
import { NoAdapterAvailableException } from "./exception/no-adapter-available.exception";
import { StorageConfigurationInterface } from "./storage-configuration.interface";
import { Adapter } from "./types";

@injectable()
export class StorageService {
    private readonly availableAdaptersOrdered: AdapterInterface[];
    private readonly availableAdaptersMap: Record<string, AdapterInterface>;
    private defaultAdapter: AdapterInterface;

    public constructor(@multiInject(AdapterInterfaceSymbol) adapters: AdapterInterface[],
                       @inject(new LazyServiceIdentifer(() => SharedConfigurationSymbol)) configuration: SharedConfiguration) {
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
        this.defaultAdapter = this.resolveAdapter(configuration.getConfig<StorageConfigurationInterface>(StorageConfigurationSymbol).defaultAdapter);
    }

    /**
     * Get a specific adapter.
     *
     * @throws UsageException
     */
    public use<T extends AdapterInterface>(adapter: Adapter): T {
        return this.resolveAdapter<T>(adapter);
    }

    /**
     * Get a reference on the adapter currently used by the storage by default.
     */
    public getDefaultAdapter(): AdapterInterface {
        return this.defaultAdapter;
    }

    /**
     * Get the value associated with the given key.
     */
    public get(key: string): Promise<any> {
        return this.defaultAdapter.get(key);
    }

    /**
     * Set the value for the given key.
     */
    public set(key: string, value: any): Promise<void> {
        return this.defaultAdapter.set(key, value);
    }

    /**
     * Remove any value associated with this key.
     */
    public remove(key: string): Promise<void> {
        return this.defaultAdapter.remove(key);
    }

    /**
     * Clear the entire key value store.
     */
    public clear(): Promise<void> {
        return this.defaultAdapter.clear();
    }

    /**
     * Gets how many keys are stored in the storage.
     */
    public length(): Promise<number> {
        return this.defaultAdapter.length();
    }

    /**
     * Gets the list of all keys stored in the storage.
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
    private resolveAdapter<T extends AdapterInterface>(adapter: Adapter): T {
        let adapterStr: string|null = null;
        if (isString(adapter) || isUndefined(adapter)) {
            if (!this.availableAdaptersOrdered.length) {
                throw new NoAdapterAvailableException();
            }
            // Only 'auto' is valid string value.
            return this.availableAdaptersOrdered[0] as T;
        }
        if (isSymbol(adapter)) {
            adapter = Injector.Get<AdapterInterface>(adapter);
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
export const StorageServiceSymbol = Symbol("StorageService");
Injector.RegisterService(StorageServiceSymbol, StorageService);
