<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-travesti-fill')
export default class IconRemixTravestiFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '0.77 1.77 20.23 20.23' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.537 9.95 4.66 7.076 2.186 9.55.772 8.136l6.364-6.364L8.55 3.186 6.075 5.661l2.876 2.876A7.5 7.5 0 1 1 7.537 9.95z"/></svg>
</template>