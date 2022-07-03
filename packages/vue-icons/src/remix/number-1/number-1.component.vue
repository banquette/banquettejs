<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-number-1')
export default class IconRemixNumber1 {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '7.5 1.5 6.5 20.5' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M14 1.5V22h-2V3.704L7.5 4.91V2.839l5-1.339z"/></svg>
</template>