import { isNumeric } from "@banquette/utils-type/is-numeric";
import { Primitive } from "@banquette/utils-type/types";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Computed } from "@banquette/vue-typescript/decorator/computed.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Import } from "@banquette/vue-typescript/decorator/import.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { Watch } from "@banquette/vue-typescript/decorator/watch.decorator";
import { BindThemeDirective } from "@banquette/vue-typescript/theme/bind-theme.directive";
import { Vue } from "@banquette/vue-typescript/vue";
import { StickToDirective, ClientOnlyComponent, TeleportComponent } from "../misc";
import { PopoverComposable } from "./popover.composable";
import { ThemeConfiguration } from "./theme-configuration";

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-popover',
    components: [ClientOnlyComponent, TeleportComponent],
    directives: [StickToDirective, BindThemeDirective],
    inheritAttrs: false
})
export default class PopoverComponent extends Vue {
    /**
     * Popover composable.
     */
    @Import(PopoverComposable, false) public popoverComposable!: PopoverComposable;

    /**
     * If `false` the popover will use not use the <Transition> component for its transitions.
     * If a `string` is given, it will be used as the name of the transition to apply.
     * `undefined` will use the default transition.
     */
    @Prop({type: [String, Boolean], default: undefined}) public transition!: string|false|undefined;

    /**
     * If `true` the dropdown content is always rendered, even when hidden.
     */
    @Prop({type: Boolean, default: false}) public renderHidden!: boolean;

    @Computed() public get teleportTarget(): any {
        if (this.popoverComposable.config.teleport === 'auto' && this.shouldTeleportToBody()) {
            return 'body';
        }
        if (!this.popoverComposable.config.teleport && this.popoverComposable.config.stickToOptions.target instanceof SVGElement) {
            return 'body';
        }
        return this.popoverComposable.config.teleport === 'auto' ? null : this.popoverComposable.config.teleport;
    }

    @Computed() public get styles(): Record<string, Primitive> {
        const styles: Record<string, Primitive> = {};
        if (this.popoverComposable) {
            if (this.popoverComposable.config.zIndex === 'auto') {
                if (this.highestZIndex !== null) {
                    styles.zIndex = this.highestZIndex;
                }
            } else {
                styles.zIndex = this.popoverComposable.config.zIndex;
            }
        }
        return styles;
    }

    @Expose() public shouldRender: boolean = false;
    @Expose() public isVisible: boolean = false;
    private highestZIndex: number|null = null;

    /**
     * Vue lifecycle.
     */
    public beforeMount() {
        this.popoverComposable.config.stickToOptions.enabled = false;
    }

    /**
     * Vue lifecycle.
     */
    public mounted(): void {
        this.highestZIndex = this.findHighestZIndex();
    }

    /**
     * Vue lifecycle.
     */
    @Expose() public updated(): void {
        this.popoverComposable.config.stickToOptions.forceUpdate();
    }

    @Expose() public onEnter(): void {
        this.popoverComposable.config.stickToOptions.forceUpdate();
    }

    /**
     * @inheritDoc
     */
    @Expose() public hasNonEmptySlot(name: string): boolean {
        return super.hasNonEmptySlot(name);
    }

    @Expose() public onAfterLeave(): void {
        // In rare cases, the popover can be made visible just as Vue calls `onAfterLeave`,
        // in which case we must not disabled `stick-to` or the popover will be out of position.
        if (this.popoverComposable.config.visible) {
            return ;
        }
        this.shouldRender = false;
        this.popoverComposable.config.stickToOptions.enabled = false;
        this.$forceUpdate();
    }

    @Watch('config.visible')
    public onVisibilityChange(newValue: any): void {
        if (newValue) {
            this.shouldRender = true;
            this.popoverComposable.config.stickToOptions.enabled = newValue;
            // Force update is required so the `v-bt-stick-to` directive updates.
            this.$forceUpdate();

            // Then wait a frame for the stick-to to update, so the popover is never out of position.
            window.setTimeout(() => {
                this.isVisible = true;
            });
        } else {
            // Just set the flag to `false` and let Vue call `onAfterLeave`.
            this.isVisible = false;
        }
    }

    /**
     * Test if the floating element should be teleported in the body to be displayed properly.
     */
    private shouldTeleportToBody(): boolean {
        let el = this.$el;
        while (el instanceof Element) {
            const styles = window.getComputedStyle(el);
            if (styles.overflow !== 'visible') {
                return true;
            }
            el = el.parentElement;
        }
        return false;
    }

    /**
     * Try to determine the best z-index based on parent elements z-indexes.
     */
    private findHighestZIndex(): number|null {
        let el = this.$el;
        let max: number | null = null;
        while (el instanceof Element) {
            const styles = window.getComputedStyle(el);
            if (isNumeric(styles.zIndex)) {
                max = Math.max(max !== null ? max : -Infinity, parseInt(styles.zIndex, 10));
            }
            el = el.parentElement;
        }
        return max;
    }
}
