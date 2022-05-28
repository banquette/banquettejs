<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-bar-chart-horizontal-line')
export default class IconRemixBarChartHorizontalLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '3 3 19 18' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 3v2H3V3h9zm4 16v2H3v-2h13zm6-8v2H3v-2h19z"/></svg>
</template>