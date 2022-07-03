<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-arrow-up-s-line')
export default class IconRemixArrowUpSLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '5.64 8 12.73 7.78' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m12 10.828-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"/></svg>
</template>