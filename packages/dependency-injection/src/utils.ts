import { UsageException } from "@banquette/exception";
import { Constructor, ensureArray, isFunction, isObject, isSymbol, isUndefined } from "@banquette/utils-type";
import { InjectableMetadataInterface } from "./injectable-metadata.interface";
import { MetadataContainer } from "./metadata.container";
import { InjectableIdentifier } from "./type/injectable-identifier.type";
import { InjectableType } from "./type/injectable.type";
import { LazyInjectableIdentifier } from "./type/lazy-injectable-identifier";
import { getConstructorArgumentsTypes } from "@banquette/utils-reflection";

/**
 * Create the metadata object defining the type and dependencies of an injectable.
 */
export function buildInjectableMetadata(ctor: Constructor): InjectableMetadataInterface {
    let metadata: InjectableMetadataInterface|null = MetadataContainer.Get(ctor);
    if (metadata !== null) {
        return metadata;
    }
    metadata = {identifier: ctor, ctor, singleton: false, tags: [], constructorDependencies: [], propertiesDependencies: {}};
    MetadataContainer.Set(metadata);
    return metadata;
}

/**
 * Build the array of dependencies to inject in the constructor of an injectable.
 */
export function registerImplicitDependencies(ctor: Constructor): InjectableMetadataInterface {
    const metadata: InjectableMetadataInterface = buildInjectableMetadata(ctor);
    const parametersTypes: any[] = getConstructorArgumentsTypes(ctor);
    for (let i = 0; i < parametersTypes.length; ++i) {
        if (metadata.constructorDependencies.length <= i || isUndefined(metadata.constructorDependencies[i])) {
            metadata.constructorDependencies[i] = getInjectableType(parametersTypes[i], false);
        }
    }
    return metadata;
}

export function registerExplicitDependency(ctor: Constructor,
                                           identifier: InjectableIdentifier|LazyInjectableIdentifier|symbol|symbol[],
                                           lazy?: boolean,
                                           propertyName?: string,
                                           parameterIndex?: number): InjectableMetadataInterface {
    const metadata: InjectableMetadataInterface = buildInjectableMetadata(ctor);
    const type: InjectableType = getInjectableType(identifier, lazy);
    if (!isUndefined(propertyName)) {
        if (!isUndefined(metadata.propertiesDependencies[propertyName])) {
            throw new UsageException(`You can't inject multiple values into a property (${propertyName}).`);
        }
        metadata.propertiesDependencies[propertyName] = {type, propertyName, parameterIndex};
    } else if (!isUndefined(parameterIndex)) {
        for (let i = 0; i <= parameterIndex; ++i) {
            if (metadata.constructorDependencies.length <= i) {
                metadata.constructorDependencies[i] = undefined as any;
            }
        }
        metadata.constructorDependencies[parameterIndex] = type;
    }
    return metadata;
}

/**
 * Convert an InjectableIdentifier into an InjectableType.
 */
export function getInjectableType(identifier: InjectableIdentifier|LazyInjectableIdentifier|symbol|symbol[], lazy?: boolean): InjectableType {
    if (isUndefined(identifier)) {
        throw new UsageException('Circular dependency detected. Use the @InjectLazy decorator to workaround it.');
    }
    if (!isFunction(identifier) && !isSymbol(identifier)) {
        throw new UsageException(
            'The built-in container only support constructors as identifiers (or symbols for multi inject). ' +
            'If you need a more robust dependency injection system, consider installing "@banquette/inversify" that will ' +
            'create a bridge between Inversify and all the internal services so you can use it instead of the built-in container.'
        );
    }
    return {
        eager: lazy === false ? identifier as InjectableIdentifier : null,
        lazy: lazy === true ? identifier as LazyInjectableIdentifier : null,
        tags: isUndefined(lazy) ? ensureArray(identifier) as symbol[] : null
    };
}
