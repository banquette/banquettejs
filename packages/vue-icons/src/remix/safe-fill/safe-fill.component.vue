<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-safe-fill')
export default class IconRemixSafeFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '2 3 20 19' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M18 20H6v2H4v-2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-1v2h-2v-2zm-7-6.126V17h2v-3.126A4.002 4.002 0 0 0 12 6a4 4 0 0 0-1 7.874zM12 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg></span>
</template>