/*!
 * Banquette DependencyInjection v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { BuiltInAdapter } from './adatper/built-in.adapter.js';
import { MetadataContainer } from './metadata.container.js';

var Injector = /** @class */ (function () {
    function Injector() {
    }
    /**
     * Set the container adapter to use.
     */
    Injector.UseAdapter = function (adapter) {
        Injector.Adapter = adapter;
        var metadata = MetadataContainer.GetKnownMetadata();
        for (var _i = 0, metadata_1 = metadata; _i < metadata_1.length; _i++) {
            var item = metadata_1[_i];
            Injector.Adapter.register(item);
        }
    };
    /**
     * Gets the real container behind the adapter.
     */
    Injector.GetContainer = function () {
        return Injector.Adapter.getContainer();
    };
    /**
     * Gets an element registered in the container.
     */
    Injector.Get = function (identifier) {
        return Injector.Adapter.get(identifier);
    };
    /**
     * Gets any number of elements matching at least on of the tags given as input.
     */
    Injector.GetMultiple = function (tag) {
        return Injector.Adapter.getMultiple(tag);
    };
    /**
     * Check if an identifier is known by the container.
     */
    Injector.Has = function (identifier) {
        return Injector.Adapter.has(identifier);
    };
    /**
     * Register an dependency into the container.
     */
    Injector.Register = function (metadata) {
        Injector.Adapter.register(metadata);
    };
    return Injector;
}());
// Ensure there is always at least the minimalist builtin adapter available
// with no chance to override another adapter that could have been set before.
Injector.UseAdapter(new BuiltInAdapter());

export { Injector };
