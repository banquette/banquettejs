<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-screen-lock-rotation')
export default class IconMaterialScreenLockRotation {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'sharp'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '0.05 0.69 23.31 23.31' : '0 0 24 24'"><path d="M7.52 21.48A10.487 10.487 0 0 1 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.82-1.33 1.33zM20.05 4v-.36c0-1.31-.94-2.5-2.24-2.63a2.5 2.5 0 0 0-2.76 2.49V4h-1v6h7V4h-1zm-.8 0h-3.4v-.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V4zm.48 7.2-1.41 1.41 2.22 2.22-5.66 5.66L3.56 9.17l5.66-5.66 2.1 2.1 1.41-1.41L9.22.69.74 9.17l14.14 14.14 8.48-8.48z"/></svg>
    <svg v-else-if="version === 'round'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2.05 1 18.95 21' : '0 0 24 24'"><path d="m20.41 11.36-.35-.35a.996.996 0 1 0-1.41 1.41l.35.35-4.24 4.24-7.78-7.78 4.24-4.24.35.35a.996.996 0 1 0 1.41-1.41l-.35-.36c-.79-.79-2.03-.79-2.82 0L5.57 7.82c-.78.78-.78 2.05 0 2.83l7.78 7.78c.79.79 2.03.79 2.82 0l4.24-4.24c.79-.78.79-2.05 0-2.83zm-9.56 6.49a.5.5 0 0 0-.85.36v1.53c-3.17-.82-5.59-3.54-5.95-6.86a.995.995 0 0 0-.99-.88c-.6 0-1.07.53-1 1.12C2.62 18.11 6.87 22 12 22c.59 0 1.17-.06 1.73-.16.4-.07.55-.56.27-.85l-3.15-3.14z"/><path d="M16 9h4c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1v-.89c0-1-.68-1.92-1.66-2.08A2 2 0 0 0 16 3v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm1-6c0-.55.45-1 1-1s1 .45 1 1v1h-2V3z"/></svg>
    <svg v-else-if="version === 'outlined' || version === 'twotone'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '0.05 1 22.69 23' : '0 0 24 24'"><path d="m22.3 13.77-2.57-2.57-1.41 1.41 2.22 2.22-5.66 5.66L3.56 9.17l5.66-5.66 2.1 2.1 1.41-1.41-2.45-2.45a1.49 1.49 0 0 0-2.12 0L1.8 8.11a1.49 1.49 0 0 0 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12zM7.52 21.48A10.487 10.487 0 0 1 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.82-1.33 1.33zM15.05 10h5c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1v-.5a2.5 2.5 0 0 0-5 0V4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.8-6.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V4h-3.4v-.5z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '1 0 22.69 23' : '0 0 24 24'"><path d="m23.25 12.77-2.57-2.57-1.41 1.41 2.22 2.22-5.66 5.66L4.51 8.17l5.66-5.66 2.1 2.1 1.41-1.41L11.23.75a1.49 1.49 0 0 0-2.12 0L2.75 7.11a1.49 1.49 0 0 0 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12zM8.47 20.48A10.487 10.487 0 0 1 2.5 12H1c.51 6.16 5.66 11 11.95 11l.66-.03-3.81-3.82-1.33 1.33zM16 9h5c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1v-.5a2.5 2.5 0 0 0-5 0V3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.8-6.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V3h-3.4v-.5z"/></svg>
</template>