<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-plant-fill')
export default class IconRemixPlantFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '2 2 19 20' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 3v2a7 7 0 0 1-7 7h-1v1h5v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-7h5v-3a7 7 0 0 1 7-7h3zM5.5 2a7.49 7.49 0 0 1 6.124 3.169A7.953 7.953 0 0 0 10 10v1h-.5A7.5 7.5 0 0 1 2 3.5V2h3.5z"/></svg>
</template>