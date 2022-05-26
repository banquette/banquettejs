<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-signal-wifi-line')
export default class IconRemixSignalWifiLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '0.69 3 22.62 18' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 3c4.284 0 8.22 1.497 11.31 3.996L12 21 .69 6.997A17.917 17.917 0 0 1 12 3zm0 2c-3.028 0-5.923.842-8.42 2.392L12 17.817 20.42 7.39A15.928 15.928 0 0 0 12 5z"/></svg></span>
</template>