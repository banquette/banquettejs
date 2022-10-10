/*!
 * Banquette DependencyInjection v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('./_virtual/_tslib.js');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var isArray = require('@banquette/utils-type/_cjs/dev/is-array');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var metadata_container = require('./metadata.container.js');

/**
 * A very basic container, only meant to cover the limited needs of the tools.
 * Because it is always bundled with the package it must be as light as possible.
 */
var BuiltInContainer = /** @class */ (function () {
    function BuiltInContainer() {
        this.singletons = new WeakMap();
        this.resolutionInstances = [];
        this.resolutionStack = [];
    }
    /**
     * Gets an element registered in the container.
     */
    BuiltInContainer.prototype.get = function (identifier) {
        var instance = this.resolveInjectable(identifier);
        this.assignResolutionInstancesPropertyDependencies();
        return instance;
    };
    /**
     * Gets any number of elements matching at least on of the tags given as input.
     */
    BuiltInContainer.prototype.getMultiple = function (tag) {
        var _this = this;
        var output = [];
        var lastTagsVersion = 0;
        // Create a proxy to account for changes
        // because a tag can be injected before every dependency have time to register.
        return new Proxy(output, {
            get: function (target, name) {
                if (lastTagsVersion === metadata_container.MetadataContainer.TagsVersion) {
                    return !isUndefined.isUndefined(name) ? target[name] : target;
                }
                lastTagsVersion = metadata_container.MetadataContainer.TagsVersion;
                target.splice(0, target.length);
                var metadata = metadata_container.MetadataContainer.GetForTag(tag);
                for (var _i = 0, metadata_1 = metadata; _i < metadata_1.length; _i++) {
                    var item = metadata_1[_i];
                    var resolvedItems = _this.resolveInjectable(item.identifier);
                    if (isArray.isArray(resolvedItems)) {
                        for (var _a = 0, resolvedItems_1 = resolvedItems; _a < resolvedItems_1.length; _a++) {
                            var resolvedItem = resolvedItems_1[_a];
                            target.push(resolvedItem);
                        }
                    }
                    else {
                        target.push(resolvedItems);
                    }
                    _this.assignResolutionInstancesPropertyDependencies();
                }
                return !isUndefined.isUndefined(name) ? target[name] : target;
            }
        });
    };
    /**
     * Gets any number of elements matching at least on of the tags given as input.
     */
    BuiltInContainer.prototype.has = function (identifier) {
        return metadata_container.MetadataContainer.Get(identifier) !== null;
    };
    /**
     * Get/create the object corresponding to an indentifier.
     */
    BuiltInContainer.prototype.resolveInjectable = function (identifier) {
        var _a;
        var metadata = metadata_container.MetadataContainer.GetOrFail(identifier);
        if (metadata.singleton && this.singletons.has(identifier)) {
            return this.singletons.get(identifier);
        }
        var instance;
        try {
            this.pushToStack(identifier);
            var constructorArgs = [];
            for (var _i = 0, _b = metadata.constructorDependencies; _i < _b.length; _i++) {
                var dependency = _b[_i];
                constructorArgs.push(this.resolveDependency(dependency));
            }
            instance = new ((_a = metadata.ctor).bind.apply(_a, _tslib.__spreadArray([void 0], constructorArgs, false)))();
            this.resolutionInstances.push(instance);
        }
        finally {
            this.popFromStack();
        }
        if (metadata.singleton) {
            this.singletons.set(identifier, instance);
        }
        return instance;
    };
    /**
     * Resolve an injectable type into its concrete instance.
     */
    BuiltInContainer.prototype.resolveDependency = function (type) {
        if (type.tags !== null) {
            return this.getMultiple(type.tags);
        }
        var identifier = type.eager !== null ? type.eager : type.lazy();
        return this.resolveInjectable(identifier);
    };
    /**
     * Assign the dependencies injected on properties on newly created objects.
     */
    BuiltInContainer.prototype.assignResolutionInstancesPropertyDependencies = function () {
        var instances = _tslib.__spreadArray([], this.resolutionInstances, true);
        this.resolutionInstances = [];
        for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
            var inst = instances_1[_i];
            var metadata = metadata_container.MetadataContainer.GetOrFail(inst.constructor);
            for (var _a = 0, _b = Object.keys(metadata.propertiesDependencies); _a < _b.length; _a++) {
                var prop = _b[_a];
                inst[prop] = this.resolveDependency(metadata.propertiesDependencies[prop].type);
            }
        }
        if (this.resolutionInstances.length > 0) {
            this.assignResolutionInstancesPropertyDependencies();
        }
    };
    /**
     * Add an identifier to the resolution stack if not already in it.
     * If found, an exception is thrown.
     */
    BuiltInContainer.prototype.pushToStack = function (identifier) {
        if (this.resolutionStack.indexOf(identifier) >= 0) {
            var stackNames = this.resolutionStack.concat([identifier]).reduce(function (acc, cur) {
                acc.push(cur.name);
                return acc;
            }, []).join(' --> ');
            this.resolutionStack = [];
            throw new usage_exception.UsageException("Circular dependency found: ".concat(stackNames));
        }
        this.resolutionStack.push(identifier);
    };
    /**
     * Remove the last element inserted in the stack.
     */
    BuiltInContainer.prototype.popFromStack = function () {
        this.resolutionStack.pop();
    };
    return BuiltInContainer;
}());

exports.BuiltInContainer = BuiltInContainer;
