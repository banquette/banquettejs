import { parseCssDuration } from "@banquette/utils-dom";
import { Directive } from "@banquette/vue-typescript";
import { DirectiveBinding } from "vue";

interface TransitionDuration {
    originalValue: string;
    pattern: string;
    heightRaw: string;
    heightMs: number;
}

/**
 * A directive to animate the collapsing of an element to 0 height.
 */
@Directive('bt-collapsable')
export class CollapsableDirective {
    private el!: HTMLElement & {__vueParentComponent?: any};
    private bindings!: DirectiveBinding;

    /**
     * Control the visibility of the content wrapper.
     */
    private collapsed!: boolean;

    /**
     * Holds the current state of the transition.
     */
    private transitioning: 'up'|'down'|false = false;
    private timerId: number|null = null;
    private lastKnownAttributes = {
        targetHeight: 0,
        height: '',
        position: '',
        overflow: '',
        opacity: ''
    };

    private transitionDuration: TransitionDuration|null = null;
    private placeholder!: HTMLElement;

    /**
     * Vue lifecycle.
     */
    public mounted(el: HTMLElement, bindings: DirectiveBinding) {
        this.placeholder = document.createElement(el.tagName);
        this.placeholder.style.overflow = 'hidden';
        this.placeholder.style.height = '0px';
        this.placeholder.style.opacity = '0';
        this.placeholder.style.visibility = 'hidden';
        this.updated(el, bindings);
    }

    /**
     * Vue lifecycle.
     */
    public updated(el: HTMLElement, bindings: DirectiveBinding) {
        this.el = el;
        this.bindings = bindings;
        if (this.bindings.value?.opened) {
            this.open();
        } else {
            this.close();
        }
    }

    /**
     * Vue lifecycle.
     */
    public unmounted(): void {
        if (this.timerId) {
            window.clearTimeout(this.timerId);
            this.timerId = null;
        }
        this.placeholder.remove();
    }

    /**
     * Expand the wrapper to make the content visible.
     */
    private open(): void {
        if (this.transitioning === 'down' || (this.transitioning === false && !this.collapsed)) {
            return ;
        }
        if (this.timerId !== null) {
            window.clearTimeout(this.timerId);
            this.timerId = null;
        }

        // Parse the transition durations so we can replace the one targeting the "height".
        this.transitionDuration = this.parseTransitionDuration(this.el);

        // If no transition animation is defined, just instantly show the element.
        if (!this.transitionDuration || this.transitionDuration.heightMs <= 0) {
            this.collapsed = false;
            this.transitioning = false;
            this.restoreState(this.el);
            return ;
        }

        // If we are not transitioning, we can assume the element is collapsed and invisible, so we need to measure its height.
        // If we don't know its height from a previous measurement, we need to measure it too.
        const isTransitioning = this.transitioning;
        let parentPosition: string = '';

        // Prepare the height measurement by making the element invisible and not colliding with the rest of the DOM.
        if (!isTransitioning) {
            if (this.el.parentNode instanceof HTMLElement) {
                parentPosition = this.el.parentNode.style.position;
                this.el.parentNode.style.position = 'relative';
            }
            // Insert a placeholder to keep something in the document flow in the hope to
            // disturb as little as possible the rendering while the real element is absolute.
            this.el.parentNode!.insertBefore(this.placeholder, this.el);

            // Set the element as absolute and invisible so we can let it get its normal height, that we'll measure next.
            this.el.style.position = 'absolute';
            this.el.style.opacity = '0';
            if (this.transitionDuration) {
                // Set a very low transition duration but not 0 so the browser doesn't totally remove it.
                // That is done in the hope the transition becomes available more quickly when we set back the original duration.
                this.el.style.transitionDuration = this.transitionDuration.pattern.replace('{d}', '0.001s');
            }
        }
        this.transitioning = 'down';
        if (!isTransitioning) {
            this.el.style.height = this.lastKnownAttributes.height;
            this.el.style.overflow = this.lastKnownAttributes.overflow;
        }
        // Wait a cycle so the browser has the time to compute and render the new styles.
        this.timerId = window.setTimeout(() => {
            let targetHeight = this.lastKnownAttributes.targetHeight;

            // Now we can measure the height of the element.
            // But only do so if we are not already in a transition.
            if (!isTransitioning) {
                targetHeight = this.measureContentHeight();

                if (this.el.parentNode instanceof HTMLElement) {
                    this.el.parentNode.style.position = parentPosition;
                }

                // Remove the placeholder as the element will come back into the document flow.
                this.placeholder.remove();
                this.el.style.height = '0px';
                this.el.style.overflow = 'hidden';
                this.el.style.position = this.lastKnownAttributes.position;
                this.el.style.opacity = this.lastKnownAttributes.opacity;
            }

            this.timerId = window.setTimeout(() => {
                if (this.transitionDuration) {
                    this.el.style.transitionDuration = this.transitionDuration.originalValue;
                }
                // Wait a long time to ensure the CSS transition is used when we set the height.
                // Transitions can take an arbitrary amount of time to be used so the browser can
                // start multiple transitions together.
                this.timerId = window.setTimeout(() => {
                    this.el.style.height = targetHeight + 'px';

                    // Wait for the transition to finish.
                    this.timerId = window.setTimeout(() => {
                        this.restoreState(this.el);
                        this.collapsed = false;
                        this.timerId = null;
                        this.transitioning = false;
                        this.el.dispatchEvent(new CustomEvent('collapsable-change', {detail: true}));
                    }, this.transitionDuration?.heightMs || 0);
                }, 50);
            });
        });
    }

