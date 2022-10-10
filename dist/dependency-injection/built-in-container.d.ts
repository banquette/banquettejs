import { InjectableIdentifier } from "./type/injectable-identifier.type";
/**
 * A very basic container, only meant to cover the limited needs of the tools.
 * Because it is always bundled with the package it must be as light as possible.
 */
export declare class BuiltInContainer {
    /**
     * Map of existing singleton instances.
     */
    private singletons;
    /**
     * Stack of identifiers currently on resolution
     */
    private resolutionStack;
    /**
     * List of instances that have been created in the current resolution.
     */
    private resolutionInstances;
    constructor();
    /**
     * Gets an element registered in the container.
     */
    get<T>(identifier: InjectableIdentifier): T;
    /**
     * Gets any number of elements matching at least on of the tags given as input.
     */
    getMultiple<T>(tag: symbol | symbol[]): T[];
    /**
     * Gets any number of elements matching at least on of the tags given as input.
     */
    has(identifier: InjectableIdentifier): boolean;
    /**
     * Get/create the object corresponding to an indentifier.
     */
    private resolveInjectable;
    /**
     * Resolve an injectable type into its concrete instance.
     */
    private resolveDependency;
    /**
     * Assign the dependencies injected on properties on newly created objects.
     */
    private assignResolutionInstancesPropertyDependencies;
    /**
     * Add an identifier to the resolution stack if not already in it.
     * If found, an exception is thrown.
     */
    private pushToStack;
    /**
     * Remove the last element inserted in the stack.
     */
    private popFromStack;
}
