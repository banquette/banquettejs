<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-percent-fill')
export default class IconRemixPercentFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '3 3 18 18' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M17.5 21a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm-11-11a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm12.571-6.485 1.414 1.414L4.93 20.485l-1.414-1.414L19.07 3.515z"/></svg>
</template>