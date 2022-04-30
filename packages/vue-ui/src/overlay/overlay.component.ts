import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Computed } from "@banquette/vue-typescript/decorator/computed.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { ThemeVar } from "@banquette/vue-typescript/decorator/theme-var.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { BindThemeDirective } from "@banquette/vue-typescript/theme/bind-theme.directive";
import { Vue } from "@banquette/vue-typescript/vue";
import { ThemeConfiguration } from "./theme-configuration";

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-overlay',
    directives: [BindThemeDirective]
})
export default class OverlayComponent extends Vue {
    private static zIndexIncrement: number = 0;

    @Prop({type: String, default: 'fixed', transform: (value: any) => value === 'absolute' ? value : 'fixed'})
    public position!: 'absolute' | 'fixed';

    /**
     * If `true`, make the overlay invisible and stop blocking events.
     */
    @Prop({type: Boolean, default: false}) public disabled!: boolean;

    /**
     * Bridge to the `overlay-z-index` css variable.
     */
    @ThemeVar({name: 'overlay-z-index', defaultValue: 2000}) public zIndexCssVar!: number;

    @Computed() public get zIndex(): number {
        return this.zIndexCssVar + this.zIndexIncrement;
    }

    private zIndexIncrement: number = 0;

    /**
     * Vue lifecycle.
     */
    public beforeMount(): void {
        this.zIndexIncrement = ++OverlayComponent.zIndexIncrement;
    }

    /**
     * Vue lifecycle.
     */
    public unmounted(): void {
        --OverlayComponent.zIndexIncrement;
    }
}
