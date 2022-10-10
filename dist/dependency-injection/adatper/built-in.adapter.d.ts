import { BuiltInContainer } from "../built-in-container";
import { InjectableMetadataInterface } from "../injectable-metadata.interface";
import { InjectorAdapterInterface } from "../injector.interface";
import { InjectableIdentifier } from "../type/injectable-identifier.type";
/**
 * Default adapter.
 */
export declare class BuiltInAdapter implements InjectorAdapterInterface<BuiltInContainer> {
    /**
     * Inversify container instance.
     */
    private container;
    /**
     * @inheritDoc
     */
    get<T>(identifier: InjectableIdentifier): T;
    /**
     * @inheritDoc
     */
    getMultiple<T>(tag: symbol | symbol[]): T[];
    /**
     * @inheritDoc
     */
    has(identifier: InjectableIdentifier): boolean;
    /**
     * @inheritDoc
     */
    getContainer(): BuiltInContainer;
    /**
     * @inheritDoc
     */
    register(metadata: InjectableMetadataInterface): void;
}
