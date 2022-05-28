<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-expand-more')
export default class IconMaterialExpandMore {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '6 8.59 12 7.41' : '0 0 24 24'"><path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>
</template>