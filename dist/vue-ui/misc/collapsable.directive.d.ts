import { DirectiveBinding } from "vue";
/**
 * A directive to animate the collapsing of an element to 0 height.
 */
export declare class CollapsableDirective {
    private el;
    private bindings;
    /**
     * Control the visibility of the content wrapper.
     */
    private collapsed;
    /**
     * Holds the current state of the transition.
     */
    private transitioning;
    private timerId;
    private lastKnownAttributes;
    private transitionDuration;
    private placeholder;
    /**
     * Vue lifecycle.
     */
    mounted(el: HTMLElement, bindings: DirectiveBinding): void;
    /**
     * Vue lifecycle.
     */
    updated(el: HTMLElement, bindings: DirectiveBinding): void;
    /**
     * Vue lifecycle.
     */
    unmounted(): void;
    /**
     * Expand the wrapper to make the content visible.
     */
    private open;
    /**
     * Collapse the wrapper to hide the content.
     */
    private close;
    /**
     * Get the current height of the content in px.
     */
    private measureContentHeight;
    /**
     * Parse the transition durations so we can replace the one targeting the "height".
     */
    private parseTransitionDuration;
    /**
     * Save the current values of the styles that we'll override.
     */
    private saveState;
    /**
     * Restore the overridden styles to their original value.
     */
    private restoreState;
}
