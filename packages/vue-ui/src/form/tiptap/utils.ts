import { Injector } from "@banquette/dependency-injection";
import { TiptapConfigurationInterface } from "./tiptap-configuration.interface";
import { TiptapConfigurationService } from "./tiptap-configuration.service";

export const ModulesToolbarAliases: Record<string, string> = {};

/**
 * Register an alias the module can be referred to in the toolbars.
 */
export function registerModuleToolbarAlias(moduleName: string, alias: string): void {
    ModulesToolbarAliases[alias] = moduleName;
}

/**
 * Utility function to easily register a tiptap configuration.
 */
export function registerTiptapConfiguration(name: string, configuration: TiptapConfigurationInterface): void {
    return Injector.Get(TiptapConfigurationService).set(name, configuration);
}
