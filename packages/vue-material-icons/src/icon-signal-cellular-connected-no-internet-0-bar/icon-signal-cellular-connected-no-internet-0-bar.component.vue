<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('icon-signal-cellular-connected-no-internet-0-bar')
export default class IconSignalCellularConnectedNoInternet0Bar {
    @Prop({type: [String, Number], default: 24}) public size!: string|number;
    @Prop({type: String, default: null}) public color!: string;
}
</script>
<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" :fill="color" viewBox="0 0 24 24"><path fill-opacity=".3" d="M22 8V2L2 22h16V8z"/><path d="M20 22h2v-2h-2v2zm0-12v8h2v-8h-2z"/></svg>
</template>