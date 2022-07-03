<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-blaze-line')
export default class IconRemixBlazeLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '3.5 1 16.5 21' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 9c.667 1.06 1 2.394 1 4 0 3-3.5 4-5 9-.667-.575-1-1.408-1-2.5 0-3.482 5-5.29 5-10.5zm-4.5-4a8.31 8.31 0 0 1 1 4c0 5-6 6-4 13C9.833 20.84 9 19.173 9 17c0-3.325 5.5-6 5.5-12zM10 1c.667 1.333 1 2.833 1 4.5 0 6-9 7.5-3 16.5-2.5-.5-4.5-3-4.5-6C3.5 9.5 10 8.5 10 1z"/></svg>
</template>