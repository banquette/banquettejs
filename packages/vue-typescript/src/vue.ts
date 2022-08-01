import { isArray } from "@banquette/utils-type/is-array";
import { isObject } from "@banquette/utils-type/is-object";
import { isString } from "@banquette/utils-type/is-string";
import { isType } from "@banquette/utils-type/is-type";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { AbstractConstructor } from "@banquette/utils-type/types";
import { ComponentCustomProperties, WatchOptions } from "@vue/runtime-core";
import {
    VNode,
    Comment,
    Fragment,
    createElementBlock,
    ComponentPublicInstance,
    ComponentInternalInstance,
    Slots, WatchStopHandle
} from "vue";
import { COMPONENT_CTOR } from "./constants";
import { ComponentMetadataInterface } from "./decorator/component-metadata.interface";
import { vccOptsToMetadata, maybeResolveTsInst, anyToComponentMetadata, anyToComponentCtor } from "./utils/converters";
import { isInstanceOf } from "./utils/is-instance-of";

/**
 * Base class components can inherit from the access Vue's public properties and methods.
 */
export abstract class Vue implements ComponentPublicInstance, ComponentCustomProperties {
    static [COMPONENT_CTOR]: any;
    
    declare public $: ComponentInternalInstance & { type: any };
    declare public $attrs: Record<string, unknown>;
    declare public $data: any;
    declare public $el: any;
    declare public $options: any;
    declare public $parent: ComponentPublicInstance | null;
    declare public $resolvedParent: ComponentPublicInstance | null;
    declare public $props: any;
    declare public $refs: Record<string, any>;
    declare public $slots: Slots;
    declare public $root: ComponentPublicInstance | null;

    // Fake implementation of the public attributes of the vue instance.
    // The real implementation will be swapped when the component is initialized if it extends this class.
    public $emit(eventName: string, ...args: any[]): void {}
    public $forceUpdate(): void {}
    public $forceUpdateComputed(): void {}
    public $nextTick<T>(fn: ((this: T) => void) | undefined): Promise<void> { return Promise.resolve() }
    public $watch(source: string | Function, cb: Function, options: WatchOptions | undefined): WatchStopHandle { return () => {} }

    /**
     * Test if a slot is defined.
     */
    public hasSlot(name: string): boolean {
        return isObject(this.$slots) && Object.keys(this.$slots).indexOf(name) > -1;
    }

    /**
     * Test if a slot is defined and not empty.
     */
    public hasNonEmptySlot(name: string): boolean {
        if (!this.hasSlot(name)) {
            return false;
        }
        const isNonEmptyNode = function(node: VNode) {
            if (node.type === Fragment) {
                if (isArray(node.children)) {
                    for (const child of node.children) {
                        if (isNonEmptyNode(child as VNode)) {
                            return true;
                        }
                    }
                }
                return false;
            }
            return node.type !== Comment;
        };
        return (this.$slots as any)[name]().findIndex((node: VNode) => isNonEmptyNode(node)) > -1;
    }

    /**
     * Test if a slot exists, render it if so and extract is text content.
     * Return `null` is the slot doesn't exist.
     */
    protected getSlotTextContent(name: string): string|null {
        if (!this.hasSlot(name)) {
            return null;
        }
        return this.getVNodesText((this.$slots as any)[name]());
    }

    /**
     * Try to get a reference on a specific parent component.
     */
    protected getParent<T extends AbstractConstructor<Vue>>(component: T|string): InstanceType<T>|null {
        let $parent = this.$parent;
        while ($parent !== null) {
            const resolved = maybeResolveTsInst($parent);
            if (!isString(component)) {
                if (isInstanceOf(resolved, component)) {
                    return $parent as InstanceType<T>;
                }
            } else {
                let prototype = anyToComponentCtor($parent);
                while (prototype) {
                    // Loop over the prototype chain to get the metadata of all parents.
                    // The component may be a parent class.
                    const metadata = anyToComponentMetadata(prototype);
                    if (metadata && metadata.component.name === component) {
                        return resolved as InstanceType<T>;
                    }
                    prototype = Object.getPrototypeOf(prototype);
                }
            }
            $parent = $parent.$parent;
        }
        return null;
    }

    /**
     * Get an array of all Vue Typescript parent components.
     */
    protected getParentsNamesStack(): string[] {
        let $parent = this.$parent;
        const output: string[] = [];
        while ($parent !== null) {
            let prototype = anyToComponentCtor($parent);
            while (prototype) {
                const metadata = anyToComponentMetadata(prototype);
                if (metadata && metadata.component.name) {
                    output.push(metadata.component.name);
                }
                prototype = Object.getPrototypeOf(prototype);
            }
            $parent = $parent.$parent;
        }
        return output;
    }

    /**
     * Test if component is found in the parent hierarchy.
     */
    protected hasParent(component: any|string): boolean {
        return this.getParent(component) !== null;
    }

    /**
     * Get the Vue Typescript's metadata object for the component.
     */
    protected getMetadata(): ComponentMetadataInterface {
        return vccOptsToMetadata(this.$.type);
    }

    /**
     * Extract all the text content from an array of vnodes.
     */
    protected getVNodesText(nodes: VNode[]): string {
        return nodes.map(node => {
            if (isType<VNode[]>(node.children, isArray)) {
                return this.getVNodesText(node.children);
            }
            return isString(node.children) ? node.children : '';
        }).join('');
    }

    /**
     * Render a slot or return a default value if it does not exist.
     */
    protected renderSlot(name: string, defaultValue: VNode|VNode[]|string = ''): VNode|VNode[] {
        const slot = this.$slots[name];
        if (!isUndefined(slot)) {
            return slot();
        }
        if (!isString(defaultValue)) {
            return defaultValue;
        }
        return createElementBlock('span', null, defaultValue);
    }
}
