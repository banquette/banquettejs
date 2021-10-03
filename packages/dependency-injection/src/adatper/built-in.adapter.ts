import { BuiltInContainer } from "../built-in-container";
import { InjectableMetadataInterface } from "../injectable-metadata.interface";
import { InjectorAdapterInterface } from "../injector.interface";
import { InjectableIdentifier } from "../type/injectable-identifier.type";

/**
 * Default adapter.
 */
export class BuiltInAdapter implements InjectorAdapterInterface<BuiltInContainer> {
    /**
     * Inversify container instance.
     */
    private container: BuiltInContainer|null = null;

    /**
     * @inheritDoc
     */
    public get<T>(identifier: InjectableIdentifier): T {
        return this.getContainer().get<T>(identifier);
    }

    /**
     * @inheritDoc
     */
    public getMultiple<T>(tag: symbol|symbol[]): T[] {
        return this.getContainer().getMultiple(tag);
    }

    /**
     * @inheritDoc
     */
    public has(identifier: InjectableIdentifier): boolean {
        return this.getContainer().has(identifier);
    }

    /**
     * @inheritDoc
     */
    public getContainer(): BuiltInContainer {
        if (this.container === null) {
            this.container = new BuiltInContainer();
        }
        return this.container;
    }

    /**
     * @inheritDoc
     */
    public register(metadata: InjectableMetadataInterface): void {
        // Nothing to do for this adapter.
    }
}
