<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-bar-chart-horizontal-fill')
export default class IconRemixBarChartHorizontalFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '3 3 19 18' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 3v4H3V3h9zm4 14v4H3v-4h13zm6-7v4H3v-4h19z"/></svg>
</template>