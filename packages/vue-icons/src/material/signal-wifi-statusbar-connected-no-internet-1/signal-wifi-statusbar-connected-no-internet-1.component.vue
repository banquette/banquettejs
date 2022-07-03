<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-signal-wifi-statusbar-connected-no-internet-1')
export default class IconMaterialSignalWifiStatusbarConnectedNoInternet1 {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '0.42 2 25.17 20' : '0 0 26 24'"><path fill-opacity=".3" d="m24.24 8 1.35-1.68C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01L20 13.28V8h4.24z"/><path d="M7.34 14.95 13 21.99V22v-.01l5.66-7.05C18.44 14.78 16.27 13 13 13s-5.44 1.78-5.66 1.95zM22 22h2v-2h-2v2zm0-12v8h2v-8h-2z"/></svg>
</template>