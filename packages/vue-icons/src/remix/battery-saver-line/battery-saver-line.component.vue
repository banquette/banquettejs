<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-battery-saver-line')
export default class IconRemixBatterySaverLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '5 2 14 20' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M14 2a1 1 0 0 1 1 1v1h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1h4zm-1 2h-2v2H7v14h10V6h-4V4zm0 5v3h3v2h-3v3h-2v-3H8v-2h3V9h2z"/></svg>
</template>