import { Constructor } from "@banquette/utils-type/types";
import { ComponentMetadataInterface } from "./decorator/component-metadata.interface";
import { ComponentDecoratorOptions } from "./decorator/component.decorator";
import { VccOpts } from "./type";
/**
 * A cache for the Vue component options.
 */
export declare const vccOptionsMap: WeakMap<any, any>;
/**
 * Generate the option object that will be used by Vue to create a component.
 */
export declare function generateVccOpts(ctor: Constructor, data: ComponentMetadataInterface & {
    component: ComponentDecoratorOptions;
}): VccOpts;
