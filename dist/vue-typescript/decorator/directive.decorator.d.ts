export interface DirectiveDecoratorOptions {
    /**
     * Name of the directive for VueJS.
     * @see https://v3.vuejs.org/guide/component-registration.html#component-names
     */
    name: string;
    /**
     * Group(s) on which the component should be registered in the VueBuilder.
     */
    group?: string | string[] | null;
    /**
     * Function to call to create an instance of the directive.
     * If not defined, the constructor is simply called without any parameters.
     */
    factory: (() => any);
}
/**
 * Define a class as a Vue directive.
 * Each usage of the directive will have its own Typescript instance.
 */
export declare function Directive(name: string): any;
export declare function Directive(options: Partial<DirectiveDecoratorOptions>): any;
