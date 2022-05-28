<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-number-3')
export default class IconRemixNumber3 {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '5.69 2 12.81 20.5' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M18 2v1.362L12.809 9.55a6.501 6.501 0 1 1-7.116 8.028l1.94-.486A4.502 4.502 0 0 0 16.5 16a4.5 4.5 0 0 0-6.505-4.03l-.228.122-.69-1.207L14.855 4H6.5V2H18z"/></svg>
</template>