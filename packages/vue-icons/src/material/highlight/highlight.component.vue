<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-highlight')
export default class IconMaterialHighlight {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '3.5 2 17 20' : '0 0 24 24'"><path d="m6 14 3 3v5h6v-5l3-3V9H6zm5-12h2v3h-2zM3.5 5.875 4.914 4.46l2.12 2.122L5.62 7.997zm13.46.71 2.123-2.12 1.414 1.414L18.375 8z"/></svg>
</template>