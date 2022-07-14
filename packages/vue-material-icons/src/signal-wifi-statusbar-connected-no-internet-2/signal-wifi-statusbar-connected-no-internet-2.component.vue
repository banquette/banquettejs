<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-signal-wifi-statusbar-connected-no-internet-2')
export default class IconMaterialSignalWifiStatusbarConnectedNoInternet2 {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '0 4 22.92 17' : '0 0 24 24'"><path d="M17 11.21V8h5.92C19.97 5.51 16.16 4 12 4 7.31 4 3.07 5.9 0 8.98l4.23 4.24A10.96 10.96 0 0 1 17 11.21z" fill-opacity=".3"/><path d="M4.23 13.22 12 21l5-5.01v-4.78a10.96 10.96 0 0 0-12.77 2.01zM19 18h2v2h-2zm0-8h2v6h-2z"/></svg>
</template>