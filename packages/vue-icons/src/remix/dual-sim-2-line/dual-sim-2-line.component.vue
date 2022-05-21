<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-dual-sim-2-line')
export default class IconRemixDualSim2Line {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span style="line-height: 0"><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '4 2 16 20' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m15 2 4.707 4.707a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10zm-.829 2H6v16h12V7.829L14.171 4zM12 7.5a3 3 0 0 1 2.009 5.228l-.008-.008.006.01L12.595 14H15v2H9v-1.453l3.67-3.304A1 1 0 1 0 11 10.5H9a3 3 0 0 1 3-3z"/></svg></span>
</template>