<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-superscript')
export default class IconMaterialSuperscript {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'sharp'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '5.88 4 17.12 16' : '0 0 24 24'"><path d="M20 7v1h3v1h-4V6h3V5h-3V4h4v3h-3zM5.88 20h2.66l3.4-5.42h.12l3.4 5.42h2.66l-4.65-7.27L17.81 6h-2.68l-3.07 4.99h-.12L8.85 6H6.19l4.32 6.73L5.88 20z"/></svg>
    <svg v-else-if="version === 'round'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '6.8 4 16.2 16' : '0 0 24 24'"><path d="M10.51 12.73 7.3 7.72a1.112 1.112 0 1 1 1.88-1.19l2.76 4.46h.12l2.74-4.45c.2-.34.56-.54.95-.54.88 0 1.42.98.94 1.72l-3.23 5 3.55 5.55c.49.75-.05 1.73-.93 1.73-.38 0-.74-.2-.95-.52l-3.07-4.89h-.12l-3.07 4.89c-.21.32-.56.52-.95.52-.88 0-1.42-.97-.94-1.72l3.53-5.55zM23 8.5c0-.28-.22-.5-.5-.5H20V7h2c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1h-2.5c-.28 0-.5.22-.5.5s.22.5.5.5H22v1h-2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h2.5c.28 0 .5-.22.5-.5z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '5.88 4 17.12 16' : '0 0 24 24'"><path d="M22 7h-2v1h3v1h-4V7c0-.55.45-1 1-1h2V5h-3V4h3c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1zM5.88 20h2.66l3.4-5.42h.12l3.4 5.42h2.66l-4.65-7.27L17.81 6h-2.68l-3.07 4.99h-.12L8.85 6H6.19l4.32 6.73L5.88 20z"/></svg>
</template>