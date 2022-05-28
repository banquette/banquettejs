<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-fast-rewind')
export default class IconMaterialFastRewind {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '2.5 6 17.5 12' : '0 0 24 24'"><path d="M11 18V6l-8.5 6 8.5 6zm.5-6 8.5 6V6l-8.5 6z"/></svg>
</template>