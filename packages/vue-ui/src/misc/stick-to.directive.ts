import { proxy } from "@banquette/utils-misc/proxy";
import { throttle } from "@banquette/utils-misc/throttle";
import { areObjectsEqual } from "@banquette/utils-object/are-objects-equal";
import { cloneDeepPrimitive } from "@banquette/utils-object/clone-deep-primitive";
import { extend } from "@banquette/utils-object/extend";
import { trim } from "@banquette/utils-string/format/trim";
import { isFunction } from "@banquette/utils-type/is-function";
import { isNullOrUndefined } from "@banquette/utils-type/is-null-or-undefined";
import { isObject } from "@banquette/utils-type/is-object";
import { isString } from "@banquette/utils-type/is-string";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { GenericCallback, VoidCallback } from "@banquette/utils-type/types";
import { Directive } from "@banquette/vue-typescript/decorator/directive.decorator";
import { createPopper, PositioningStrategy, Instance, OptionsGeneric } from "@popperjs/core";
import { useResizeObserver } from "@vueuse/core";
import { DirectiveBinding } from "vue";

interface OptionsInterface {
    enabled: boolean;
    target: HTMLElement|string;
    placement?: PositioningStrategy;
    popper?: Partial<OptionsGeneric<any>>;
}

/**
 * A directive to make an element float around another.
 */
@Directive('bt-stick-to')
export class StickToDirective {
    /**
     * A unique mutation observer common to all instances.
     */
    private static Observer: MutationObserver|null = null;
    private static ObserverListeners: GenericCallback[] = [];

    private el!: HTMLElement & {__vueParentComponent?: any};
    private bindings!: DirectiveBinding;
    private options!: OptionsInterface;

    private target: HTMLElement|null = null;
    private mutationObserverUnsubscribeFn: VoidCallback|null = null;
    private sizeObserverUnsubscribeFn: VoidCallback|null = null;
    private popper: Instance|null = null;

    /**
     * Vue lifecycle.
     */
    public mounted(el: HTMLElement, bindings: DirectiveBinding) {
        this.updated(el, bindings);
    }

    public forceUpdate(): void {
        if (this.popper) {
            this.popper.forceUpdate();
        }
    }

    /**
     * Vue lifecycle.
     */
    public updated(el: HTMLElement, bindings: DirectiveBinding) {
        const newOptions = this.resolveOptions(bindings);
        if (el === this.el && areObjectsEqual(newOptions, this.options)) {
            return ;
        }
        this.el = el;
        this.bindings = bindings;
        this.options = this.resolveOptions(bindings);
        bindings.value.forceUpdate = proxy(this.forceUpdate, this);
        this.doUpdate();
    }

    /**
     * Vue lifecycle.
     */
    public unmounted(): void {
        if (this.mutationObserverUnsubscribeFn !== null) {
            this.mutationObserverUnsubscribeFn();
        }
        /**
         * Ugly fix to give time to the transition to execute before destroying popper.
         * @see https://github.com/vuejs/core/issues/5685
         * @see https://github.com/vuejs/core/issues/994
         */
        window.setTimeout(() => {
            this.destroyPopper();
        }, 2000);
    }

    private doUpdate(): void {
        const newTarget = this.resolveTarget();
        if (newTarget !== null) {
            if (this.options.enabled) {
                this.attach(this.el, newTarget);
            } else {
                this.destroyPopper();
            }
        } else {
            // If the target is not found in the DOM, destroy the existing popper if there is one and
            // observer DOM changes in the look for the target.
            if (this.target !== null) {
                this.destroyPopper();
            }
            if (this.bindings.modifiers.observe || this.bindings.modifiers.ref) {
                this.observe();
            }
        }
        this.target = newTarget;
    }

    /**
     * Here we have a reference on both the sticking element and the target,
     * so we can do the actual sticking thing.
     */
    private attach(floatingEl: HTMLElement, targetEl: HTMLElement): void {
        let existingPosition: string = floatingEl.style.position;
        if (existingPosition !== 'fixed' && existingPosition !== 'absolute') {
            floatingEl.style.position = 'absolute';
            existingPosition = 'absolute';
        }
        const popperOptions = Object.assign({
            strategy: existingPosition as PositioningStrategy
        }, (isObject(this.options) && isObject(this.options.popper)) ? this.options.popper : {})

        // Only create a new popper if the target has changed
        if (this.target !== targetEl || !this.popper) {
            this.destroyPopper();
            this.popper = createPopper(targetEl, floatingEl, popperOptions);

            // The forceUpdate() reduces glitches when the target changes very quickly
            // and the floating element transform is animated.
            this.popper.forceUpdate();
            this.observeTargetSize(targetEl);
        } else {
            this.popper.setOptions(popperOptions).catch(console.error);
        }
        window.setTimeout(() => {
            if (this.popper) {
                this.popper.forceUpdate();
            }
        });
    }

