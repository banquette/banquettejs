import { throttle } from "@banquette/utils-misc/throttle";
import { extend } from "@banquette/utils-object/extend";
import { trim } from "@banquette/utils-string/format/trim";
import { isFunction } from "@banquette/utils-type/is-function";
import { isNullOrUndefined } from "@banquette/utils-type/is-null-or-undefined";
import { isObject } from "@banquette/utils-type/is-object";
import { isString } from "@banquette/utils-type/is-string";
import { GenericCallback, VoidCallback } from "@banquette/utils-type/types";
import { Directive } from "@banquette/vue-typescript/decorator/directive.decorator";
import { createPopper, PositioningStrategy, Instance, OptionsGeneric } from "@popperjs/core";
import { DirectiveBinding } from "vue";

interface OptionsInterface {
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

    private target: HTMLElement|null = null;
    private unsubscribe: VoidCallback|null = null;
    private popper: Instance|null = null;

    /**
     * Vue lifecycle.
     */
    public mounted(el: HTMLElement, bindings: DirectiveBinding) {
        this.updated(el, bindings);
    }

    /**
     * Vue lifecycle.
     */
    public updated(el: HTMLElement, bindings: DirectiveBinding) {
        this.el = el;
        this.bindings = bindings;
        const newTarget = this.resolveTarget();
        if (newTarget !== null) {
            this.attach(this.el, newTarget);
        } else {
            if (this.target !== null) {
                this.destroyPopper();
            }
            if (bindings.modifiers.observe || bindings.modifiers.ref) {
                this.observe();
            }
        }
        this.target = newTarget;
    }

    /**
     * Vue lifecycle.
     */
    public unmounted(): void {
        if (this.unsubscribe !== null) {
            this.unsubscribe();
        }
        this.destroyPopper();
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
        this.destroyPopper();
        const options = this.getOptions();
        this.popper = createPopper(targetEl, floatingEl, Object.assign({
            strategy: existingPosition as PositioningStrategy
        }, (isObject(options) && isObject(options.popper)) ? options.popper : {}));
    }

    /**
     * Try to resolve the target using the current value of the binding.
     */
    private resolveTarget(): HTMLElement|null {
        let target = this.getOptions().target;
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
        if (this.unsubscribe !== null) {
            return ;
        }
        this.unsubscribe = StickToDirective.Observe(throttle(() => {
            const newTarget = this.resolveTarget();
            if (newTarget !== null) {
                if (this.unsubscribe !== null) {
                    this.unsubscribe();
                    this.unsubscribe = null;
                }
                if (newTarget !== this.target) {
                    this.target = newTarget;
                    this.attach(this.el, this.target);
                }
            }
        }, 50));
    }

    private getOptions(): OptionsInterface {
        const options = isFunction(this.bindings.value) ? this.bindings.value() : this.bindings.value;
        if (options instanceof HTMLElement || !isObject(options)) {
            return {target: options};
        }
        options.popper = extend({
            placement: options.placement || 'bottom'
        }, options.popper || {})
        return options;
    }

    /**
     * Destroy the Popper instance if it exists.
     */
    private destroyPopper(): void {
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
