<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-unfold-more-double')
export default class IconMaterialUnfoldMoreDouble {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'round'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '7.83 0.41 8.35 23.19' : '0 0 24 24'"><path d="M9.53 5.29 12 2.83l2.46 2.46a.996.996 0 1 0 1.41-1.41L12.7.7a.996.996 0 0 0-1.41 0L8.12 3.88a.996.996 0 1 0 1.41 1.41z"/><path d="M9.53 10.29 12 7.83l2.46 2.46a.996.996 0 1 0 1.41-1.41L12.7 5.7a.996.996 0 0 0-1.41 0L8.12 8.88a.996.996 0 1 0 1.41 1.41zm4.94 3.42L12 16.17l-2.46-2.46a.996.996 0 1 0-1.41 1.41l3.17 3.18c.39.39 1.02.39 1.41 0l3.17-3.18a.996.996 0 1 0-1.41-1.41z"/><path d="M14.47 18.72 12 21.17l-2.46-2.46a.996.996 0 1 0-1.41 1.41l3.17 3.18c.39.39 1.02.39 1.41 0l3.17-3.17a.996.996 0 1 0-1.41-1.41z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '7.41 0 9.18 24' : '0 0 24 24'"><path d="M12 7.83 15.17 11l1.41-1.41L12 5 7.41 9.59 8.83 11 12 7.83zm0-5L15.17 6l1.41-1.41L12 0 7.41 4.59 8.83 6 12 2.83zm0 18.34L8.83 18l-1.41 1.41L12 24l4.59-4.59L15.17 18 12 21.17zm0-5L8.83 13l-1.41 1.41L12 19l4.59-4.59L15.17 13 12 16.17z"/></svg>
</template>