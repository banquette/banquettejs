<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-building-3-fill')
export default class IconRemixBuilding3Fill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '3 1 18 20' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M10 10.111V1l11 6v14H3V7z"/></svg>
</template>