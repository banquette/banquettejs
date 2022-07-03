<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-layout-bottom-fill')
export default class IconRemixLayoutBottomFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '2 3 20 18' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M22 16v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4h20zM21 3a1 1 0 0 1 1 1v10H2V4a1 1 0 0 1 1-1h18z"/></svg>
</template>