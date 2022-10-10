/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var tiptapConfiguration_service = require('./tiptap-configuration.service.js');

var ModulesToolbarAliases = {};
/**
 * Register an alias the module can be referred to in the toolbars.
 */
function registerModuleToolbarAlias(moduleName, alias) {
    ModulesToolbarAliases[alias] = moduleName;
}
/**
 * Utility function to easily register a tiptap configuration.
 */
function registerTiptapConfiguration(name, configuration) {
    return injector.Injector.Get(tiptapConfiguration_service.TiptapConfigurationService).set(name, configuration);
}

exports.ModulesToolbarAliases = ModulesToolbarAliases;
exports.registerModuleToolbarAlias = registerModuleToolbarAlias;
exports.registerTiptapConfiguration = registerTiptapConfiguration;
