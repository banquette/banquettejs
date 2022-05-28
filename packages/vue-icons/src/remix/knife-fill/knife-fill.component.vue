<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-knife-fill')
export default class IconRemixKnifeFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '2 1.41 20.78 20.56' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M22.373 19.44a1.5 1.5 0 0 1-2.121 2.12l-4.596-4.596L12.12 20.5l-7.778-7.778a8 8 0 0 1-.174-11.135l.174-.179L22.373 19.44z"/></svg>
</template>