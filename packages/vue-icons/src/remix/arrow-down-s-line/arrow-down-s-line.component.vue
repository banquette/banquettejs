<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-arrow-down-s-line')
export default class IconRemixArrowDownSLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '5.64 8.22 12.73 7.78' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m12 13.172 4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/></svg>
</template>