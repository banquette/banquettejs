<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-signal-wifi-statusbar-2-bar')
export default class IconMaterialSignalWifiStatusbar2Bar {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '0 4 24 17' : '0 0 24 24'"><path d="M19.77 13.22 24 8.98A16.88 16.88 0 0 0 12 4C7.31 4 3.07 5.9 0 8.98l4.23 4.24C6.22 11.23 8.97 10 12 10s5.78 1.23 7.77 3.22z" fill-opacity=".3"/><path d="M19.77 13.22C17.78 11.23 15.03 10 12 10s-5.78 1.23-7.77 3.22L12 21l7.77-7.78z"/></svg>
</template>