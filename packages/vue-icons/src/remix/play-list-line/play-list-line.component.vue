<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-play-list-line')
export default class IconRemixPlayListLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '2 4 22 17' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 18h10v2H2v-2zm0-7h14v2H2v-2zm0-7h20v2H2V4zm17 11.17V9h5v2h-3v7a3 3 0 1 1-2-2.83zM18 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
</template>