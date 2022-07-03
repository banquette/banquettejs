<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-bar-chart-fill')
export default class IconRemixBarChartFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '3 2 18 19' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 12h4v9H3v-9zm14-4h4v13h-4V8zm-7-6h4v19h-4V2z"/></svg>
</template>