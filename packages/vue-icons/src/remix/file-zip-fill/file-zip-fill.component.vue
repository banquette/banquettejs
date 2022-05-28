<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-file-zip-fill')
export default class IconRemixFileZipFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '3 2 18 20' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M10 2v2h2V2h8.007c.548 0 .993.444.993.992v18.016a1 1 0 0 1-.993.992H3.993A.993.993 0 0 1 3 21.008V2.992A1 1 0 0 1 3.993 2H10zm2 2v2h2V4h-2zm-2 2v2h2V6h-2zm2 2v2h2V8h-2zm-2 2v2h2v-2h-2zm2 2v2h-2v3h4v-5h-2z"/></svg>
</template>