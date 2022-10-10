export interface ExposeDecoratorOptions {
    /**
     * If set to `null`, the ref is exposed to the template with the same name as the property or method.
     * If set to a `string`, the ref is exposed using it as name.
     */
    exposeAs?: string;
    /**
     * If set to `false`, the typescript instance of the component will receive the value "unprofixied".
     * Meaning the proxies set by Vue to track changes will be removed.
     * That's mainly a performance optimization, if you don't need changes made on the object to be tracked by Vue.
     */
    observe?: boolean;
}
export declare type ExposeMetadata = {
    exposeAs: string;
    observe: boolean;
};
/**
 * Expose a property or method to the template.
 */
export declare function Expose(options: ExposeDecoratorOptions): Function;
export declare function Expose(exposeAs?: string | null, observe?: boolean): Function;
