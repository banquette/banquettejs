<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-stay-primary-landscape')
export default class IconMaterialStayPrimaryLandscape {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'twotone'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '1 5 22 14' : '0 0 24 24'"><path d="M5 7h14v10H5z" opacity=".3"/><path d="M21 5H3c-1.1 0-1.99.9-1.99 2L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-2 12H5V7h14v10z"/></svg>
    <svg v-else-if="version === 'sharp'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '1 5 22 14' : '0 0 24 24'"><path d="M1 19h22V5H1v14zM19 7v10H5V7h14z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '1 5 22 14' : '0 0 24 24'"><path d="M1.01 7 1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2zM19 7v10H5V7h14z"/></svg>
</template>