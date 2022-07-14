<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-snowing')
export default class IconMaterialSnowing {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '5 5 14 14' : '0 0 24 24'"><path d="M6 13c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM5 6c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm12 8c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-8c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zM8 18c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-8c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm3 4c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-8c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm3 12c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-8c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z"/></svg>
</template>