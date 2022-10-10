/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { Injector } from '@banquette/dependency-injection/injector';
import { TiptapConfigurationService } from './tiptap-configuration.service.js';

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
    return Injector.Get(TiptapConfigurationService).set(name, configuration);
}

export { ModulesToolbarAliases, registerModuleToolbarAlias, registerTiptapConfiguration };
