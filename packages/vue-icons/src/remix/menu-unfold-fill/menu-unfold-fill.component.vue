<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-menu-unfold-fill')
export default class IconRemixMenuUnfoldFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '3 3.55 19 16.45' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 18v2H3v-2h18zM17.05 3.55 22 8.5l-4.95 4.95v-9.9zM12 11v2H3v-2h9zm0-7v2H3V4h9z"/></svg>
</template>