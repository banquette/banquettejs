import { Constructor } from "@banquette/utils-type";
import { InjectableIdentifier } from "./type/injectable-identifier.type";
import { InjectableType } from "./type/injectable.type";

export interface InjectableMetadataInterface {
    /**
     * The identifier that will be used to get the object from the container.
     */
    identifier: InjectableIdentifier;

    /**
     * Constructor of the injectable.
     */
    ctor: Constructor;

    /**
     * Define if a new instance of the object must be created each time it is injected or not.
     * If true, a unique instance will be created and returned for each use.
     */
    singleton: boolean;

    /**
     * Tags are used to group injectables.
     */
    tags: symbol[];

    /**
     * List of dependencies that must be given to the constructor when building the object.
     */
    constructorDependencies: InjectableType[];

    /**
     * List of dependencies that must be set to properties of the created object.
     */
    propertiesDependencies: Record<string, {type: InjectableType, propertyName?: string, parameterIndex?: number}>;
}
