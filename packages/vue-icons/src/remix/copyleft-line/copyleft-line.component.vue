<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-copyleft-line')
export default class IconRemixCopyleftLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span style="line-height: 0"><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '2 2 20 20' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm0-2c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8zm0-3a4.998 4.998 0 0 1-4.288-2.428l1.714-1.029A3 3 0 0 0 12 15c1.658 0 3-1.342 3-3s-1.342-3-3-3a2.997 2.997 0 0 0-2.573 1.456L7.712 9.428A5.002 5.002 0 0 1 17 12c0 2.76-2.24 5-5 5z"/></svg></span>
</template>