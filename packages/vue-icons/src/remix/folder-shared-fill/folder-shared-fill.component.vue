<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-folder-shared-fill')
export default class IconRemixFolderSharedFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span style="line-height: 0"><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '2 3 21 19.5' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M22 13.126A6 6 0 0 0 13.303 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1v7.126zM18 17v-3.5l5 4.5-5 4.5V19h-3v-2h3z"/></svg></span>
</template>