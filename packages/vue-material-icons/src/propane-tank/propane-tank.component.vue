<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-propane-tank')
export default class IconMaterialPropaneTank {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'twotone'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '4 2 16 20' : '0 0 24 24'"><path d="M6 18c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-3H6v3zM16 8H8c-1.1 0-2 .9-2 2v3h12v-3c0-1.1-.9-2-2-2z" opacity=".3"/><path d="M17 6.14V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2.14c-1.72.45-3 2-3 3.86v8c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4v-8c0-1.86-1.28-3.41-3-3.86zM9 4h6v2h-2c0-.55-.45-1-1-1s-1 .45-1 1H9V4zm9 14c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2v-3h12v3zm0-5H6v-3c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v3z"/></svg>
    <svg v-else-if="version === 'sharp'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '4 2 16 20' : '0 0 24 24'"><path d="M4 15v3c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4v-3H4zm16-2v-3c0-1.86-1.28-3.41-3-3.86V2H7v4.14c-1.72.45-3 2-3 3.86v3h16zM9 4h6v2h-2V5h-2v1H9V4z"/></svg>
    <svg v-else-if="version === 'outlined'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '4 2 16 20' : '0 0 24 24'"><path d="M17 6.14V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2.14c-1.72.45-3 2-3 3.86v8c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4v-8c0-1.86-1.28-3.41-3-3.86zM9 4h6v2h-2c0-.55-.45-1-1-1s-1 .45-1 1H9V4zM8 8h8c1.1 0 2 .9 2 2v3H6v-3c0-1.1.9-2 2-2zm8 12H8c-1.1 0-2-.9-2-2v-3h12v3c0 1.1-.9 2-2 2z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '4 2 16 20' : '0 0 24 24'"><path d="M4 15v3c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4v-3H4zm16-2v-3c0-1.86-1.28-3.41-3-3.86V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2.14c-1.72.45-3 2-3 3.86v3h16zM9 4h6v2h-2c0-.55-.45-1-1-1s-1 .45-1 1H9V4z"/></svg>
</template>