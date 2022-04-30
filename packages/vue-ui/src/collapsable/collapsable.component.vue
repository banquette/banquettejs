<template src="./collapsable.component.html" ></template>
<style src="./collapsable.component.css" scoped></style>
<script lang="ts">
import { parseCssDuration } from "@banquette/utils-dom/parse-css-duration";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { TemplateRef } from "@banquette/vue-typescript/decorator/template-ref.decorator";
import { ThemeVar } from "@banquette/vue-typescript/decorator/theme-var.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript/decorator/watch.decorator";
import { BindThemeDirective } from "@banquette/vue-typescript/theme/bind-theme.directive";
import { Vue } from "@banquette/vue-typescript/vue";
import { ThemeConfiguration } from "./theme-configuration";

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-collapsable',
    directives: [BindThemeDirective],
    emits: ['update:modelValue']
})
export default class CollapsableComponent extends Vue {
    /**
     * Control the visibility of the collapsable content.
     */
    @Prop({type: Boolean, default: true}) public modelValue!: boolean;

    /**
     * If `true`, the content is destroyed when collapsed.
     * If `false`, the content is only hidden.
     */
    @Prop({type: Boolean, default: false}) public destroyWhenCollapsed!: boolean;

    /**
     * Template refs.
     */
    @TemplateRef('overflowWrapper') public overflowWrapperEl!: HTMLElement;
    @TemplateRef('contentWrapper') public contentWrapperEl!: HTMLElement|null;

    /**
     * Bridge to the `--collapsable-transition-duration` css variable.
     */
    @ThemeVar({name: 'transitionDuration', defaultValue: '0.3s', transform: (v) => parseCssDuration(v)}) public transitionDuration!: number;

    /**
     * Control the visibility of the content wrapper.
     */
    @Expose() public collapsed: boolean = true;

    private timerId: number|null = null;

    /**
     * Holds the current state of the transition.
     */
    private transitioning: 'up'|'down'|false = false;

    @Expose() public toggle(): void {
        if (this.collapsed || this.transitioning === 'up') {
            this.open();
        } else {
            this.close();
        }
    }

    /**
     * Expand the wrapper to make the content visible.
     */
    @Expose() public open(): void {
        if (this.transitioning === 'down') {
            return ;
        }
        if (this.timerId !== null) {
            window.clearTimeout(this.timerId);
        }
        // Make the content visible and hide it using the root node's hidden overflow.
        this.collapsed = false;
        this.transitioning = 'down';
        this.overflowWrapperEl.style.height ='0px';
        this.overflowWrapperEl.style.overflow ='hidden';

        // Wait a frame so the browser can render the DOM.
        this.timerId = window.setTimeout(() => {
            // Now we can measure the height of the content and set it on the root node
            // so the transition can begin.
            const height = this.measureContentHeight();
            this.overflowWrapperEl.style.height = height + 'px';

            // Wait for the transition to finish.
            this.timerId = window.setTimeout(() => {
                // Remove the overflow and set height to auto.
                this.overflowWrapperEl.style.height = 'auto';
                this.$el.style.overflow ='initial';

                this.timerId = null;
                this.transitioning = false;
            }, this.transitionDuration);
        });
        this.$emit('update:modelValue', false);
    }

    /**
     * Collapse the wrapper to hide the content.
     */
    @Expose() public close(): void {
        if (this.transitioning === 'up') {
            return ;
        }
        if (this.timerId !== null) {
            window.clearTimeout(this.timerId);
        }
        this.transitioning = 'up';

        // Set the overflow and the height of the wrapper in px.
        // If the height of the wrapper is not 'auto' yet, this means we are transitioning down, so don't touch the height.
        this.$el.style.overflow ='hidden';
        if (this.overflowWrapperEl.style.height === 'auto') {
            this.overflowWrapperEl.style.height = this.measureContentHeight() + 'px';
        }
        this.timerId = window.setTimeout(() => {
            // Put the height to 0.
            this.overflowWrapperEl.style.height ='0px';

            // Wait for the transition to finish.
            this.timerId = window.setTimeout(() => {
                // Hide the content.
                this.collapsed = true;
                this.timerId = null;
                this.transitioning = false;
            }, this.transitionDuration);
        });
        this.$emit('update:modelValue', true);
    }

    @Watch('modelValue', {immediate: ImmediateStrategy.Mounted})
    private onCollapsableChange(newValue: boolean): void {
        if (newValue) {
            this.close();
        } else {
            this.open();
        }
    }

    /**
     * Get the current height of the content in px.
     */
    private measureContentHeight(): number {
        if (this.contentWrapperEl) {
            const cs = getComputedStyle(this.contentWrapperEl);
            return this.contentWrapperEl.getBoundingClientRect().height + parseFloat(cs.marginTop) + parseFloat(cs.marginBottom);
        }
        console.warn('Failed to measure content height, missing wrapper ref.');
        return 0;
    }
}
</script>
