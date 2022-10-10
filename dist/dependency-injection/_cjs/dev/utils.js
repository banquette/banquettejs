/*!
 * Banquette DependencyInjection v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var getConstructorArgumentsTypes = require('@banquette/utils-reflection/_cjs/dev/get-constructor-arguments-types');
var ensureArray = require('@banquette/utils-type/_cjs/dev/ensure-array');
var isFunction = require('@banquette/utils-type/_cjs/dev/is-function');
var isSymbol = require('@banquette/utils-type/_cjs/dev/is-symbol');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var metadata_container = require('./metadata.container.js');

/**
 * Create the metadata object defining the type and dependencies of an injectable.
 */
function buildInjectableMetadata(ctor) {
    var metadata = metadata_container.MetadataContainer.Get(ctor);
    if (metadata !== null) {
        return metadata;
    }
    metadata = { identifier: ctor, ctor: ctor, singleton: false, tags: [], constructorDependencies: [], propertiesDependencies: {} };
    metadata_container.MetadataContainer.Set(metadata);
    return metadata;
}
/**
 * Build the array of dependencies to inject in the constructor of an injectable.
 */
function registerImplicitDependencies(ctor) {
    var metadata = buildInjectableMetadata(ctor);
    var parametersTypes = getConstructorArgumentsTypes.getConstructorArgumentsTypes(ctor);
    for (var i = 0; i < parametersTypes.length; ++i) {
        if (metadata.constructorDependencies.length <= i || isUndefined.isUndefined(metadata.constructorDependencies[i])) {
            metadata.constructorDependencies[i] = getInjectableType(parametersTypes[i], false);
        }
    }
    return metadata;
}
function registerExplicitDependency(ctor, identifier, lazy, propertyName, parameterIndex) {
    var metadata = buildInjectableMetadata(ctor);
    var type = getInjectableType(identifier, lazy);
    if (!isUndefined.isUndefined(propertyName)) {
        if (!isUndefined.isUndefined(metadata.propertiesDependencies[propertyName])) {
            throw new usage_exception.UsageException("You can't inject multiple values into a property (".concat(propertyName, ")."));
        }
        metadata.propertiesDependencies[propertyName] = { type: type, propertyName: propertyName, parameterIndex: parameterIndex };
    }
    else if (!isUndefined.isUndefined(parameterIndex)) {
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
    if (isUndefined.isUndefined(identifier)) {
        throw new usage_exception.UsageException('Circular dependency detected. Use the @InjectLazy decorator to workaround it.');
    }
    if (!isFunction.isFunction(identifier) && !isSymbol.isSymbol(identifier)) {
        throw new usage_exception.UsageException('The built-in container only support constructors as identifiers (or symbols for multi inject). ' +
            'If you need a more robust dependency injection system, consider installing "@banquette/inversify" that will ' +
            'create a bridge between Inversify and all the internal services so you can use it instead of the built-in container.');
    }
    return {
        eager: lazy === false ? identifier : null,
        lazy: lazy === true ? identifier : null,
        tags: isUndefined.isUndefined(lazy) ? ensureArray.ensureArray(identifier) : null
    };
}

exports.buildInjectableMetadata = buildInjectableMetadata;
exports.getInjectableType = getInjectableType;
exports.registerExplicitDependency = registerExplicitDependency;
exports.registerImplicitDependencies = registerImplicitDependencies;
