<style src="./progress-horizontal.component.css" scoped></style>
<template src="./progress-horizontal.component.html" ></template>
<script lang="ts">
import { Component, Computed, Themeable, BindThemeDirective } from "@banquette/vue-typescript";
import { PopoverDirective, BtPopover } from "../../popover";
import { BtAbstractProgress } from "../abstract-progress.component";
import { ThemeConfiguration } from "./theme-configuration";

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-progress-horizontal',
    components: [BtPopover],
    directives: [PopoverDirective, BindThemeDirective]
})
export default class BtProgressHorizontal extends BtAbstractProgress {
    @Computed() public get width(): string {
        const p = this.progressPercent();
        return p !== null ? `${p}%` : '100%';
    }
}
</script>
