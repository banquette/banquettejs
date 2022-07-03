<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-hail-fill')
export default class IconRemixHailFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '1 2 22.03 21' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.995 17.794a4 4 0 0 0-5.085-3.644A4.001 4.001 0 0 0 6 15c0 1.08.428 2.059 1.122 2.778a8 8 0 1 1 9.335-10.68 5.5 5.5 0 0 1 2.537 10.696zM10 17a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 3a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-5 3a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
</template>