<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-signal-wifi-error-fill')
export default class IconRemixSignalWifiErrorFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '0.69 3 22.62 18' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 3c4.284 0 8.22 1.497 11.31 3.996L22.498 8H18v5.571L12 21 .69 6.997A17.917 17.917 0 0 1 12 3zm10 16v2h-2v-2h2zm0-9v7h-2v-7h2z"/></svg></span>
</template>