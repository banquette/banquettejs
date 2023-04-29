<style src="./button.component.css" scoped></style>
<template src="./button.component.html" ></template>
<script lang="ts">
import { parseCssDuration } from "@banquette/utils-dom";
import { proxy } from "@banquette/utils-misc";
import { VoidCallback } from "@banquette/utils-type";
import { Component, Computed, Expose, Lifecycle, Prop, Ref, ThemeVar, Themeable, BindThemeDirective, Vue } from "@banquette/vue-typescript";
import { PropType } from "vue";
import { ClickOutsideDirective } from "../../misc/click-outside.directive";
import { BtProgressCircular } from "../../progress/progress-circular";
import { ThemeConfiguration } from "./theme-configuration";

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-button',
    components: [BtProgressCircular],
    directives: [ClickOutsideDirective, BindThemeDirective],
    emits: ['click']
})
export default class BtButton extends Vue {
    /**
     * The URL to redirect to when the button is clicked.
     * If defined, the root component will be a `<a>` instead of a `<button>`.
     */
    @Prop({type: String as PropType<string|null>, default: null}) public href!: string|null;

    /**
     * Define the "target" attribute of the root element.
     * Only applicable if `href` is defined and thus the root element is a `<a>`.
     */
    @Prop({type: String as PropType<string|null>, default: null}) public target!: string|null;

    /**
     * When `true`, the button is grayed out and non-interactive.
     */
    @Prop({type: Boolean, default: false}) public disabled!: boolean;

    /**
     * When `true` the button is disabled and indicates that it's doing something by replacing its content with a loader.
     */
    @Prop({type: Boolean, default: false}) public working!: boolean;

    /**
     * A text to show next to the loader when the button is working.
     */
    @Prop({type: String as PropType<string|null>, default: null}) public workingText!: string|null;

    /**
     * Percentage of progress to pass to the loader when the button is working.
     * If `null` (the default value), the loader progress is undetermined.
     */
    @Prop({type: Number as PropType<number|null>, default: null}) public workingProgress!: number|null;

    /**
     * External toggle status for the "toggle" slot.
     */
    @Prop({name: 'toggled', type: Boolean as PropType<boolean|null>, default: null}) public toggledProp!: boolean|null;

    /**
     * Name of the transition to apply when the toggle slot is shown / hidden.
     * If `false`, disable the transition.
     */
    @Prop({type: [String, Boolean] as PropType<string|false|undefined>, default: false}) public toggleTransition!: string|false|undefined;

    @ThemeVar({
        name: 'animation.clickDuration',
        defaultValue: '30ms',
        transform: function(v) { return parseCssDuration(v) }
    }) protected clickDuration!: number;

    @Expose() public active: boolean = false;

    @Computed() public get tagName(): string {
        return this.href !== null ? 'a' : 'button';
    }

    @Computed() public get hasToggleSlot(): boolean {
        return super.hasSlot('toggle');
    }

    @Computed() public get isToggleSlotVisible(): boolean {
        if (this.toggledProp !== null) {
            return this.toggledProp;
        }
        return this.toggledAttr;
    }

    @Computed() public get isWorkingTextSlotVisible(): boolean {
        return !!this.workingText || this.hasSlot('working-text');
    }

    /**
     * Internal toggle status for the "toggle" slot.
     */
    @Ref() private toggledAttr: boolean = false;

    /**
     * A reference to the callback that will be called when keyboard events are listened to.
     */
    @Ref() private keydownListener: VoidCallback|null = null;

    /**
     * Show/hide the "toggle" slot (if defined).
     */
    @Expose() public onClick(event: UIEvent): void {
        if (!this.disabled) {
            this.$emit('click', event);
        }
    }

    /**
     * Show/hide the "toggle" slot (if defined).
     */
    @Expose() public toggle(event: UIEvent): void {
        if (!this.$refs.root.contains(event.target) || this.disabled) {
            return ;
        }
        if (this.hasSlot('toggle')) {
            this.toggledAttr = !this.toggledAttr;
        } else {
            this.toggledAttr = false;
        }
    }

    @Expose() public hideToggle(): void {
        this.toggledAttr = false;
    }

    @Expose() public onFocus(): void {
        if (this.keydownListener === null && !this.disabled) {
            this.keydownListener = proxy(this.onKeyDown, this);
            this.$el.addEventListener('keydown', this.keydownListener);
        }
    }

    @Expose() public onBlur(): void {
        if (this.keydownListener !== null) {
            this.$el.removeEventListener('keydown', this.keydownListener);
            this.keydownListener = null;
        }
    }

    @Lifecycle('beforeUnmount')
    public dispose(): void {
        this.onBlur();
    }

    protected onKeyDown(event: KeyboardEvent) {
        if (event.key === 'Enter' && !this.active && !this.disabled) {
            this.active = true;
            if (this.hasToggleSlot) {
                this.toggle(event);
            }
            setTimeout(() => {
                this.active = false;
            }, this.clickDuration * 2);
        }
    }
}
</script>
