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
 * Register a module into the container.
 */
function Module(tag) {
    return function (ctor) {
        var metadata = utils.registerImplicitDependencies(ctor);
        metadata.tags = ensureArray.ensureArray(tag);
        injector.Injector.Register(metadata);
    };
}

exports.Module = Module;
