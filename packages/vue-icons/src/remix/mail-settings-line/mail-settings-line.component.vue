<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-mail-settings-line')
export default class IconRemixMailSettingsLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '2 3 21.96 20' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m20 7.238-7.928 7.1L4 7.216V19h10v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v9h-2V7.238zM19.501 5H4.511l7.55 6.662L19.502 5zM17.05 19.548a3.017 3.017 0 0 1 0-1.096l-1.014-.586 1-1.732 1.014.586c.278-.238.599-.425.95-.55V15h2v1.17c.351.125.672.312.95.55l1.014-.586 1 1.732-1.014.586a3.017 3.017 0 0 1 0 1.096l1.014.586-1 1.732-1.014-.586a2.997 2.997 0 0 1-.95.55V23h-2v-1.17a2.997 2.997 0 0 1-.95-.55l-1.014.586-1-1.732 1.014-.586zM20 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
</template>