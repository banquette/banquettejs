import { ComponentAwareComposable } from "@banquette/vue-typescript/component-aware.composable";
import { Vue } from "@banquette/vue-typescript/vue";
import { PopoverConfigurationInterface } from "./popover-configuration.interface";
export declare class PopoverComposable extends ComponentAwareComposable<Vue> {
    private static SHOW_EVENTS_MAP;
    /**
     * Custom target element.
     */
    target: Element | string;
    /**
     * Content of the popover.
     */
    content: string | null;
    /**
     * If `true`, the HTML containing in the `content` prop will be interpreted.
     */
    allowHtml: boolean;
    /**
     * Position of the popover relative to its target.
     */
    placement: string;
    /**
     * If `true`, show the arrow.
     */
    showArrow: boolean;
    /**
     * Control the visibility of the popover.
     * If `null` (the default behavior), the visibility is controlled by events sets on the targets elements.
     * These events can be configured using the `showOn` and `hideOn` props.
     *
     * Note that this prop takes priority over every other way to show/hide the popover.
     * Meaning that if visible is `true` for example, calling hide() will do nothing.
     */
    visible: boolean | null;
    /**
     * Defines the type of event listeners to add on the targets to make the popover visible.
     *
     * Possible values are:
     *
     *   - mouseenter: will show the popover when the mouse enters one of its targets
     *   - click: will show the popover when a click is made on one of its targets
     *   - focus: will show the popover when one of its targets take the focus
     *
     * If no value is set to `hideOn`, an inverse event will automatically be set for each on the above,
     * to hide the popover:
     *
     *   - mouseenter: will set a `mouseleave` event as well
     *   - click: will toggle the popover and hide the popover when clicking outside of it
     *   - focus: will set `blur` event as well
     */
    showOn: string[];
    /**
     * Defines the type of event listeners to add on the targets to make the popover disappear.
     *
     * Possible values are:
     *   - mouseleave: automatically set when `showOn` is set to `mouseenter` and `hideOn` is `null`
     *   - click: hide the popover when clicking on the target
     *   - click-outside: hide the popover when clicking outside of any of its targets
     *   - mousedown-outside: hide the popover when a mousedown event is triggered outside of any of its targets
     *   - blur: hide the popover on the `blur` event of the focused target
     */
    hideOn: string[] | null;
    /**
     * Time to wait in milliseconds before showing the popover when its visibility becomes `true` through a DOM event.
     *
     * Note:
     * Calling `show()` manually will make the popover visible immediately.
     * The delay only applies to DOM events.
     */
    showDelay: number | Record<string, number>;
    /**
     * Time to wait in milliseconds before hiding the popover when its visibility becomes `false` through a DOM event.
     *
     * Note:
     * Calling `hide()` manually will make the popover visible immediately.
     * The delay only applies to DOM events.
     */
    hideDelay: number | Record<string, number>;
    /**
     * If `true`, the popover will remain visible while the mouse is over its content.
     */
    interactive: boolean;
    /**
     * Enable/disable the `flip` modifier of Popper.
     */
    flip: boolean;
    /**
     * Enable/disable the `preventOverflow` modifier of Popper.
     */
    preventOverflow: boolean;
    /**
     * Enable/disable the `computeStyles` modifier of Popper.
     */
    computeStyles: boolean;
    /**
     * An HTML element or selector to teleport the popover into.
     */
    teleport: Element | string | 'auto' | null;
    /**
     * The z-index to apply on the floating element.
     */
    zIndex: number | 'auto' | null;
    /**
     * To translate the popover from its original position.
     * Example:
     *
     *   - [20, 0]: The popper is offset 20px along the reference.
     *   - [0, 20]: The popper is offset 20px away from the reference.
     *   - 20: translates to [0, 20].
     */
    offset: [number, number] | null;
    /**
     * Custom options object directly passed to PopperJS.
     *
     * Beware, internal modifiers will be overridden if defined here,
     * making the following props inoperative: `showArrow`, `offset`.
     */
    popperOptions: any;
    /**
     * The final configuration object, ready to use by the host component.
     */
    config: PopoverConfigurationInterface;
    private targets;
    private activeTarget;
    private unsubscribeFunctions;
    private scheduledVisibilityChange;
    private popoverEl;
    beforeUnmount(): void;
    /**
     * Make the popover visible.
     */
    show(): void;
    /**
     * Hide the popover.
     */
    hide(): void;
    /**
     * Copy applicable props into the view data.
     */
    protected updateBaseConfig(): void;
    /**
     * Create a new options object that will be given to the `bt-stick-to` directive.
     */
    protected updateStickToOptions(): void;
    /**
     * Update the events listeners that will control the popover visibility.
     */
    protected updateEvents(): void;
    /**
     * Bind events that will retain the visibility of the popover even after it has left the target element.
     * Only used if the popover is interactive.
     */
    private bindInteractionRetainers;
    /**
     * Bind an event to an element that will show the popover when triggered.
     */
    private registerShowEvent;
    /**
     * Bind an event to an element that will hide the popover when triggered.
     */
    private registerHideEvent;
    /**
     * Try to resolve the HTML element on which the popover should be attached.
     */
    private resolveTarget;
    /**
     * Add an event listener to an element and handle its de-registration.
     */
    private addEventListener;
    /**
     * Unregister all events listeners.
     */
    private clearEventsListeners;
    /**
     * Schedule a call to `show()` or `hide()` after a certain delay.
     * If `delay` is `0`, the call is made immediately and synchronously.
     */
    private scheduleVisibilityChange;
}
