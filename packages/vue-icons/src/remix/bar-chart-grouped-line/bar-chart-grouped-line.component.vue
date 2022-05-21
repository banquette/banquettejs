<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-bar-chart-grouped-line')
export default class IconRemixBarChartGroupedLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span style="line-height: 0"><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '2 2 19 19' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 12h2v9H2v-9zm3 2h2v7H5v-7zm11-6h2v13h-2V8zm3 2h2v11h-2V10zM9 2h2v19H9V2zm3 2h2v17h-2V4z"/></svg></span>
</template>