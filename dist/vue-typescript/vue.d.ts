import { AbstractConstructor } from "@banquette/utils-type/types";
import { ComponentCustomProperties, WatchOptions } from "@vue/runtime-core";
import { VNode, ComponentPublicInstance, ComponentInternalInstance, Slots, WatchStopHandle } from "vue";
import { COMPONENT_CTOR } from "./constants";
import { ComponentMetadataInterface } from "./decorator/component-metadata.interface";
/**
 * Base class components can inherit from the access Vue's public properties and methods.
 */
export declare abstract class Vue implements ComponentPublicInstance, ComponentCustomProperties {
    static [COMPONENT_CTOR]: any;
    $: ComponentInternalInstance & {
        type: any;
    };
    $attrs: Record<string, unknown>;
    $data: any;
    $el: any;
    $options: any;
    $parent: ComponentPublicInstance | null;
    $resolvedParent: ComponentPublicInstance | null;
    $props: any;
    $refs: Record<string, any>;
    $slots: Slots;
    $root: ComponentPublicInstance | null;
    $plugins: ComponentCustomProperties;
    $emit(eventName: string, ...args: any[]): void;
    $forceUpdate(): void;
    $forceUpdateComputed(): void;
    $nextTick<T>(fn: ((this: T) => void) | undefined): Promise<void>;
    $watch(source: string | Function, cb: Function, options: WatchOptions | undefined): WatchStopHandle;
    /**
     * Test if a slot is defined.
     */
    hasSlot(name: string): boolean;
    /**
     * Test if a slot is defined and not empty.
     */
    hasNonEmptySlot(name: string): boolean;
    /**
     * Test if a slot exists, render it if so and extract is text content.
     * Return `null` is the slot doesn't exist.
     */
    protected getSlotTextContent(name: string): string | null;
    /**
     * Try to get a reference on a specific parent component.
     */
    protected getParent<T extends AbstractConstructor<Vue>>(component: T | string): InstanceType<T> | null;
    /**
     * Get an array of all Vue Typescript parent components.
     */
    protected getParentsNamesStack(): string[];
    /**
     * Test if component is found in the parent hierarchy.
     */
    protected hasParent(component: any | string): boolean;
    /**
     * Get the Vue Typescript's metadata object for the component.
     */
    protected getMetadata(): ComponentMetadataInterface;
    /**
     * Extract all the text content from an array of vnodes.
     */
    protected getVNodesText(nodes: VNode[]): string;
    /**
     * Render a slot or return a default value if it does not exist.
     */
    protected renderSlot(name: string, defaultValue?: VNode | VNode[] | string): VNode | VNode[];
}
