/*!
 * Banquette Model v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var modelMetadata_service = require('../model-metadata.service.js');

var metadata = injector.Injector.Get(modelMetadata_service.ModelMetadataService);
function Alias(alias) {
    return function (ctor) {
        metadata.registerAlias(ctor, alias);
    };
}

exports.Alias = Alias;
