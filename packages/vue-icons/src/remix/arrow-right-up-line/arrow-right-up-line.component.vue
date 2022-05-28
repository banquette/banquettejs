<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-arrow-right-up-line')
export default class IconRemixArrowRightUpLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '5.98 6 12.02 12.02' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m16.004 9.414-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"/></svg>
</template>