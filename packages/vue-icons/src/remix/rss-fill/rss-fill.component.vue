<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-rss-fill')
export default class IconRemixRssFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '3 3 18 18' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 3c9.941 0 18 8.059 18 18h-3c0-8.284-6.716-15-15-15V3zm0 7c6.075 0 11 4.925 11 11h-3a8 8 0 0 0-8-8v-3zm0 7a4 4 0 0 1 4 4H3v-4z"/></svg>
</template>