    /**
     * Try to resolve the target using the current value of the binding.
     */
    private resolveTarget(): HTMLElement|null {
        let target = this.options.target;
        if (target instanceof HTMLElement) {
            return target;
        }
        if (!isString(target)) {
            return null;
        }
        if (!this.bindings.modifiers.ref) {
            target = trim(target);
            if (target[0] === '#') {
                return window.document.documentElement.querySelector(target);
            }
            return this.el.parentElement !== null ? this.el.parentElement.querySelector(target) : null;
        }
        if (isObject(this.el.__vueParentComponent) && isObject(this.el.__vueParentComponent.ctx)) {
            let $parent = this.el.__vueParentComponent.ctx;
            do {
                let candidate = isObject($parent.$refs) ? $parent.$refs[target] : null;
                if (!isNullOrUndefined(candidate) && candidate.$el instanceof HTMLElement) {
                    return candidate.$el;
                }
                $parent = $parent.$parent;
            } while ($parent);
        }
        return null;
    }

    /**
     * Observe the DOM for changes and call `resolveTarget` again each time a change is detected.
     */
    private observe(): void {
        if (this.mutationObserverUnsubscribeFn !== null) {
            return ;
        }
        this.mutationObserverUnsubscribeFn = StickToDirective.Observe(throttle(() => {
            const newTarget = this.resolveTarget();
            if (newTarget !== null) {
                if (this.mutationObserverUnsubscribeFn !== null) {
                    this.mutationObserverUnsubscribeFn();
                    this.mutationObserverUnsubscribeFn = null;
                }
                if (newTarget !== this.target) {
                    this.target = newTarget;
                    this.attach(this.el, this.target);
                }
            }
        }, 50));
    }

    /**
     * Observe the target resize to force Popper to update if a change is detected.
     */
    private observeTargetSize(target: HTMLElement): void {
        this.sizeObserverUnsubscribeFn = useResizeObserver(target, () => {
            if (this.popper) {
                this.popper.forceUpdate();
            }
        }).stop;
    }

    /**
     * Create a options object for Popper from the bindings value.
     */
    private resolveOptions(bindings: DirectiveBinding): OptionsInterface {
        let options = isFunction(bindings.value) ? bindings.value() : bindings.value;
        if (options instanceof HTMLElement || !isObject(options)) {
            return {target: options, enabled: this.options ? this.options.enabled : true};
        }
        options = cloneDeepPrimitive(options);
        options.popper = extend(cloneDeepPrimitive(this.options || {}), [{
            enabled: options.enabled || true,
            placement: options.placement || 'bottom'
        }, options.popper || {}]);
        if (isUndefined(options.enabled)) {
            options.enabled = this.options ? this.options.enabled : true;
        }
        return options;
    }

    /**
     * Destroy the Popper instance if it exists.
     */
    private destroyPopper(): void {
        if (this.sizeObserverUnsubscribeFn !== null) {
            this.sizeObserverUnsubscribeFn();
        }
        if (this.popper !== null) {
            this.popper.destroy();
            this.popper = null;
        }
    }

    /**
     * Create a MutationObserver statically so only one observer ever exist
     * for any number of uses of the directive.
     *
     * The observer is automatically destroyed when not needed anymore.
     */
    private static Observe(callback: VoidCallback): VoidCallback {
        if (StickToDirective.Observer === null) {
            StickToDirective.Observer = new MutationObserver(() => {
                for (const listener of StickToDirective.ObserverListeners) {
                    listener();
                }
            });
            StickToDirective.Observer.observe(window.document.documentElement, {
                childList: true,
                attributes: false,
                characterData: false,
                subtree: true,
                attributeOldValue: false,
                characterDataOldValue: false
            });
        }
        StickToDirective.ObserverListeners.push(callback);
        return () => {
            const pos = StickToDirective.ObserverListeners.indexOf(callback);
            if (pos > -1) {
                StickToDirective.ObserverListeners.splice(pos, 1);
                if (!StickToDirective.ObserverListeners.length) {
                    if (StickToDirective.Observer !== null) {
                        StickToDirective.Observer.disconnect();
                    }
                    StickToDirective.Observer = null;
                }
            }
        };
    }
}
