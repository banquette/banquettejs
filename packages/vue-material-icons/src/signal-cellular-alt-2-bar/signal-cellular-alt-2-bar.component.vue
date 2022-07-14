<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-signal-cellular-alt-2-bar')
export default class IconMaterialSignalCellularAlt2Bar {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'round'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '5 9 9 11' : '0 0 24 24'"><path d="M6.5 20c-.83 0-1.5-.67-1.5-1.5v-3c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5zm6 0c-.83 0-1.5-.67-1.5-1.5v-8c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '5 9 9 11' : '0 0 24 24'"><path d="M5 14h3v6H5v-6zm6-5h3v11h-3V9z"/></svg>
</template>