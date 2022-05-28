<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-arrow-drop-up-line')
export default class IconRemixArrowDropUpLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '7.76 9 8.49 5.66' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m12 11.828-2.828 2.829-1.415-1.414L12 9l4.243 4.243-1.415 1.414L12 11.828z"/></svg>
</template>