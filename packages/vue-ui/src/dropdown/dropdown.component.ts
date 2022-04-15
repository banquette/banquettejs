import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript/decorator/watch.decorator";
import { Vue } from "@banquette/vue-typescript/vue";
import { PopoverComponent } from "../popover";
import DropdownDividerComponent from "./divider/dropdown-divider.component.vue";
import DropdownItemComponent from "./item/dropdown-item.component.vue";
import { ThemeConfiguration } from "./theme-configuration";

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-dropdown',
    components: [PopoverComponent, DropdownItemComponent, DropdownDividerComponent],
    inheritAttrs: false
})
export default class DropdownComponent extends Vue {
    @Prop({type: [Object, String], default: null}) public target!: HTMLElement|string|null;

    @Expose() public realTarget: HTMLElement|string|null = null;

    @Watch('target', {immediate: ImmediateStrategy.Mounted})
    public onTargetChange(): void {
        this.realTarget = this.target ? this.target : this.$el.parentElement;
    }
}
