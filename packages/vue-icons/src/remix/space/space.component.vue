<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-space')
export default class IconRemixSpace {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '2 9 20 6' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 9v4h16V9h2v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9h2z"/></svg>
</template>