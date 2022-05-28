<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-keyboard-arrow-right')
export default class IconMaterialKeyboardArrowRight {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '8.59 5.75 7.41 12' : '0 0 24 24'"><path d="m8.59 16.34 4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/></svg>
</template>