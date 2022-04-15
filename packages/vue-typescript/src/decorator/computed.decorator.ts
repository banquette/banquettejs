import { UsageException } from "@banquette/exception/usage.exception";
import { getObjectValue } from "@banquette/utils-object/get-object-value";
import { isObject } from "@banquette/utils-type/is-object";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { DebuggerEvent } from "@vue/reactivity";
import { getOrCreateComponentMetadata } from "../utils/get-or-create-component-metadata";
import { ComponentMetadataInterface } from "./component-metadata.interface";
import { Expose } from "./expose.decorator";

type DebugCallback = ((event: DebuggerEvent) => void)|string;

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
    exposeAs?: string|null|false;
}

export type ComputedMetadata = Record<string, Omit<ComputedDecoratorOptions, 'exposedAs'>>;

/**
 * Mark a property as reactive so its changes are tracked by Vue and it can be used in the template.
 */
export function Computed(options?: ComputedDecoratorOptions): Function;
export function Computed(exposeAs?: string|null|false, onTrigger?: DebugCallback|null, onTrack?: DebugCallback|null): Function;
export function Computed(optionsOrExposeAs: ComputedDecoratorOptions|string|null|false = {}, onTrigger?: DebugCallback|null, onTrack?: DebugCallback|null, exposeAs: string|null|false = null): Function {
    return (prototype: any, propertyKey: string) => {
        if (isUndefined(propertyKey)) {
            throw new UsageException('You can only use @Computed() on properties.');
        }
        const data: ComponentMetadataInterface = getOrCreateComponentMetadata(prototype);
        const isObj = optionsOrExposeAs !== null && isObject(optionsOrExposeAs);
        data.computed[propertyKey] = {
            onTrigger: isObj ? getObjectValue(optionsOrExposeAs, 'onTrigger', undefined) : (onTrigger || undefined),
            onTrack: isObj ? getObjectValue(optionsOrExposeAs, 'onTrack', undefined) : (onTrack || undefined)
        };
        exposeAs = isObj ? getObjectValue(optionsOrExposeAs, 'exposeAs', null) : optionsOrExposeAs;
        if (exposeAs !== false && isUndefined(data.exposed[propertyKey])) {
            Expose(exposeAs)(prototype, propertyKey);
        }
    };
}
