<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-anticlockwise-fill')
export default class IconRemixAnticlockwiseFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '1 3 21 18' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M6 10h3l-4 5-4-5h3V8a5 5 0 0 1 5-5h4v2H9a3 3 0 0 0-3 3v2zm5-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1z"/></svg>
</template>