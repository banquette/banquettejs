<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-caravan-fill')
export default class IconRemixCaravanFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span style="line-height: 0"><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '2 3 21 19' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M14.172 3c.53 0 1.039.21 1.414.586l4.828 4.828A2 2 0 0 1 21 9.828V17h2v2h-8.126a4.002 4.002 0 0 1-7.748 0H3a1 1 0 0 1-1-1V5a2 2 0 0 1 2-2h10.172zM11 16a2 2 0 1 0-.001 3.999A2 2 0 0 0 11 16zm3-9H6v6h8V7zm-2 2v2H8V9h4z"/></svg></span>
</template>