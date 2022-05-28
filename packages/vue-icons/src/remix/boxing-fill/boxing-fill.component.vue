<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-boxing-fill')
export default class IconRemixBoxingFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '3 2 19 20' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m9.5 11 .144.007a1.5 1.5 0 0 1 1.35 1.349L11 12.5l-.007.144a1.5 1.5 0 0 1-1.349 1.35L9.5 14H6v2h3.5c1.7 0 3.117-1.212 3.434-2.819l.03-.18L19 13c.711 0 1.388-.149 2-.416V17a3.001 3.001 0 0 1-2 2.829V21a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1.17A3.001 3.001 0 0 1 3 17v-4a2 2 0 0 1 2-2h4.5zM22 7.5V8l-.005.176a3 3 0 0 1-2.819 2.819L19 11h-6.337a3.501 3.501 0 0 0-2.955-1.994L9.5 9H5a3.98 3.98 0 0 0-2.001.536L3 6a4 4 0 0 1 4-4h9.5A5.5 5.5 0 0 1 22 7.5z"/></svg>
</template>