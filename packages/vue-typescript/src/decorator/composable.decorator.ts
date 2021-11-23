import { isFunction } from "@banquette/utils-type/is-function";
import { Constructor } from "@banquette/utils-type/types";
import { getDecoratorsData } from "../utils";
import { DecoratorsDataInterface } from "./decorators-data.interface";

export interface ComposableDecoratorOptions {
    /**
     * Function to call to create an instance of the composable.
     * If not defined, the constructor is simply called without any parameters.
     */
    factory?: (() => any)|null;
}

/**
 * Define options to use when a class is used as a composable.
 */
export function Composable(factory?: () => any): any;
export function Composable(options: ComposableDecoratorOptions): any;
export function Composable(options: ComposableDecoratorOptions|(() => any) = {}): any {
    return (ctor: Constructor) => {
        const data: DecoratorsDataInterface & {component: ComposableDecoratorOptions} = getDecoratorsData(ctor.prototype) as DecoratorsDataInterface & {component: ComposableDecoratorOptions};
        if (isFunction(options)) {
            options = {factory: options} as ComposableDecoratorOptions;
        }
        data.composable = options as ComposableDecoratorOptions;
    };
}
