/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var getOrCreateComponentMetadata = require('../utils/get-or-create-component-metadata.js');

exports.ImmediateStrategy = void 0;
(function (ImmediateStrategy) {
    /**
     * The default behavior of VueJS, the callback is invoked immediately when the watcher is created.
     */
    ImmediateStrategy["Sync"] = "sync";
    /**
     * Invoke the callback when the "beforeMount" hook is fired.
     */
    ImmediateStrategy["BeforeMount"] = "beforeMount";
    /**
     * Invoke the callback when the "mounted" hook is fired.
     */
    ImmediateStrategy["Mounted"] = "mounted";
    /**
     * Wait the next tick to invoke the callback, this ensures the component is totally initialized and rendered.
     */
    ImmediateStrategy["NextTick"] = "nextTick";
})(exports.ImmediateStrategy || (exports.ImmediateStrategy = {}));
/**
 * Make Vue call a method when changes are detected on a property.
 */
function Watch(source, options) {
    if (options === void 0) { options = {}; }
    return function (prototype, propertyKey) {
        var data = getOrCreateComponentMetadata.getOrCreateComponentMetadata(prototype);
        if (isUndefined.isUndefined(options.immediate)) {
            options.immediate = exports.ImmediateStrategy.Mounted;
        }
        else if (options.immediate === true) {
            options.immediate = exports.ImmediateStrategy.Sync;
        }
        data.watch.push({
            target: propertyKey,
            source: source,
            options: options
        });
    };
}

exports.Watch = Watch;
