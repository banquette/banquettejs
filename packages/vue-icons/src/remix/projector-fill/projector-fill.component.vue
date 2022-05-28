<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-projector-fill')
export default class IconRemixProjectorFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '2 3 20 18' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M11.112 12a4.502 4.502 0 0 0 8.776 0H22v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h9.112zM5 16h2v2H5v-2zm10.5-2.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM11.112 10H2V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v6h-2.112a4.502 4.502 0 0 0-8.776 0z"/></svg>
</template>