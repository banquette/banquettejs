<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-arrow-right-down-fill')
export default class IconRemixArrowRightDownFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '5.98 5.98 12.02 12.02' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M11.637 13.05 5.98 7.395 7.394 5.98l5.657 5.657L18 6.687V18H6.687z"/></svg>
</template>