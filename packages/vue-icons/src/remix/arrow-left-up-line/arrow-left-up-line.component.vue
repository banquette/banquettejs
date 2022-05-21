<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-arrow-left-up-line')
export default class IconRemixArrowLeftUpLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span style="line-height: 0"><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '6 6 12.02 12.02' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m9.414 8 8.607 8.607-1.414 1.414L8 9.414V17H6V6h11v2z"/></svg></span>
</template>