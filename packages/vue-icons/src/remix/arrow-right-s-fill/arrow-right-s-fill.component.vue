<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-arrow-right-s-fill')
export default class IconRemixArrowRightSFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '10 6 6 12' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m16 12-6 6V6z"/></svg>
</template>