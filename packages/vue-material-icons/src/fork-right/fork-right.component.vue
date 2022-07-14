<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-fork-right')
export default class IconMaterialForkRight {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'round'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '6.42 3.42 13.17 17.58' : '0 0 24 24'"><path d="M9 20c0 .55.45 1 1 1s1-.45 1-1v-3c.73-2.58 3.07-3.47 5.17-3l-.88.88a.996.996 0 1 0 1.41 1.41l2.59-2.59a.996.996 0 0 0 0-1.41L16.7 9.7a.996.996 0 1 0-1.41 1.41l.88.89c-1.51-.33-3.73.08-5.17 1.36V6.83l.88.88a.996.996 0 1 0 1.41-1.41L10.7 3.71a.996.996 0 0 0-1.41 0L6.71 6.29A.996.996 0 1 0 8.12 7.7L9 6.83V20z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '6 3 14 18' : '0 0 24 24'"><path d="M14.59 15.59 16 17l4-4-4-4-1.41 1.41L16.17 12c-1.51-.33-3.73.08-5.17 1.36V6.83l1.59 1.59L14 7l-4-4-4 4 1.41 1.41L9 6.83V21h2v-4c.73-2.58 3.07-3.47 5.17-3l-1.58 1.59z"/></svg>
</template>