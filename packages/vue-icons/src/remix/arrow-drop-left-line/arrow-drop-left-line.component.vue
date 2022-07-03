<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-arrow-drop-left-line')
export default class IconRemixArrowDropLeftLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '9 7.76 5.66 8.49' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m11.828 12 2.829 2.828-1.414 1.415L9 12l4.243-4.243 1.414 1.415L11.828 12z"/></svg>
</template>