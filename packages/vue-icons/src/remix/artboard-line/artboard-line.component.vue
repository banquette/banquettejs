<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-artboard-line')
export default class IconRemixArtboardLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '3 3 18 18.66' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M8.586 17H3v-2h18v2h-5.586l3.243 3.243-1.414 1.414L13 17.414V20h-2v-2.586l-4.243 4.243-1.414-1.414L8.586 17zM5 3h14a1 1 0 0 1 1 1v10H4V4a1 1 0 0 1 1-1zm1 2v7h12V5H6z"/></svg>
</template>