<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-subdirectory-arrow-left')
export default class IconMaterialSubdirectoryArrowLeft {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'round'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '5.42 4 14.58 16.58' : '0 0 24 24'"><path d="m5.71 15.71 4.58 4.58c.39.39 1.03.39 1.42 0 .39-.39.39-1.03 0-1.42L8.83 16H19c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v9H8.83l2.88-2.87c.39-.39.39-1.03 0-1.42-.39-.39-1.03-.39-1.42 0l-4.58 4.58c-.39.39-.39 1.03 0 1.42z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '5 4 15 17' : '0 0 24 24'"><path d="m11 9 1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"/></svg>
</template>