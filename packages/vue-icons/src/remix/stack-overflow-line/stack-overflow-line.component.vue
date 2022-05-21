<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-stack-overflow-line')
export default class IconRemixStackOverflowLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span style="line-height: 0"><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '4 2.22 16 19.78' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M18 20.002V15h2v7.002H4V15h2v5.002h12zM7.5 18v-2h9v2h-9zm.077-4.38.347-1.97 8.864 1.563-.348 1.97-8.863-1.563zm1.634-5.504 1-1.732 7.794 4.5-1 1.732-7.794-4.5zm3.417-4.613 1.532-1.286 5.785 6.895-1.532 1.285-5.785-6.894z"/></svg></span>
</template>