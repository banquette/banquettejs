<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-align-horizontal-center')
export default class IconMaterialAlignHorizontalCenter {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'round'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '3 2 18 20' : '0 0 24 24'"><path d="M12 2c.55 0 1 .45 1 1v4h6.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H13v4h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H13v4c0 .55-.45 1-1 1s-1-.45-1-1v-4H7.5c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14H11v-4H4.5C3.67 10 3 9.33 3 8.5S3.67 7 4.5 7H11V3c0-.55.45-1 1-1z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '3 2 18 20' : '0 0 24 24'"><path d="M11 2h2v5h8v3h-8v4h5v3h-5v5h-2v-5H6v-3h5v-4H3V7h8z"/></svg>
</template>