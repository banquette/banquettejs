<style lang="css" src="./dropdown.component.css"></style>
<template src="./dropdown.component.html" ></template>
<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript/decorator/watch.decorator";
import { BindThemeDirective } from "@banquette/vue-typescript/theme/bind-theme.directive";
import { Vue } from "@banquette/vue-typescript/vue";
import { PopoverComponent } from "../popover";
import DropdownDividerComponent from "./dropdown-divider.component.vue";
import DropdownItemComponent from "./dropdown-item.component.vue";
import { ThemeConfiguration } from "./theme-configuration";

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-dropdown',
    directives: [BindThemeDirective],
    components: [PopoverComponent, DropdownItemComponent, DropdownDividerComponent],
    inheritAttrs: false
})
export default class DropdownComponent extends Vue {
    /**
     * The element to make the dropdown show under.
     */
    @Prop({type: [Object, String], default: null}) public target!: HTMLElement|string|null;

    @Expose() public realTarget: HTMLElement|string|null = null;

    @Watch('target', {immediate: ImmediateStrategy.Mounted})
    public onTargetChange(): void {
        this.realTarget = this.target ? this.target : this.$el.parentElement;
    }
}
</script>
