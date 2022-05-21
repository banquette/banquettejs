<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-test-tube-fill')
export default class IconRemixTestTubeFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span style="line-height: 0"><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '7 2 10 20' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 2v2h-1v14c0 2.21-1.79 4-4 4s-4-1.79-4-4V4H7V2h10zm-4 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm3-8h-4v4h4V4z"/></svg></span>
</template>