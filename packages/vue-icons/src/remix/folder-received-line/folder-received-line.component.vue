<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-folder-received-line')
export default class IconRemixFolderReceivedLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '2 3 21 19.5' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M22 13h-2V7h-8.414l-2-2H4v14h9v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1v7zm-2 4h3v2h-3v3.5L15 18l5-4.5V17z"/></svg>
</template>