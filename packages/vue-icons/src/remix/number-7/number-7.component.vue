<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-number-7')
export default class IconRemixNumber7 {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '6 2 13 20' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 2v1.5L10.763 22H8.574l8.013-18H6V2z"/></svg>
</template>