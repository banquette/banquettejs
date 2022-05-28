<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-file-paper-2-line')
export default class IconRemixFilePaper2Line {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '1 2 22 20' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 2a3 3 0 0 1 3 3v2h-2v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-2h16v2a1 1 0 0 0 .883.993L18 20a1 1 0 0 0 .993-.883L19 19V4H6a1 1 0 0 0-.993.883L5 5v10H3V5a3 3 0 0 1 3-3h14z"/></svg>
</template>