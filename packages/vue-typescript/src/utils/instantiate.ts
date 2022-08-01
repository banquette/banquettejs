import { isNullOrUndefined } from "@banquette/utils-type/is-null-or-undefined";
import { Constructor } from "@banquette/utils-type/types";
import { ComponentDecoratorOptions } from "../decorator/component.decorator";
import { ComposableDecoratorOptions } from "../decorator/composable.decorator";

/**
 * Create an instance of component.
 */
export function instantiate(ctor: Constructor, options: ComponentDecoratorOptions|ComposableDecoratorOptions): any {
    return !isNullOrUndefined(options.factory) ? options.factory() : new ctor();
}
