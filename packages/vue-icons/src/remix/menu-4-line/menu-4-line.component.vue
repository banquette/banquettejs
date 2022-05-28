<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-menu-4-line')
export default class IconRemixMenu4Line {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '3 4 18 16' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 18v2H5v-2h11zm5-7v2H3v-2h18zm-2-7v2H8V4h11z"/></svg>
</template>