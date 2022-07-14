<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-play-arrow')
export default class IconMaterialPlayArrow {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'twotone'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '8 5 11 14' : '0 0 24 24'"><path d="M10 8.64v6.72L15.27 12z" opacity=".3"/><path d="m8 19 11-7L8 5v14zm2-10.36L15.27 12 10 15.36V8.64z"/></svg>
    <svg v-else-if="version === 'sharp'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '8 5 11 14' : '0 0 24 24'"><path d="M8 5v14l11-7L8 5z"/></svg>
    <svg v-else-if="version === 'round'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '8 5.82 10.15 12.36' : '0 0 24 24'"><path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z"/></svg>
    <svg v-else-if="version === 'outlined'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '8 5 11 14' : '0 0 24 24'"><path d="M10 8.64 15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '8 5 11 14' : '0 0 24 24'"><path d="M8 5v14l11-7z"/></svg>
</template>