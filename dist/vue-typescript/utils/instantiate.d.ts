import { Constructor } from "@banquette/utils-type/types";
import { ComponentDecoratorOptions } from "../decorator/component.decorator";
import { ComposableDecoratorOptions } from "../decorator/composable.decorator";
/**
 * Create an instance of component.
 */
export declare function instantiate(ctor: Constructor, options: ComponentDecoratorOptions | ComposableDecoratorOptions): any;
