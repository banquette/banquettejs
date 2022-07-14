<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-align-vertical-center')
export default class IconMaterialAlignVerticalCenter {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'round'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '1.84 3 20.16 18' : '0 0 24 24'"><path d="M21 11h-4V7.5c0-.83-.67-1.5-1.5-1.5S14 6.67 14 7.5V11h-4V4.5C10 3.67 9.33 3 8.5 3S7 3.67 7 4.5V11H2.84c-.55 0-1 .45-1 1s.45 1 1 1H7v6.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V13h4v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V13h4c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '1.84 3 20.16 18' : '0 0 24 24'"><path d="M22 11h-5V6h-3v5h-4V3H7v8H1.84v2H7v8h3v-8h4v5h3v-5h5z"/></svg>
</template>