import { noop } from "@banquette/utils-misc/noop";
import { trim } from "@banquette/utils-string/format/trim";
import { ensureArray } from "@banquette/utils-type/ensure-array";
import { isArray } from "@banquette/utils-type/is-array";
import { isNumber } from "@banquette/utils-type/is-number";
import { isObject } from "@banquette/utils-type/is-object";
import { isString } from "@banquette/utils-type/is-string";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { VoidCallback } from "@banquette/utils-type/types";
import { ComponentAwareComposable } from "@banquette/vue-typescript/component-aware.composable";
import { Composable } from "@banquette/vue-typescript/decorator/composable.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Lifecycle } from "@banquette/vue-typescript/decorator/lifecycle.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript/decorator/watch.decorator";
import { Vue } from "@banquette/vue-typescript/vue";
import { PopoverConfigurationInterface } from "./popover-configuration.interface";

@Composable()
export class PopoverComposable extends ComponentAwareComposable<Vue> {
    private static SHOW_EVENTS_MAP: Record<string, {show: string, hide: string}> = {
        'hover': {show: 'mouseenter', hide: 'mouseleave'},
        'mousedown': {show: 'mousedown', hide: 'mousedown-outside'},
        'click': {show: 'click', hide: 'click-outside'},
        'focus': {show: 'focus', hide: 'blur'}
    };

    /**
     * Custom target element.
     */
    @Prop({type: [String, Object], default: null}) public target!: HTMLElement|string;

    /**
     * Content of the popover.
     */
    @Prop({type: String, default: null}) public content!: string|null;

    /**
     * If `true`, the HTML containing in the `content` prop will be interpreted.
     */
    @Prop({type: Boolean, default: false}) public allowHtml!: boolean;

    /**
     * Position of the popover relative to its target.
     */
    @Prop({type: String, default: 'top'}) public placement!: string;

    /**
     * If `true`, show the arrow.
     */
    @Prop({type: Boolean, default: true}) public showArrow!: boolean;

    /**
     * Control the visibility of the popover.
     * If `null` (the default behavior), the visibility is controlled by events sets on the targets elements.
     * These events can be configured using the `showOn` and `hideOn` props.
     *
     * Note that this prop takes priority over every other way to show/hide the popover.
     * Meaning that if visible is `true` for example, calling hide() will do nothing.
     */
    @Prop({type: Boolean, default: null}) public visible!: boolean|null;

    /**
     * Defines the type of event listeners to add on the targets to make the popover visible.
     *
     * Possible values are:
     *
     *   - hover: will show the popover when the mouse enters one of its targets
     *   - click: will show the popover when a click is made on one of its targets
     *   - focus: will show the popover when one of its targets take the focus
     *
     * If no value is set to `hideOn`, an inverse event will automatically be set for each on the above,
     * to hide the popover:
     *
     *   - hover: will set a `mouseleave` event as well
     *   - click: will toggle the popover and hide the popover when clicking outside of it
     *   - focus: will set `blur` event as well
     */
    @Prop({type: [Array, String], default: 'hover', validate: (v: any) => {
        if (isString(v)) {
            return v.split(',').map((i) => trim(i))
        }
        return ensureArray(v);
    }}) public showOn!: string[];


    /**
     * Defines the type of event listeners to add on the targets to make the popover disappear.
     *
     * Possible values are:
     *   - mouseleave: automatically set when `showOn` is set to `hover` and `hideOn` is `null`
     *   - click: hide the popover when clicking on the target
     *   - click-outside: hide the popover when clicking outside of any of its targets
     *   - mousedown-outside: hide the popover when a mousedown event is triggered outside of any of its targets
     *   - blur: hide the popover on the `blur` event of the focused target
     */
    @Prop({type: [Array, String], default: null, validate: (v: any) => {
        if (v === null) {
            return null;
        }
        if (isString(v)) {
            return v.split(',').map((i) => trim(i))
        }
        return ensureArray(v);
    }}) public hideOn!: string[]|null;

    /**
     * Time to wait in milliseconds before showing the popover when its visibility becomes `true` through a DOM event.
     *
     * Note:
     * Calling `show()` manually will make the popover visible immediately.
     * The delay only applies to DOM events.
     */
    @Prop({type: [Object, Number], default: 0}) public showDelay!: number|Record<string, number>;

    /**
     * Time to wait in milliseconds before hiding the popover when its visibility becomes `false` through a DOM event.
     *
     * Note:
     * Calling `hide()` manually will make the popover visible immediately.
     * The delay only applies to DOM events.
     */
    @Prop({type: [Object, Number], default: {mouseleave: 200}}) public hideDelay!: number|Record<string, number>;

    /**
     * If `true`, the popover will remain visible while the mouse is over its content.
     * This only
     */
    @Prop({type: Boolean, default: false}) public interactive!: boolean;

    /**
     * An HTML element or selector to teleport the popover into.
     */
    @Prop({type: [Object, String], default: 'body'}) public teleport!: HTMLElement|string|null;

