<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-fast-forward')
export default class IconMaterialFastForward {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '4 6 17.5 12' : '0 0 24 24'"><path d="m4 18 8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"/></svg>
</template>