import { UsageException } from "@banquette/exception/usage.exception";
import { isArray } from "@banquette/utils-type/is-array";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { InjectableMetadataInterface } from "./injectable-metadata.interface";
import { MetadataContainer } from "./metadata.container";
import { InjectableIdentifier } from "./type/injectable-identifier.type";
import { InjectableType } from "./type/injectable.type";
import { LazyInjectableIdentifier } from "./type/lazy-injectable-identifier";

/**
 * A very basic container, only meant to cover the limited needs of the tools.
 * Because it is always bundled with the package it must be as light as possible.
 */
export class BuiltInContainer {
    /**
     * Map of existing singleton instances.
     */
    private singletons: WeakMap<InjectableIdentifier, any>;

    /**
     * Stack of identifiers currently on resolution
     */
    private resolutionStack: InjectableIdentifier[];

    /**
     * List of instances that have been created in the current resolution.
     */
    private resolutionInstances: any[];

    public constructor() {
        this.singletons = new WeakMap<InjectableIdentifier, any>();
        this.resolutionInstances = [];
        this.resolutionStack = [];
    }

    /**
     * Gets an element registered in the container.
     */
    public get<T>(identifier: InjectableIdentifier): T {
        const instance: any = this.resolveInjectable(identifier);
        this.assignResolutionInstancesPropertyDependencies();
        return instance;
    }

    /**
     * Gets any number of elements matching at least on of the tags given as input.
     */
    public getMultiple<T>(tag: symbol|symbol[]): T[] {
        let output: T[] = [];
        let lastTagsVersion = 0;
        // Create a proxy to account for changes
        // because a tag can be injected before every dependency have time to register.
        return new Proxy(output, {
            get: (target: T[], name: string|symbol) => {
                if (lastTagsVersion === MetadataContainer.TagsVersion) {
                    return !isUndefined(name) ? target[name as any] : target;
                }
                lastTagsVersion = MetadataContainer.TagsVersion;
                target.splice(0, target.length);
                const metadata: InjectableMetadataInterface[] = MetadataContainer.GetForTag(tag);
                for (const item of metadata) {
                    const resolvedItems = this.resolveInjectable(item.identifier);
                    if (isArray(resolvedItems)) {
                        for (const resolvedItem of resolvedItems) {
                            target.push(resolvedItem);
                        }
                    } else {
                        target.push(resolvedItems);
                    }
                    this.assignResolutionInstancesPropertyDependencies();
                }
                return !isUndefined(name) ? target[name as any] : target;
            }
        });
    }

    /**
     * Gets any number of elements matching at least on of the tags given as input.
     */
    public has(identifier: InjectableIdentifier): boolean {
        return MetadataContainer.Get(identifier) !== null;
    }

    /**
     * Get/create the object corresponding to an indentifier.
     */
    private resolveInjectable(identifier: InjectableIdentifier): any {
        const metadata: InjectableMetadataInterface = MetadataContainer.GetOrFail(identifier);
        if (metadata.singleton && this.singletons.has(identifier)) {
            return this.singletons.get(identifier);
        }
        let instance: any;
        try {
            this.pushToStack(identifier);
            const constructorArgs: any[] = [];
            for (const dependency of metadata.constructorDependencies) {
                constructorArgs.push(this.resolveDependency(dependency));
            }
            instance = new metadata.ctor(...constructorArgs);
            this.resolutionInstances.push(instance);
        } finally {
            this.popFromStack();
        }
        if (metadata.singleton) {
            this.singletons.set(identifier, instance);
        }
        return instance;
    }

    /**
     * Resolve an injectable type into its concrete instance.
     */
    private resolveDependency(type: InjectableType): any {
        if (type.tags !== null) {
            return this.getMultiple(type.tags);
        }
        const identifier: InjectableIdentifier = type.eager !== null ? type.eager : (type.lazy as LazyInjectableIdentifier)();
        return this.resolveInjectable(identifier);
    }

    /**
     * Assign the dependencies injected on properties on newly created objects.
     */
    private assignResolutionInstancesPropertyDependencies(): void {
        const instances: any[] = [...this.resolutionInstances];
        this.resolutionInstances = [];
        for (const inst of instances) {
            const metadata: InjectableMetadataInterface = MetadataContainer.GetOrFail(inst.constructor);
            for (const prop of Object.keys(metadata.propertiesDependencies)) {
                inst[prop] = this.resolveDependency(metadata.propertiesDependencies[prop].type);
            }
        }
        if (this.resolutionInstances.length > 0) {
            this.assignResolutionInstancesPropertyDependencies();
        }
    }

    /**
     * Add an identifier to the resolution stack if not already in it.
     * If found, an exception is thrown.
     */
    private pushToStack(identifier: InjectableIdentifier): void {
        if (this.resolutionStack.indexOf(identifier) >= 0) {
            const stackNames = this.resolutionStack.concat([identifier]).reduce((acc: string[], cur: InjectableIdentifier) => {
                acc.push(cur.name);
                return acc;
            }, []).join(' --> ');
            this.resolutionStack = [];
            throw new UsageException(`Circular dependency found: ${stackNames}`);
        }
        this.resolutionStack.push(identifier);
    }

    /**
     * Remove the last element inserted in the stack.
     */
    private popFromStack(): void {
        this.resolutionStack.pop();
    }
}
