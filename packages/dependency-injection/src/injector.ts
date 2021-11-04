import { BuiltInAdapter } from "./adatper/built-in.adapter";
import { InjectableMetadataInterface } from "./injectable-metadata.interface";
import { InjectorAdapterInterface } from "./injector.interface";
import { MetadataContainer } from "./metadata.container";
import { InjectableIdentifier } from "./type/injectable-identifier.type";

export class Injector {
    /**
     * The current adapter in use.
     * Set by default to the minimalist injector bundled with the package.
     */
    private static Adapter: InjectorAdapterInterface<any>;

    /**
     * Set the container adapter to use.
     */
    public static UseAdapter(adapter: InjectorAdapterInterface<unknown>): void {
        Injector.Adapter = adapter;
        const metadata = MetadataContainer.GetKnownMetadata();
        for (const item of metadata) {
            Injector.Adapter.register(item);
        }
    }

    /**
     * Gets the real container behind the adapter.
     */
    public static GetContainer<T>(): T {
        return Injector.Adapter.getContainer();
    }

    /**
     * Gets an element registered in the container.
     */
    public static Get<T>(identifier: InjectableIdentifier<T>): T {
        return Injector.Adapter.get(identifier);
    }

    /**
     * Gets any number of elements matching at least on of the tags given as input.
     */
    public static GetMultiple<T>(tag: symbol|symbol[]): T[] {
        return Injector.Adapter.getMultiple(tag);
    }

    /**
     * Check if an identifier is known by the container.
     */
    public static Has(identifier: InjectableIdentifier): boolean {
        return Injector.Adapter.has(identifier);
    }

    /**
     * Register an dependency into the container.
     */
    public static Register(metadata: InjectableMetadataInterface): void {
        Injector.Adapter.register(metadata);
    }
}

// Ensure there is always at least the minimalist builtin adapter available
// with no chance to override another adapter that could have been set before.
Injector.UseAdapter(new BuiltInAdapter());
