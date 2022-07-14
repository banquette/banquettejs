<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-1x-mobiledata')
export default class IconMaterial1xMobiledata {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'round'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '4 7 14.25 10' : '0 0 24 24'"><path d="M5 7h2c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1s-1-.45-1-1V9H5c-.55 0-1-.45-1-1s.45-1 1-1zm10.83 4.72 1.92-3.21A.997.997 0 0 0 16.9 7a.99.99 0 0 0-.86.49l-1.37 2.28-1.38-2.29c-.18-.3-.5-.48-.85-.48-.78 0-1.26.85-.86 1.51l1.92 3.21-2.26 3.77c-.4.67.08 1.51.86 1.51.35 0 .68-.18.86-.49l1.71-2.85 1.71 2.85c.18.3.51.49.86.49h.01c.78 0 1.26-.85.86-1.51l-2.28-3.77z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '4 7 15 10' : '0 0 24 24'"><path d="M4 7h4v10H6V9H4V7zm11.83 4.72L18.66 7h-2.33l-1.66 2.77L13 7h-2.33l2.83 4.72L10.33 17h2.33l2-3.34 2 3.34H19l-3.17-5.28z"/></svg>
</template>