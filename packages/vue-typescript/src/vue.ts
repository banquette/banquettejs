import { isArray } from "@banquette/utils-type/is-array";
import { isObject } from "@banquette/utils-type/is-object";
import { isString } from "@banquette/utils-type/is-string";
import { isType } from "@banquette/utils-type/is-type";
import { AbstractConstructor } from "@banquette/utils-type/types";
import { WatchOptions } from "@vue/runtime-core";
import { ComponentPublicInstance, ComponentInternalInstance, Slots, WatchStopHandle, VNode } from "vue";
import { DECORATORS_CTOR_NAME } from "./constants";
import { isComponentInstance } from "./utils";

/**
 * Fake implementation of the public attributes of the vue instance.
 * The real implementation will be swapped when the component is initialized if it extends this class.
 */
export class Vue implements ComponentPublicInstance {
    static [DECORATORS_CTOR_NAME]: any;

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
    public $nextTick<T>(fn: ((this: T) => void) | undefined): Promise<void> { return Promise.resolve() }
    public $watch(source: string | Function, cb: Function, options: WatchOptions|undefined): WatchStopHandle {
        return null as any;
    };

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
                return $parent;
            }
            $parent = $parent.$parent;
        }
        return null;
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
