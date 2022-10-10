import { TiptapConfigurationInterface } from "./tiptap-configuration.interface";
export declare const ModulesToolbarAliases: Record<string, string>;
/**
 * Register an alias the module can be referred to in the toolbars.
 */
export declare function registerModuleToolbarAlias(moduleName: string, alias: string): void;
/**
 * Utility function to easily register a tiptap configuration.
 */
export declare function registerTiptapConfiguration(name: string, configuration: TiptapConfigurationInterface): void;
