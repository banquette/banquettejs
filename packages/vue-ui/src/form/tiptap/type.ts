import { isArray } from "@banquette/utils-type/is-array";
import { isObject } from "@banquette/utils-type/is-object";
import { Component as VueComponent } from "@vue/runtime-core";
import { TiptapConfigurationInterface } from "./tiptap-configuration.interface";

/**
 * Can be a reference on the Vue component or an alias string.
 *
 * If a string is defined, it will be resolved to the full name of the component by adding the prefix "bt-form-tiptap-".
 * For example "bold" will be resolved as "bt-form-tiptap-bold".
 *
 * If the prefixed name is not found, the string will be used as is as the component's name.
 *
 * The component must implement `TiptapModuleInterface`.
 */
export type ModuleIdentifier = VueComponent|string;

/**
 * Check if the input looks like a TiptapConfigurationInterface.
 */
export function isTiptapConfiguration(input: any): input is TiptapConfigurationInterface {
    return isObject(input) && (isArray(input.toolbars) || isObject(input.modules) || isArray(input.extensions));
}
