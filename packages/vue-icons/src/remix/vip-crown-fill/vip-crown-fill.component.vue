<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-vip-crown-fill')
export default class IconRemixVipCrownFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '2 2 20 19' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 19h20v2H2v-2zM2 5l5 3 5-6 5 6 5-3v12H2V5z"/></svg>
</template>