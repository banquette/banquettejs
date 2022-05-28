<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-red-packet-line')
export default class IconRemixRedPacketLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '3 2 18 20' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M14.173 9.763A9.98 9.98 0 0 0 19 7.141V4H5v3.141a9.98 9.98 0 0 0 4.827 2.622 2.5 2.5 0 0 1 4.346 0zm.208 2a2.501 2.501 0 0 1-4.762 0A11.94 11.94 0 0 1 5 9.749V20h14V9.748a11.94 11.94 0 0 1-4.619 2.016zM4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/></svg>
</template>