    /**
     * Collapse the wrapper to hide the content.
     */
    private close(): void {
        if (this.transitioning === 'up'|| (this.transitioning === false && this.collapsed)) {
            return ;
        }
        if (this.timerId !== null) {
            window.clearTimeout(this.timerId);
            this.timerId = null;
        }
        // Only if we are not transitioning yet, save the current state, so we can restore it later.
        if (!this.transitioning) {
            this.saveState(this.el);

            // Ensure the height is set to the current height of the element, in px.
            this.lastKnownAttributes.targetHeight = this.measureContentHeight();
            this.el.style.height = this.lastKnownAttributes.targetHeight + 'px';
        }

        // Mark that we are now transitioning down.
        this.transitioning = 'up';

        // Hide the overflow.
        this.el.style.overflow = 'hidden';

        // Wait a cycle so the browser has the time to compute and render the new styles.
        this.timerId = window.setTimeout(() => {
            // Put the height to 0. The CSS transition will animate it.
            this.el.style.height = '0px';

            // Wait for the transition to finish.
            this.timerId = window.setTimeout(() => {
                this.collapsed = true;
                this.timerId = null;
                this.transitioning = false;
                this.el.dispatchEvent(new CustomEvent('collapsable-change', {detail: false}));
            }, this.transitionDuration?.heightMs || 0);
        }, 50);
    }

    /**
     * Get the current height of the content in px.
     */
    private measureContentHeight(): number {
        if (this.el) {
            return this.el.getBoundingClientRect().height;
        }
        return 0;
    }

    /**
     * Parse the transition durations so we can replace the one targeting the "height".
     */
    private parseTransitionDuration(el: HTMLElement): TransitionDuration|null {
        const cs = getComputedStyle(el);
        const properties = cs.transitionProperty.split(',');

        let i = properties.length;
        while (--i >= 0 && properties[i] !== 'height' && properties[i] !== 'all');
        if (i < properties.length) {
            const durations = cs.transitionDuration.split(',');
            if (durations.length > i) {
                const raw = durations[i];
                durations[i] = '{d}';
                return {
                    originalValue: cs.transitionDuration,
                    heightRaw: raw,
                    heightMs: parseCssDuration(raw),
                    pattern: durations.join(',')
                };
            }
        }
        return null;
    }

    /**
     * Save the current values of the styles that we'll override.
     */
    private saveState(el: HTMLElement): void {
        this.lastKnownAttributes.height = el.style.height;
        this.lastKnownAttributes.overflow =  el.style.overflow;
        this.lastKnownAttributes.position = el.style.position;
        this.lastKnownAttributes.opacity = el.style.opacity;
    }

    /**
     * Restore the overridden styles to their original value.
     */
    private restoreState(el: HTMLElement): void {
        el.style.height = this.lastKnownAttributes.height;
        el.style.overflow = this.lastKnownAttributes.overflow;
        el.style.position = this.lastKnownAttributes.position;
        el.style.opacity = this.lastKnownAttributes.opacity;
    }
}
