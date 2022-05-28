<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-signal-wifi-off-fill')
export default class IconRemixSignalWifiOffFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '0.69 1.39 22.62 19.61' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m2.808 1.393 17.677 17.678-1.414 1.414-3.683-3.683L12 21 .69 6.997a18 18 0 0 1 2.95-1.942L1.394 2.808l1.415-1.415zM12 3c4.284 0 8.22 1.497 11.31 3.996l-5.407 6.693L7.724 3.511A18.04 18.04 0 0 1 12 3z"/></svg>
</template>