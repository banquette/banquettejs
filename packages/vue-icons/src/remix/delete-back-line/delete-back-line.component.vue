<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-delete-back-line')
export default class IconRemixDeleteBackLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '0.2 3 21.8 18' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M6.535 3H21a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6.535a1 1 0 0 1-.832-.445l-5.333-8a1 1 0 0 1 0-1.11l5.333-8A1 1 0 0 1 6.535 3zm.535 2-4.666 7 4.666 7H20V5H7.07zM16 11v2H9v-2h7z"/></svg>
</template>