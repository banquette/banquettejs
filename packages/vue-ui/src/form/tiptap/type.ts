import { Constructor, isArray, isObject } from "@banquette/utils-type";
import { TiptapConfigurationInterface } from "./tiptap-configuration.interface";
import { AbstractTiptapModule } from "./modules/abstract-tiptap-module";

export interface ModuleInterface {
    component: Constructor<AbstractTiptapModule>;
    options?: any;
}

/**
 * Check if the input looks like a TiptapConfigurationInterface.
 */
export function isTiptapConfiguration(input: any): input is TiptapConfigurationInterface {
    return isObject(input) && (isArray(input.toolbars) || isArray(input.extensions));
}
