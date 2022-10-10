import { InjectableMetadataInterface } from "@banquette/dependency-injection/injectable-metadata.interface";
import { InjectorAdapterInterface } from "@banquette/dependency-injection/injector.interface";
import { InjectableIdentifier } from "@banquette/dependency-injection/type/injectable-identifier.type";
import { Container } from "inversify";
export declare class InversifyAdapter implements InjectorAdapterInterface<Container> {
    /**
     * Inversify container instance.
     */
    private container;
    constructor(container?: Container);
    /**
     * @inheritDoc
     */
    getContainer(): Container;
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
    register(metadata: InjectableMetadataInterface): void;
    private applyInjectable;
}
