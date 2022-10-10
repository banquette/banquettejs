/*!
 * Banquette DependencyInjection v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector = require('./injector.js');
var metadata_container = require('./metadata.container.js');
var inject_decorator = require('./decorator/inject.decorator.js');
var injectLazy_decorator = require('./decorator/inject-lazy.decorator.js');
var injectMultiple_decorator = require('./decorator/inject-multiple.decorator.js');
var module_decorator = require('./decorator/module.decorator.js');
var service_decorator = require('./decorator/service.decorator.js');



exports.Injector = injector.Injector;
exports.MetadataContainer = metadata_container.MetadataContainer;
exports.Inject = inject_decorator.Inject;
exports.InjectLazy = injectLazy_decorator.InjectLazy;
exports.InjectMultiple = injectMultiple_decorator.InjectMultiple;
exports.Module = module_decorator.Module;
exports.Service = service_decorator.Service;
