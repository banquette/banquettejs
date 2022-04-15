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
    @Expose() public innerVisible: boolean = false;
    @Expose() public innerShown: boolean = false;

    /**
     * @inheritDoc
     */
    @Expose() public hasNonEmptySlot(name: string): boolean {
        return super.hasNonEmptySlot(name);
    }

    @Expose() public onAfterLeave(): void {
        if (this.isLeaving) {
            this.isVisible = false;
        }
    }

    private isLeaving: boolean = false;

    @Watch('config.visible')
    public onVisibilityChange(newValue: any): void {
        if (this.transition === false) {
            this.isVisible = newValue;
            this.innerVisible = true;
            this.innerShown = true;
            return ;
        }
        if (newValue && !this.isVisible) {
            this.isLeaving = false;
            this.isVisible = true;
            this.popoverComposable.config.stickToOptions.enabled = false;
            this.innerVisible = newValue;
            this.innerShown = false;
            window.requestAnimationFrame(() => {
                this.innerShown = true;
                this.popoverComposable.config.stickToOptions.enabled = true;
            });
        } else if (!newValue && this.isVisible) {
            this.isLeaving = true;
            this.innerVisible = false;
        }
    }
}
