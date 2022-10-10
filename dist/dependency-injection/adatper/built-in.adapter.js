/*!
 * Banquette DependencyInjection v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { BuiltInContainer } from '../built-in-container.js';

/**
 * Default adapter.
 */
var BuiltInAdapter = /** @class */ (function () {
    function BuiltInAdapter() {
        /**
         * Inversify container instance.
         */
        this.container = null;
    }
    /**
     * @inheritDoc
     */
    BuiltInAdapter.prototype.get = function (identifier) {
        return this.getContainer().get(identifier);
    };
    /**
     * @inheritDoc
     */
    BuiltInAdapter.prototype.getMultiple = function (tag) {
        return this.getContainer().getMultiple(tag);
    };
    /**
     * @inheritDoc
     */
    BuiltInAdapter.prototype.has = function (identifier) {
        return this.getContainer().has(identifier);
    };
    /**
     * @inheritDoc
     */
    BuiltInAdapter.prototype.getContainer = function () {
        if (this.container === null) {
            this.container = new BuiltInContainer();
        }
        return this.container;
    };
    /**
     * @inheritDoc
     */
    BuiltInAdapter.prototype.register = function (metadata) {
        // Nothing to do for this adapter.
    };
    return BuiltInAdapter;
}());

export { BuiltInAdapter };
