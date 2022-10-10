/*!
 * Banquette DependencyInjection v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { UsageException } from '@banquette/exception/usage.exception';
import { getConstructorArgumentsTypes } from '@banquette/utils-reflection/get-constructor-arguments-types';
import { ensureArray } from '@banquette/utils-type/ensure-array';
import { isFunction } from '@banquette/utils-type/is-function';
import { isSymbol } from '@banquette/utils-type/is-symbol';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { MetadataContainer } from './metadata.container.js';

/**
 * Create the metadata object defining the type and dependencies of an injectable.
 */
function buildInjectableMetadata(ctor) {
    var metadata = MetadataContainer.Get(ctor);
    if (metadata !== null) {
        return metadata;
    }
    metadata = { identifier: ctor, ctor: ctor, singleton: false, tags: [], constructorDependencies: [], propertiesDependencies: {} };
    MetadataContainer.Set(metadata);
    return metadata;
}
/**
 * Build the array of dependencies to inject in the constructor of an injectable.
 */
function registerImplicitDependencies(ctor) {
    var metadata = buildInjectableMetadata(ctor);
    var parametersTypes = getConstructorArgumentsTypes(ctor);
    for (var i = 0; i < parametersTypes.length; ++i) {
        if (metadata.constructorDependencies.length <= i || isUndefined(metadata.constructorDependencies[i])) {
            metadata.constructorDependencies[i] = getInjectableType(parametersTypes[i], false);
        }
    }
    return metadata;
}
function registerExplicitDependency(ctor, identifier, lazy, propertyName, parameterIndex) {
    var metadata = buildInjectableMetadata(ctor);
    var type = getInjectableType(identifier, lazy);
    if (!isUndefined(propertyName)) {
        if (!isUndefined(metadata.propertiesDependencies[propertyName])) {
            throw new UsageException("You can't inject multiple values into a property (".concat(propertyName, ")."));
        }
        metadata.propertiesDependencies[propertyName] = { type: type, propertyName: propertyName, parameterIndex: parameterIndex };
    }
    else if (!isUndefined(parameterIndex)) {
        for (var i = 0; i <= parameterIndex; ++i) {
            if (metadata.constructorDependencies.length <= i) {
                metadata.constructorDependencies[i] = undefined;
            }
        }
        metadata.constructorDependencies[parameterIndex] = type;
    }
    return metadata;
}
/**
 * Convert an InjectableIdentifier into an InjectableType.
 */
function getInjectableType(identifier, lazy) {
    if (isUndefined(identifier)) {
        throw new UsageException('Circular dependency detected. Use the @InjectLazy decorator to workaround it.');
    }
    if (!isFunction(identifier) && !isSymbol(identifier)) {
        throw new UsageException('The built-in container only support constructors as identifiers (or symbols for multi inject). ' +
            'If you need a more robust dependency injection system, consider installing "@banquette/inversify" that will ' +
            'create a bridge between Inversify and all the internal services so you can use it instead of the built-in container.');
    }
    return {
        eager: lazy === false ? identifier : null,
        lazy: lazy === true ? identifier : null,
        tags: isUndefined(lazy) ? ensureArray(identifier) : null
    };
}

export { buildInjectableMetadata, getInjectableType, registerExplicitDependency, registerImplicitDependencies };
