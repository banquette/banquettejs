<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-local-dining')
export default class IconMaterialLocalDining {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'twotone'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2.74 3.13 19.12 18.16' : '0 0 24 24'"><path d="M5.11 21.28 12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41zM3.91 9.16l4.19 4.18 2.83-2.83L3.91 3.5a4.008 4.008 0 0 0 0 5.66z"/></svg>
    <svg v-else-if="version === 'round'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2.74 3.13 19.12 17.75' : '0 0 24 24'"><path d="m8.1 13.34 2.83-2.83-6.19-6.18c-.48-.48-1.31-.35-1.61.27-.71 1.49-.45 3.32.78 4.56l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27l-9.05 9.05a.996.996 0 1 0 1.41 1.41L12 14.41l6.18 6.18a.996.996 0 1 0 1.41-1.41L13.41 13l1.47-1.47z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2.74 3.13 19.12 18.16' : '0 0 24 24'"><path d="m8.1 13.34 2.83-2.83L3.91 3.5a4.008 4.008 0 0 0 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/></svg>
</template>