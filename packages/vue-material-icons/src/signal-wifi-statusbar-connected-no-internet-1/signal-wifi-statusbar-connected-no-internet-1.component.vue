<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-signal-wifi-statusbar-connected-no-internet-1')
export default class IconMaterialSignalWifiStatusbarConnectedNoInternet1 {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '0 4 22.92 17' : '0 0 24 24'"><path d="M17 14.76V8h5.92C19.97 5.51 16.16 4 12 4 7.31 4 3.07 5.9 0 8.98l6.35 6.36A7.95 7.95 0 0 1 12 13c1.89 0 3.63.66 5 1.76z" fill-opacity=".3"/><path d="M6.35 15.34 12 21l5-5.01v-1.23A7.963 7.963 0 0 0 12 13c-2.21 0-4.2.89-5.65 2.34zM19 18h2v2h-2zm0-8h2v6h-2z"/></svg>
</template>