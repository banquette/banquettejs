import { Injector } from "@banquette/dependency-injection/injector";
import { isArray } from "@banquette/utils-type/is-array";
import { isObject } from "@banquette/utils-type/is-object";
import { TiptapConfigurationStorage } from "./tiptap-configuration-storage";
import { TiptapConfigurationInterface } from "./tiptap-configuration.interface";

/**
 * Utility function to easily register a tiptap configuration.
 */
export function registerTiptapConfiguration(name: string, configuration: TiptapConfigurationInterface): void {
    return Injector.Get(TiptapConfigurationStorage).set(name, configuration);
}

/**
 * Check if the input looks like a TiptapConfigurationInterface.
 */
export function isTiptapConfiguration(input: any): input is TiptapConfigurationInterface {
    return isObject(input) && (isArray(input.toolbars) || isObject(input.modules) || isArray(input.extensions));
}
