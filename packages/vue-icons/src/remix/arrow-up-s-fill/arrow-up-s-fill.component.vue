<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-arrow-up-s-fill')
export default class IconRemixArrowUpSFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '6 8 12 6' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m12 8 6 6H6z"/></svg>
</template>