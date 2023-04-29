<style lang="css" src="./dropdown.component.css"></style>
<template src="./dropdown.component.html" ></template>
<script lang="ts">
import { Component, Expose, Prop, Themeable, Watch, ImmediateStrategy, BindThemeDirective, Vue } from "@banquette/vue-typescript";
import { PropType } from "vue";
import { BtPopover } from "../popover";
import BtDropdownDivider from "./dropdown-divider.component.vue";
import BtDropdownItem from "./dropdown-item.component.vue";
import { ThemeConfiguration } from "./theme-configuration";

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-dropdown',
    directives: [BindThemeDirective],
    components: [BtPopover, BtDropdownItem, BtDropdownDivider],
    inheritAttrs: false
})
export default class BtDropdown extends Vue {
    /**
     * The element to make the dropdown show under.
     */
    @Prop({type: [Object, String] as PropType<HTMLElement|string|null>, default: null}) public target!: HTMLElement|string|null;

    @Expose() public realTarget: HTMLElement|string|null = null;

    @Watch('target', {immediate: ImmediateStrategy.Mounted})
    public onTargetChange(): void {
        this.realTarget = this.target ? this.target : this.$el.parentElement;
    }
}
</script>
