import { areEqual } from "@banquette/utils-misc";
import { proxy } from "@banquette/utils-misc";
import { throttle } from "@banquette/utils-misc";
import { cloneDeepPrimitive } from "@banquette/utils-object";
import { trim } from "@banquette/utils-string";
import { isArray } from "@banquette/utils-type";
import { isFunction } from "@banquette/utils-type";
import { isNullOrUndefined } from "@banquette/utils-type";
import { isObject } from "@banquette/utils-type";
import { isString } from "@banquette/utils-type";
import { isUndefined } from "@banquette/utils-type";
import { GenericCallback, VoidCallback } from "@banquette/utils-type";
import { Directive } from "@banquette/vue-typescript";
import { createPopper, PositioningStrategy, Instance, OptionsGeneric } from "@popperjs/core";
import { useResizeObserver } from "@vueuse/core";
import { DirectiveBinding } from "vue";

interface OptionsInterface {
    enabled: boolean;
    target: Element|string;
    placement?: PositioningStrategy;
    offset?: [number, number];
    popper?: Partial<OptionsGeneric<any>>;
    forceUpdate?: () => void;
}

/**
 * A unique mutation observer common to all instances.
 */
let Observer: MutationObserver|null = null;
const ObserverListeners: GenericCallback[] = [];

/**
 * A directive to make an element float around another.
 */
@Directive('bt-stick-to')
export class StickToDirective {
    private el!: HTMLElement & {__vueParentComponent?: any};
    private bindings!: DirectiveBinding;
    private options!: OptionsInterface;

    private target: Element|null = null;
    private mutationObserverUnsubscribeFn: VoidCallback|null = null;
    private sizeObserverUnsubscribeFns: VoidCallback[] = [];
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
        this.el = el;
        this.bindings = bindings;
        const newOptions = this.resolveOptions(bindings);
        if (!areEqual(this.options || {}, newOptions)) {
            this.options = newOptions;
            bindings.value.forceUpdate = proxy(this.forceUpdate, this);
            this.doUpdate();
        }
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
        setTimeout(() => {
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
    private attach(floatingEl: HTMLElement, targetEl: Element): void {
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
            if (targetEl instanceof HTMLElement) {
                this.observeTargetSize(targetEl);
            }
            this.observeTargetSize(floatingEl);
        } else {
            this.popper.setOptions(popperOptions).catch(console.error);
        }
        setTimeout(() => {
            if (this.popper) {
                this.popper.forceUpdate();
            }
        });
    }

    /**
     * Try to resolve the target using the current value of the binding.
     */
    private resolveTarget(): Element|null {
        let target = this.options.target;
        if (target instanceof Element) {
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
                if (!isNullOrUndefined(candidate) && candidate.$el instanceof Element) {
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
        this.sizeObserverUnsubscribeFns.push(useResizeObserver(target, () => {
            if (this.popper) {
                this.popper.forceUpdate();
            }
        }).stop);
    }

    /**
     * Create a options object for Popper from the bindings value.
     */
    private resolveOptions(bindings: DirectiveBinding): OptionsInterface {
        let options = isFunction(bindings.value) ? bindings.value() : bindings.value;
        if (options instanceof Element || !isObject(options)) {
            return {target: options, enabled: this.options ? this.options.enabled : true};
        }
        options = cloneDeepPrimitive(options);
        options.placement = options.placement || 'bottom';
        options.popper = options.popper || {};
        options.forceUpdate = this.options ? this.options.forceUpdate : () => this.forceUpdate();
        if (isUndefined(options.popper.placement)) {
            options.popper.placement = options.placement;
        }
        if (!isUndefined(options.offset)) {
            if (!isArray(options.popper.modifiers)) {
                options.popper.modifiers = [];
            }
            options.popper.modifiers.push({
                name: 'offset',
                options: {
                    offset: options.offset
                }
            });
        }
        if (isUndefined(options.enabled)) {
            options.enabled = this.options ? this.options.enabled : true;
        }
        return options;
    }

    /**
     * Destroy the Popper instance if it exists.
     */
    private destroyPopper(): void {
        for (const fn of this.sizeObserverUnsubscribeFns) {
            fn();
        }
        this.sizeObserverUnsubscribeFns = [];
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
        if (Observer === null) {
            Observer = new MutationObserver(() => {
                for (const listener of ObserverListeners) {
                    listener();
                }
            });
            Observer.observe(window.document.documentElement, {
                childList: true,
                attributes: false,
                characterData: false,
                subtree: true,
                attributeOldValue: false,
                characterDataOldValue: false
            });
        }
        ObserverListeners.push(callback);
        return () => {
            const pos = ObserverListeners.indexOf(callback);
            if (pos > -1) {
                ObserverListeners.splice(pos, 1);
                if (!ObserverListeners.length) {
                    if (Observer !== null) {
                        Observer.disconnect();
                    }
                    Observer = null;
                }
            }
        };
    }
}
