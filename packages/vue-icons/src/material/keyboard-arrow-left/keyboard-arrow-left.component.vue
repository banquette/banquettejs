<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-keyboard-arrow-left')
export default class IconMaterialKeyboardArrowLeft {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '8 5.5 7.41 12' : '0 0 24 24'"><path d="m15.41 16.09-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/></svg>
</template>