import { getObjectValue } from "@banquette/utils-object/get-object-value";
import { trim } from "@banquette/utils-string/format/trim";
import { isArray } from "@banquette/utils-type/is-array";
import { isObject } from "@banquette/utils-type/is-object";
import { isString } from "@banquette/utils-type/is-string";
import { isType } from "@banquette/utils-type/is-type";
import { AbstractConstructor } from "@banquette/utils-type/types";
import { WatchOptions } from "@vue/runtime-core";
import {
    ComponentPublicInstance,
    ComponentInternalInstance,
    Slots,
    WatchStopHandle,
    VNode,
    Comment,
    Fragment
} from "vue";
import { COMPONENT_CTOR } from "./constants";
import { ComponentMetadataInterface } from "./decorator/component-metadata.interface";
import { VccOpts } from "./type";
import { vccOptsToMetadata, maybeResolveTsInst, anyToComponentMetadata, anyToComponentCtor } from "./utils/converters";
import { isInstanceOf } from "./utils/is-instance-of";

/**
 * Fake implementation of the public attributes of the vue instance.
 * The real implementation will be swapped when the component is initialized if it extends this class.
 */
export abstract class Vue implements ComponentPublicInstance {
    static [COMPONENT_CTOR]: any;

    /**
     * Placeholder attributes and methods.
     * Overridden when vccOpts object is built.
     */
    public $!: ComponentInternalInstance & {type: VccOpts};
    public $attrs!: Record<string, unknown>;
    public $data: any;
    public $el: any;
    public $options: any;
    public $parent: ComponentPublicInstance|null = null;
    public $resolvedParent: ComponentPublicInstance|null = null;
    public $props: any;
    public $refs!: Record<string, any>;
    public $slots!: Slots;
    public $root: ComponentPublicInstance|null = null;

    public $emit(eventName: string, ...args: any[]): void { }
    public $forceUpdate(): void { }
    public $forceUpdateComputed(): void { }
    public $nextTick<T>(fn: ((this: T) => void) | undefined): Promise<void> { return Promise.resolve() }
    public $watch(source: string | Function, cb: Function, options: WatchOptions|undefined): WatchStopHandle {
        return null as any;
    };
    // End of placeholders.

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
}
