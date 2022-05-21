<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-clockwise-2-fill')
export default class IconRemixClockwise2Fill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span style="line-height: 0"><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '3 1 18 21' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M10 4V1l5 4-5 4V6H8a3 3 0 0 0-3 3v4H3V9a5 5 0 0 1 5-5h2zm-1 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V11z"/></svg></span>
</template>