<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-trademark-line')
export default class IconRemixTrademarkLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '0 6 23 12' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M10 6v2H6v10H4V8H0V6h10zm2 0h2.5l3 5.196L20.5 6H23v12h-2V9.133l-3.5 6.063L14 9.135V18h-2V6z"/></svg>
</template>