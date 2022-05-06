import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Import } from "@banquette/vue-typescript/decorator/import.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { Watch } from "@banquette/vue-typescript/decorator/watch.decorator";
import { BindThemeDirective } from "@banquette/vue-typescript/theme/bind-theme.directive";
import { Vue } from "@banquette/vue-typescript/vue";
import { StickToDirective } from "../misc";
import { PopoverComposable } from "./popover.composable";
import { ThemeConfiguration } from "./theme-configuration";

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-popover',
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

    @Expose() public isVisible: boolean = false;

    public beforeMount() {
        this.popoverComposable.config.stickToOptions.enabled = false;
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
        this.popoverComposable.config.stickToOptions.enabled = false;
        this.$forceUpdate();
    }

    @Watch('config.visible')
    public onVisibilityChange(newValue: any): void {
        if (newValue) {
            this.popoverComposable.config.stickToOptions.enabled = newValue;
            // Force update is required so the `v-bt-stick-to` directive updates.
            this.$forceUpdate();

            // Then wait a frame for the stick-to to update, so the popover is never out of position.
            window.requestAnimationFrame(() => {
                this.isVisible = true;
            });
        } else {
            // Just set the flag to `false` and let Vue call `onAfterLeave`.
            this.isVisible = false;
        }
    }
}
