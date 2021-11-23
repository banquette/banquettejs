import {
    InjectableIdentifier,
    InjectableMetadataInterface,
    InjectableType,
    InjectorAdapterInterface
} from "@banquette/dependency-injection";
import { ensureArray } from "@banquette/utils-type/ensure-array";
import { isObject } from "@banquette/utils-type/is-object";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Container, inject, injectable, interfaces, LazyServiceIdentifer, multiInject } from "inversify";

const PARAM_TYPES = "inversify:paramtypes";

export class InversifyAdapter implements InjectorAdapterInterface<Container> {
    /**
     * Inversify container instance.
     */
    private container!: Container;

    public constructor(container?: Container) {
        if (isUndefined(container)) {
            this.container = new Container();
        }
    }

    /**
     * @inheritDoc
     */
    public getContainer(): Container {
        return this.container;
    }

    /**
     * @inheritDoc
     */
    public get<T>(identifier: InjectableIdentifier): T {
        return this.container.get<T>(identifier);
    }

    /**
     * @inheritDoc
     */
    public getMultiple<T>(tag: symbol|symbol[]): T[] {
        const output: T[] = [];
        const added: any[] = [];
        const tags: symbol[] = ensureArray(tag);
        for (const tag of tags) {
            const results: any[] = this.container.getAll<T>(tag);
            for (const result of results) {
                const proto = isObject(result) ? Object.getPrototypeOf(result) : null;
                if (!proto || added.indexOf(proto.constructor) < 0) {
                    output.push(result);
                    added.push(proto.constructor);
                }
            }
        }
        return output;
    }

    /**
     * @inheritDoc
     */
    public has(identifier: InjectableIdentifier): boolean {
        return this.container.isBound(identifier);
    }

    /**
     * @inheritDoc
     */
    public register(metadata: InjectableMetadataInterface): void {
        const identifiers: Array<InjectableIdentifier|symbol> = [metadata.identifier as any].concat(metadata.tags);
        for (const identifier of identifiers) {
            let binding: interfaces.BindingInWhenOnSyntax<any> = this.container.bind(identifier).to(metadata.ctor);
            if (metadata.singleton) {
                binding.inSingletonScope();
            } else {
                binding.inTransientScope();
            }
        }
        for (let i = 0; i < metadata.constructorDependencies.length; ++i) {
            const dependency: InjectableType = metadata.constructorDependencies[i];
            if (dependency.eager !== null) {
                inject(dependency.eager)(metadata.ctor, undefined as any, i);
            } else if (dependency.lazy !== null) {
                inject(new LazyServiceIdentifer(dependency.lazy as any))(metadata.ctor, undefined as any, i);
            } else if (dependency.tags !== null) {
                multiInject(dependency.tags[0])(metadata.ctor, undefined as any, i);
            }
        }
        for (const propertyName of Object.keys(metadata.propertiesDependencies)) {
            const type: InjectableType = metadata.propertiesDependencies[propertyName].type;
            let decorator: any = null;
            if (type.eager !== null) {
                decorator = inject(type.eager);
            } else {
                decorator = inject(new LazyServiceIdentifer(type.lazy as any));
            }
            decorator(metadata.ctor, propertyName, metadata.propertiesDependencies[propertyName].parameterIndex);
        }
        this.applyInjectable(metadata);
    }

    private applyInjectable(metadata: InjectableMetadataInterface): void {
        let currentCtor: any = metadata.ctor;
        const objProto = Object.getPrototypeOf(Object);
        do {
            if (!(Reflect as any).hasOwnMetadata(PARAM_TYPES, currentCtor)) {
                injectable()(currentCtor);
            }
        } while ((currentCtor = Object.getPrototypeOf(currentCtor)) !== objProto);
    }
}
