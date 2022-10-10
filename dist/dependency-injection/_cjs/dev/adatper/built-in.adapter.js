/*!
 * Banquette DependencyInjection v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var builtInContainer = require('../built-in-container.js');

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
            this.container = new builtInContainer.BuiltInContainer();
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

exports.BuiltInAdapter = BuiltInAdapter;
