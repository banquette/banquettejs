<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-money-euro-circle-fill')
export default class IconRemixMoneyEuroCircleFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span style="line-height: 0"><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '2 2 20 20' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.95-11a2.5 2.5 0 0 1 4.064-1.41l1.701-1.133A4.5 4.5 0 0 0 8.028 11H7v2h1.027a4.5 4.5 0 0 0 7.788 2.543l-1.701-1.134A2.5 2.5 0 0 1 10.05 13l4.95.001v-2h-4.95z"/></svg></span>
</template>