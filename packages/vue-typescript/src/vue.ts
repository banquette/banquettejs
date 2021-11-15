import { ComponentPublicInstance, ComponentInternalInstance, Slots, WatchStopHandle } from "vue";
import { WatchOptions } from "@vue/runtime-core";
import { DECORATORS_CTOR_NAME } from "./constants";

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
   hasSlot(name: string): boolean {
        return Object.keys(this.$slots).indexOf(name) > -1;
    }
}
