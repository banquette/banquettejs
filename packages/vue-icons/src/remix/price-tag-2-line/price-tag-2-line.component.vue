<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-price-tag-2-line')
export default class IconRemixPriceTag2Line {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '3 1.2 18 20.8' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m3 7 8.445-5.63a1 1 0 0 1 1.11 0L21 7v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7zm2 1.07V20h14V8.07l-7-4.666L5 8.07zM8 16h8v2H8v-2zm0-3h8v2H8v-2zm4-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg></span>
</template>