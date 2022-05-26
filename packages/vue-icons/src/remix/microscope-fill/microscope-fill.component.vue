<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-microscope-fill')
export default class IconRemixMicroscopeFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '3 1.27 18 20.73' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m13.196 2.268 3.25 5.63a1 1 0 0 1-.366 1.365l-1.3.75 1.001 1.732-1.732 1-1-1.733-1.299.751a1 1 0 0 1-1.366-.366L8.546 8.215a5.002 5.002 0 0 0-3.222 6.561A4.976 4.976 0 0 1 8 14c1.684 0 3.174.833 4.08 2.109l7.688-4.439 1 1.732-7.878 4.549A5.038 5.038 0 0 1 12.9 20H21v2l-17 .001A4.979 4.979 0 0 1 3 19c0-1.007.298-1.945.81-2.73a7.001 7.001 0 0 1 3.717-9.82l-.393-.682a2 2 0 0 1 .732-2.732l2.598-1.5a2 2 0 0 1 2.732.732z"/></svg></span>
</template>