    /**
     * To translate the popover from its original position.
     * Example:
     *
     *   - [20, 0]: The popper is offset 20px along the reference.
     *   - [0, 20]: The popper is offset 20px away from the reference.
     *   - 20: translates to [0, 20].
     */
    @Prop({type: [Array, Number], default: [0, 10], validate: (v: any) => {
        if (v === null) {
            return null;
        }
        if (!isArray(v)) {
            return [0, parseInt(v, 10)];
        }
        return v;
    }}) public offset!: [number, number]|null;

    /**
     * The final configuration object, ready to use by the host component.
     */
    @Expose() public config: PopoverConfigurationInterface = {
        content         : null,
        allowHtml       : false,
        visible         : false,
        showArrow       : true,
        teleport        : null,
        stickToOptions  : {}
    };

    private targets: HTMLElement[] = [];
    private activeTarget: HTMLElement|null = null;
    private unsubscribeFunctions: Record<string, VoidCallback[]> = {};
    private scheduledVisibilityChange: {timerId: number|null, delay: number}|null = null;
    private popoverEl: HTMLElement|null = null;

    @Lifecycle('beforeUnmount')
    public beforeUnmount(): void {
        this.clearEventsListeners();
        if (this.scheduledVisibilityChange !== null && this.scheduledVisibilityChange.timerId) {
            window.clearTimeout(this.scheduledVisibilityChange.timerId);
        }
    }

    /**
     * Make the popover visible.
     */
    @Expose() public show(): void {
        if (this.config.visible) {
            return ;
        }
        this.config.visible = true;

        if (this.interactive) {
            // Wait for the next tick so the template has time to update and the reference to be assigned.
            this.component.$nextTick(() => {
                if (this.component.$refs.popover instanceof HTMLElement) {
                    this.bindInteractionRetainers(this.component.$refs.popover);
                }
            });
        }
    }

    /**
     * Hide the popover.
     */
    @Expose() public hide(): void {
        this.config.visible = false;
        this.clearEventsListeners('retainers');
    }

    /**
     * Copy applicable props into the view data.
     */
    @Watch(['content', 'visible', 'allowHtml', 'showArrow', 'teleport'], {immediate: ImmediateStrategy.NextTick})
    protected updateBaseConfig(): void {
        this.config.content = this.content;
        this.config.showArrow = this.showArrow;
        this.config.allowHtml = this.allowHtml;
        this.config.teleport = this.teleport;

        // Meaning "if the control of the visibility is direct from the outside".
        if (this.visible !== null) {
            this.config.visible = this.visible;
        }
    }

    /**
     * Create a new options object that will be given to the `bt-stick-to` directive.
     */
    @Watch(['target', 'placement', 'offset'], {immediate: ImmediateStrategy.NextTick})
    protected updateStickToOptions(): void {
        const targetsCandidates = (isString(this.target) ? this.target.split(',') : ensureArray(this.target)).map((i) => trim(i));
        if (!targetsCandidates.length && this.component.$el && this.component.$el.parentElement instanceof HTMLElement) {
            this.targets = [this.component.$el.parentElement];
        } else {
            this.targets = [];
            for (const candidate of targetsCandidates) {
                const resolved = this.resolveTarget(candidate);
                if (resolved !== null) {
                    this.targets = this.targets.concat(resolved);
                }
            }
        }
        // So values not defined anymore will be dropped.
        this.config.stickToOptions = {
            placement: this.placement,
            target: this.activeTarget || this.targets[0] || null,
            popper: {
                modifiers: [{
                    name: 'preventOverflow',
                    options: {
                        altAxis: true
                    }
                }, {
                    name: 'computeStyles',
                    options: {
                        adaptive: false
                    },
                }]
            }
        };
        if (this.offset !== null) {
            this.config.stickToOptions.popper.modifiers.push({
                name: 'offset',
                options: {
                    offset: this.offset
                }
            });
        }
        if (this.showArrow) {
            this.config.stickToOptions.popper.modifiers.push({
                name: "arrow",
                options: {
                    padding: 10
                }
            });
        }
    }

    /**
     * Update the events listeners that will control the popover visibility.
     */
    @Watch(['target', 'visible'], {immediate: ImmediateStrategy.NextTick})
    protected updateEvents(): void {
        this.clearEventsListeners();
        if (this.visible === null) {
            for (const target of this.targets) {
                for (const eventType of this.showOn) {
                    if (!isUndefined(PopoverComposable.SHOW_EVENTS_MAP[eventType])) {
                        this.registerShowEvent(target, PopoverComposable.SHOW_EVENTS_MAP[eventType].show);
                        if (this.hideOn === null) {
                            this.registerHideEvent(target, PopoverComposable.SHOW_EVENTS_MAP[eventType].hide);
                        }
                    }
                }
                if (this.hideOn !== null) {
                    for (const eventType of this.hideOn) {
                        this.registerHideEvent(target, eventType);
                    }
                }
            }
        }
    }

