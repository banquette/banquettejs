<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-roundabout-right')
export default class IconMaterialRoundaboutRight {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'sharp'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 3 20 18' : '0 0 24 24'"><path d="M8 13c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4v1h6.17l-1.59 1.59L18 13l4-4-4-4-1.41 1.41L18.17 8h-4.25C13.44 5.16 10.97 3 8 3 4.69 3 2 5.69 2 9c0 2.97 2.16 5.44 5 5.92V21h2v-8H8z"/></svg>
    <svg v-else-if="version === 'round'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 3 19.58 18' : '0 0 24 24'"><path d="M8 21c.55 0 1-.45 1-1v-5.09c0-.98-.71-1.8-1.67-1.97a3.999 3.999 0 1 1 4.61-4.61c.17.96.99 1.67 1.97 1.67h4.26l-.88.88a.996.996 0 1 0 1.41 1.41l2.59-2.59a.996.996 0 0 0 0-1.41L18.7 5.7a.996.996 0 1 0-1.41 1.41l.88.89h-4.25C13.44 5.16 10.97 3 8 3 4.69 3 2 5.69 2 9c0 2.97 2.16 5.44 5 5.92V20c0 .55.45 1 1 1z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 3 20 18' : '0 0 24 24'"><path d="M13.92 8C13.44 5.16 10.97 3 8 3 4.69 3 2 5.69 2 9c0 2.97 2.16 5.44 5 5.92V21h2v-6.09c0-.98-.71-1.8-1.67-1.97a3.999 3.999 0 1 1 4.61-4.61c.17.96.99 1.67 1.97 1.67h4.26l-1.59 1.59L18 13l4-4-4-4-1.41 1.41L18.17 8h-4.25z"/></svg>
</template>