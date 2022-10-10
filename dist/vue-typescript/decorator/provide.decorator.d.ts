export interface ProvideDecoratorOptions {
    /**
     * The name child components will have to use to inject the value.
     */
    provideAs: string;
    /**
     * If `true` the value will not be writeable by child components.
     */
    readonly: boolean;
}
/**
 * Provide a property to child components.
 *
 * @param provideAs If set to `null`, the value is provided with the same name as the property the decorator has been put on.
 *                  If set to a `string`, the value is provided using it as name.
 * @param readonly  If `true` the value will not be writeable by child components.
 */
export declare function Provide(provideAs?: string | null, readonly?: boolean): Function;
