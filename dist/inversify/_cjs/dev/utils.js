/*!
 * Banquette Inversify v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var injector$1 = require('./injector.js');

/**
 * Use inversify as the dependency injection container for all tools.
 * You can give it an existing container so services will register onto it.
 */
function useInversifyContainer(container) {
    injector.Injector.UseAdapter(new injector$1.InversifyAdapter(container));
}

exports.useInversifyContainer = useInversifyContainer;
