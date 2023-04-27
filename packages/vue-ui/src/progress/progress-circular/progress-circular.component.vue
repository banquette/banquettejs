<style src="./progress-circular.component.css" scoped></style>
<template src="./progress-circular.component.html" ></template>
<script lang="ts">
import { Component, Computed, Prop, Themeable, BindThemeDirective } from "@banquette/vue-typescript";
import { BtAbstractProgress } from "../abstract-progress.component";
import { ThemeConfiguration } from "./theme-configuration";

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-progress-circular',
    directives: [BindThemeDirective]
})
export default class BtProgressCircular extends BtAbstractProgress {
    /**
     * Width of the stroke.
     */
    @Prop({type: [Number, String], default: 3.5, transform: (v: any) => parseFloat(v)}) public strokeWidth!: number;

    @Computed() public get viewBox(): string {
        return `0 0 ${32 + this.strokeWidth} ${32 + this.strokeWidth}`;
    }

    @Computed() public get d(): string {
        return `M ${15.9155 + this.strokeWidth / 2} ${this.strokeWidth / 2} a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831`;
    }

    @Computed() public get strokeDasharray(): string {
        return this.progressPercent() !== null ? `${this.progressPercent()}, 100` : '';
    }
}
</script>
