import { InjectableMetadataInterface } from "./injectable-metadata.interface";
import { InjectorAdapterInterface } from "./injector.interface";
import { InjectableIdentifier } from "./type/injectable-identifier.type";
export declare class Injector {
    /**
     * The current adapter in use.
     * Set by default to the minimalist injector bundled with the package.
     */
    private static Adapter;
    /**
     * Set the container adapter to use.
     */
    static UseAdapter(adapter: InjectorAdapterInterface<unknown>): void;
    /**
     * Gets the real container behind the adapter.
     */
    static GetContainer<T>(): T;
    /**
     * Gets an element registered in the container.
     */
    static Get<T>(identifier: InjectableIdentifier<T>): T;
    /**
     * Gets any number of elements matching at least on of the tags given as input.
     */
    static GetMultiple<T>(tag: symbol | symbol[]): T[];
    /**
     * Check if an identifier is known by the container.
     */
    static Has(identifier: InjectableIdentifier): boolean;
    /**
     * Register an dependency into the container.
     */
    static Register(metadata: InjectableMetadataInterface): void;
}
