<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-media-bluetooth-off')
export default class IconMaterialMediaBluetoothOff {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'sharp' || version === 'twotone'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '1.39 2.81 20.61 19.79' : '0 0 24 24'"><path d="M9 6.17V3h6v4h-4v1.17l-2-2zM19.42 15 22 17.57l-.8.8-6.78-6.78.8-.8 2.75 2.75V9h.6L22 12.43 19.42 15zm-.25-1.45 1.13-1.13-1.13-1.13v2.26zm-1.96 3.66 3.98 3.98-1.41 1.41-3.98-3.98-.58.58-.85-.85.58-.58L11 13.83V17c0 2.21-1.78 4-3.99 4S3 19.21 3 17s1.79-4 4.01-4c.73 0 1.41.21 2 .55v-1.72L1.39 4.22 2.8 2.81l13.56 13.56.85.84z"/></svg>
    <svg v-else-if="version === 'round'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '1.81 3 19.98 19.19' : '0 0 24 24'"><path d="M9 6.17V5c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2s-.9 2-2 2h-2v1.17l-2-2zM19.42 15l2.18 2.17c.22.22.22.58 0 .8-.22.22-.58.22-.8 0l-5.98-5.98a.567.567 0 0 1 0-.8c.22-.22.58-.22.8 0l2.35 2.35V9.61c0-.45.54-.67.85-.35l2.82 2.82c.2.2.2.51 0 .71L19.42 15zm-.25-1.45 1.13-1.13-1.13-1.13v2.26zm1.32 6.94a.996.996 0 1 1-1.41 1.41l-3.28-3.28-.16.16a.61.61 0 0 1-.85 0 .61.61 0 0 1 0-.85l.16-.16L11 13.83v3.02c0 2.07-1.68 4.01-3.74 4.14C4.94 21.13 3 19.29 3 17c0-2.21 1.79-4 4.01-4 .73 0 1.41.21 2 .55v-1.72L2.1 4.92a.996.996 0 1 1 1.41-1.41l16.98 16.98z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '1.39 2.81 20.61 19.79' : '0 0 24 24'"><path d="M9 6.17V3h6v4h-4v1.17l-2-2zM19.42 15 22 17.57l-.8.8-6.78-6.78.8-.8 2.75 2.75V9h.6L22 12.43 19.42 15zm-.25-1.45 1.13-1.13-1.13-1.13v2.26zm2.02 7.64-1.41 1.41-3.98-3.98-.58.58-.85-.85.58-.58L11 13.83V17c0 2.21-1.78 4-3.99 4S3 19.21 3 17s1.79-4 4.01-4c.73 0 1.41.21 2 .55v-1.72L1.39 4.22 2.8 2.81l18.39 18.38z"/></svg>
</template>