export interface InjectProvidedDecoratorOptions {
    /**
     * The name of the value to provide.
     */
    target: string;
    /**
     * The default value to use if none is found in parent components.
     */
    defaultValue: any;
}
/**
 * Inject a value provided by a parent component.
 *
 * @param target       name of the value to inject
 * @param defaultValue default value if none is found in parent components
 */
export declare function InjectProvided(target: string, defaultValue?: any): Function;
