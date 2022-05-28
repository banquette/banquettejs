<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-pulse-line')
export default class IconRemixPulseLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '1 2.46 22 19.08' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m9 7.539 6 14L18.659 13H23v-2h-5.659L15 16.461l-6-14L5.341 11H1v2h5.659z"/></svg>
</template>