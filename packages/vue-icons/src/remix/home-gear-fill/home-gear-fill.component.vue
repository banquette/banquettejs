<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-home-gear-fill')
export default class IconRemixHomeGearFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '1 1.35 22 19.65' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9zM8.592 13.808l-.991.572 1 1.733.993-.573a3.5 3.5 0 0 0 1.405.811v1.145h2.002V16.35a3.5 3.5 0 0 0 1.405-.81l.992.572L16.4 14.38l-.991-.572a3.504 3.504 0 0 0 0-1.62l.991-.573-1-1.733-.993.573A3.5 3.5 0 0 0 13 9.645V8.5h-2.002v1.144a3.5 3.5 0 0 0-1.405.811l-.992-.573L7.6 11.616l.991.572a3.504 3.504 0 0 0 0 1.62zm3.408.69a1.5 1.5 0 1 1-.002-3.001 1.5 1.5 0 0 1 .002 3z"/></svg>
</template>