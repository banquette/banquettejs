import { isNullOrUndefined, Constructor } from "@banquette/utils-type";
import { ComponentDecoratorOptions } from "../decorator/component.decorator";
import { ComposableDecoratorOptions } from "../decorator/composable.decorator";

/**
 * Create an instance of component.
 */
export function instantiate(ctor: Constructor, options: ComponentDecoratorOptions|ComposableDecoratorOptions): any {
    return !isNullOrUndefined(options.factory) ? options.factory() : new ctor();
}
