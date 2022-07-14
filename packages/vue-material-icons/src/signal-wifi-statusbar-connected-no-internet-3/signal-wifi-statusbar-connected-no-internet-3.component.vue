<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-signal-wifi-statusbar-connected-no-internet-3')
export default class IconMaterialSignalWifiStatusbarConnectedNoInternet3 {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '0 4 22.92 17' : '0 0 24 24'"><path d="M17 9V8h5.92C19.97 5.51 16.16 4 12 4 7.31 4 3.07 5.9 0 8.98l2.82 2.82A12.93 12.93 0 0 1 12 8c1.77 0 3.46.36 5 1z" fill-opacity=".3"/><path d="M2.82 11.8 12 21l5-5.01V9c-1.54-.64-3.23-1-5-1-3.59 0-6.83 1.45-9.18 3.8zM19 18h2v2h-2zm0-8h2v6h-2z"/></svg>
</template>