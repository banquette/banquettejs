import { isArray } from "@banquette/utils-type/is-array";
import { isObject } from "@banquette/utils-type/is-object";
import { isString } from "@banquette/utils-type/is-string";
import { isType } from "@banquette/utils-type/is-type";
import { AbstractConstructor } from "@banquette/utils-type/types";
import { WatchOptions } from "@vue/runtime-core";
import { ComponentPublicInstance, ComponentInternalInstance, Slots, WatchStopHandle, VNode } from "vue";
import { DECORATORS_CTOR_NAME } from "./constants";
import { ComponentMetadataInterface } from "./decorator/component-metadata.interface";
import { getComponentMetadata } from "./utils/get-component-metadata";
import { isComponentInstance } from "./utils/is-component-instance";

/**
 * Fake implementation of the public attributes of the vue instance.
 * The real implementation will be swapped when the component is initialized if it extends this class.
 */
export abstract class Vue implements ComponentPublicInstance {
    static [DECORATORS_CTOR_NAME]: any;

    /**
     * Placeholder attributes and methods.
     * Overridden when vccOpts object is built.
     */
    public $!: ComponentInternalInstance;
    public $attrs!: Record<string, unknown>;
    public $data: any;
    public $el: any;
    public $options: any;
    public $parent: ComponentPublicInstance|null = null;
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
     * Test if a slot is defined and not empty.
     */
    public hasSlot(name: string): boolean {
        return isObject(this.$slots) && Object.keys(this.$slots).indexOf(name) > -1;
    }

    /**
     * Try to get a reference on a specific parent component.
     */
    protected getParent<T extends AbstractConstructor<Vue>>(component: T): InstanceType<T>|null {
        let $parent = this.$parent;
        while ($parent !== null) {
            if (isComponentInstance($parent, component)) {
                return $parent as InstanceType<T>;
            }
            $parent = $parent.$parent;
        }
        return null;
    }

    /**
     * Try to get a reference on a specific parent component.
     */
    protected getParentByName<T extends AbstractConstructor<Vue>>(name: string): InstanceType<T>|null {
        let $parent = this.$parent;
        while ($parent !== null) {
            if (this.getComponentName($parent) === name) {
                return $parent as InstanceType<T>;
            }
            $parent = $parent.$parent;
        }
        return null;
    }

    /**
     * Try to get the vue-typescript's metadata for a component.
     */
    protected getComponentMetadata(component: any): ComponentMetadataInterface|null {
        return getComponentMetadata(component);
    }

    /**
     * Try to get the name of a Vue component.
     */
    protected getComponentName(component: any): string|null {
        const metadata = getComponentMetadata(component);
        return metadata ? metadata.component.name : null;
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
