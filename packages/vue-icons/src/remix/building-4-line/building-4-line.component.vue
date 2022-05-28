<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-building-4-line')
export default class IconRemixBuilding4Line {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '1 2 22 20' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 20h2v2H1v-2h2V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v17zm-2 0V4H5v16h14zM8 11h3v2H8v-2zm0-4h3v2H8V7zm0 8h3v2H8v-2zm5 0h3v2h-3v-2zm0-4h3v2h-3v-2zm0-4h3v2h-3V7z"/></svg>
</template>