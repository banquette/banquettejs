import { InjectableMetadataInterface } from './injectable-metadata.interface';
import { InjectableIdentifier } from './type/injectable-identifier.type';

/**
 * Adapter interface doing the bridge between the userland and the concrete implementation in use.
 */
export interface InjectorAdapterInterface<C> {
    /**
     * Gets the real container behind the adapter.
     */
    getContainer(): C;

    /**
     * Gets an element registered in the container.
     */
    get<T>(identifier: InjectableIdentifier, ...args: any[]): T;

    /**
     * Gets any number of elements matching at least on of the tags given as input.
     */
    getMultiple<T>(tag: symbol | symbol[]): T[];

    /**
     * Check if an identifier is known by the container.
     */
    has(identifier: InjectableIdentifier): boolean;

    /**
     * Register a dependency into the container.
     */
    register(metadata: InjectableMetadataInterface): void;
}
