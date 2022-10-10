/*!
 * Banquette DependencyInjection v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ensureArray = require('@banquette/utils-type/_cjs/dev/ensure-array');
var injector = require('../injector.js');
var utils = require('../utils.js');

/**
 * Register a service into the container.
 */
function Service(tag, ctorOverride) {
    if (ctorOverride === void 0) { ctorOverride = null; }
    return function (ctor) {
        var metadata = utils.registerImplicitDependencies(ctorOverride || ctor);
        metadata.ctor = ctor;
        metadata.singleton = true;
        metadata.tags = ensureArray.ensureArray(tag);
        injector.Injector.Register(metadata);
    };
}

exports.Service = Service;
