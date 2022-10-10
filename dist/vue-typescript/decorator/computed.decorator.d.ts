import { DebuggerEvent } from "@vue/reactivity";
declare type DebugCallback = ((event: DebuggerEvent) => void) | string;
export interface ComputedDecoratorOptions {
    onTrack?: DebugCallback;
    onTrigger?: DebugCallback;
    /**
     * Shortcut to expose the computed to the template.
     *
     * If set to `null`, the ref is exposed to the template as the same name (default behavior).
     * If set to a `string`, the ref is exposed and uses the string as name.
     * If set to `false`, the ref is NOT exposed to the template.
     *
     * If the @Expose() decorator is also applied, it takes priority and this option becomes useless.
     */
    exposeAs?: string | null | false;
}
export declare type ComputedMetadata = Record<string, Omit<ComputedDecoratorOptions, 'exposedAs'>>;
/**
 * Mark a property as reactive so its changes are tracked by Vue and it can be used in the template.
 */
export declare function Computed(options?: ComputedDecoratorOptions): Function;
export declare function Computed(exposeAs?: string | null | false, onTrigger?: DebugCallback | null, onTrack?: DebugCallback | null): Function;
export {};