    /**
     * Bind events that will retain the visibility of the popover even after it has left the target element.
     * Only used if the popover is interactive.
     */
    private bindInteractionRetainers(element: HTMLElement): void {
        this.popoverEl = element;
        this.clearEventsListeners('retainers');
        this.addEventListener(this.popoverEl, 'mousedown', noop, 'retainers'); // noop because we only want the preventPropagation
        this.addEventListener(this.popoverEl, 'click', noop, 'retainers'); // noop because we only want the preventPropagation
        this.addEventListener(this.popoverEl, 'mouseenter', () => {
            if (this.scheduledVisibilityChange !== null && this.scheduledVisibilityChange.timerId) {
                window.clearTimeout(this.scheduledVisibilityChange.timerId);
                this.scheduledVisibilityChange.timerId = null;
            }
        }, 'retainers');
        this.addEventListener(this.popoverEl, 'mouseleave', () => {
            if (this.scheduledVisibilityChange !== null) {
                this.scheduledVisibilityChange.timerId = window.setTimeout(() => {
                    this.hide();
                    this.scheduledVisibilityChange = null;
                }, this.scheduledVisibilityChange.delay);
            }
        }, 'retainers');
    }

    /**
     * Bind an event to an element that will show the popover when triggered.
     */
    private registerShowEvent(target: HTMLElement, eventType: string): void {
        this.addEventListener(target, eventType, () => {
            // Switch the current target to the element on which the event occurred.
            if (this.config.stickToOptions.target !== target) {
                this.activeTarget = target;
                this.updateStickToOptions();
            }
            this.scheduleVisibilityChange(true, eventType);
        });
    }

    /**
     * Bind an event to an element that will hide the popover when triggered.
     */
    private registerHideEvent(target: HTMLElement, eventType: string): void {
        // Special case for *-outside events.
        if (eventType.substring(eventType.length - 8) === '-outside') {
            target = document.documentElement;
            eventType = eventType.substring(0, eventType.length - 8);
        }
        this.addEventListener(target, eventType, () => {
            this.scheduleVisibilityChange(false, eventType);
        });
    }

    /**
     * Try to resolve the HTML element on which the popover should be attached.
     */
    private resolveTarget(target: any): HTMLElement[]|null {
        if (target instanceof HTMLElement) {
            return [target];
        }
        if (isString(target) && isObject(this.component.$refs)) {
            let parent = this.component.$parent;
            while (parent) {
                const ref: any = parent.$refs[target];
                if (ref instanceof HTMLElement) {
                    return [ref];
                }
                if (isObject(ref) && ref.$el instanceof HTMLElement) {
                    return [ref.$el];
                }
                parent = parent.$parent;
            }
        }
        if (isString(target)) {
            const results: HTMLElement[] = [];
            const queryResults = document.querySelectorAll(target);
            for (const queryResult of queryResults as any) {
                if (queryResult instanceof HTMLElement) {
                    results.push(queryResult);
                }
            }
            if (results.length > 0) {
                return results;
            }
            console.warn(
                `Failed to resolve target string "${target}". `+
                `Please ensure it's a valid selector or ref name.`
            );
            return null;
        }
        return null;
    }

    /**
     * Add an event listener to an element and handle its de-registration.
     */
    private addEventListener(target: HTMLElement, eventType: string, callback: VoidCallback, group: string = 'default'): void {
        target.addEventListener(eventType, (event: Event) => {
            event.stopPropagation();
            callback();
        });
        if (isUndefined(this.unsubscribeFunctions[group])) {
            this.unsubscribeFunctions[group] = [];
        }
        this.unsubscribeFunctions[group].push(() => {
            target.removeEventListener(eventType, callback);
        });
    }

    /**
     * Unregister all events listeners.
     */
    private clearEventsListeners(group: string|null = null): void {
        for (const groupCandidate of Object.keys(this.unsubscribeFunctions)) {
            if (group === null || groupCandidate === group) {
                for (const fn of this.unsubscribeFunctions[groupCandidate]) {
                    fn();
                }
                delete this.unsubscribeFunctions[groupCandidate];
            }
        }
    }

    /**
     * Schedule a call to `show()` or `hide()` after a certain delay.
     * If `delay` is `0`, the call is made immediately and synchronously.
     */
    private scheduleVisibilityChange(visible: boolean, originEventType: string): void {
        if (this.scheduledVisibilityChange !== null && this.scheduledVisibilityChange.timerId) {
            window.clearTimeout(this.scheduledVisibilityChange.timerId);
        }
        const apply = () => {
            if (visible) {
                this.show();
            } else {
                this.hide();
            }
            this.scheduledVisibilityChange = null;
        };
        const delayHolder = visible ? this.showDelay : this.hideDelay;
        const delay = isNumber(delayHolder) ? delayHolder : (delayHolder[originEventType] || 0);
        if (delay > 0) {
            this.scheduledVisibilityChange = {
                timerId: window.setTimeout(apply, delay),
                delay
            };
        } else {
            apply();
        }
    }
}