<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-border-color')
export default class IconMaterialBorderColor {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '0 0 24 24' : '0 0 24 24'"><path d="M17.75 7 14 3.25l-10 10V17h3.75l10-10zm2.96-2.96a.996.996 0 0 0 0-1.41L18.37.29a.996.996 0 0 0-1.41 0L15 2.25 18.75 6l1.96-1.96z"/><path fill-opacity=".36" d="M0 20h24v4H0z"/></svg>
</template>