<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-heading')
export default class IconRemixHeading {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '5 4 14 17' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 11V4h2v17h-2v-8H7v8H5V4h2v7z"/></svg>
</template>