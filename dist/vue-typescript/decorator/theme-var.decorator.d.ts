export interface ThemeVarDecoratorOptions {
    name: string;
    defaultValue?: any;
    transform?: (value: any) => any;
}
/**
 * Make a css variable from the theme accessible from the component instance.
 */
export declare function ThemeVar(options: ThemeVarDecoratorOptions): any;
export declare function ThemeVar(name: string, defaultValue?: any): any;
