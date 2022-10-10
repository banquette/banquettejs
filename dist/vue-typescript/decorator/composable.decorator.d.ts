export interface ComposableDecoratorOptions {
    /**
     * Function to call to create an instance of the composable.
     * If not defined, the constructor is simply called without any parameters.
     */
    factory?: (() => any) | null;
}
/**
 * Define options to use when a class is used as a composable.
 */
export declare function Composable(factory?: () => any): any;
export declare function Composable(options: ComposableDecoratorOptions): any;
