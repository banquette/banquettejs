import { DirectiveBinding } from "vue";
/**
 * A directive to make an element float around another.
 */
export declare class StickToDirective {
    /**
     * A unique mutation observer common to all instances.
     */
    private static Observer;
    private static ObserverListeners;
    private el;
    private bindings;
    private options;
    private target;
    private mutationObserverUnsubscribeFn;
    private sizeObserverUnsubscribeFns;
    private popper;
    /**
     * Vue lifecycle.
     */
    mounted(el: HTMLElement, bindings: DirectiveBinding): void;
    forceUpdate(): void;
    /**
     * Vue lifecycle.
     */
    updated(el: HTMLElement, bindings: DirectiveBinding): void;
    /**
     * Vue lifecycle.
     */
    unmounted(): void;
    private doUpdate;
    /**
     * Here we have a reference on both the sticking element and the target,
     * so we can do the actual sticking thing.
     */
    private attach;
    /**
     * Try to resolve the target using the current value of the binding.
     */
    private resolveTarget;
    /**
     * Observe the DOM for changes and call `resolveTarget` again each time a change is detected.
     */
    private observe;
    /**
     * Observe the target resize to force Popper to update if a change is detected.
     */
    private observeTargetSize;
    /**
     * Create a options object for Popper from the bindings value.
     */
    private resolveOptions;
    /**
     * Destroy the Popper instance if it exists.
     */
    private destroyPopper;
    /**
     * Create a MutationObserver statically so only one observer ever exist
     * for any number of uses of the directive.
     *
     * The observer is automatically destroyed when not needed anymore.
     */
    private static Observe;
}
