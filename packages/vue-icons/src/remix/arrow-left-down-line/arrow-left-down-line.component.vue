<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-arrow-left-down-line')
export default class IconRemixArrowLeftDownLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '7 4.98 12.02 12.02' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m9 13.59 8.607-8.607 1.414 1.414-8.607 8.607H18v2H7v-11h2v7.585z"/></svg>
</template>