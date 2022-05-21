<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-copyleft-fill')
export default class IconRemixCopyleftFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span style="line-height: 0"><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '2 2 20 20' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm0-5c2.76 0 5-2.24 5-5a5.002 5.002 0 0 0-9.288-2.572l1.715 1.028A2.997 2.997 0 0 1 12 9c1.658 0 3 1.342 3 3s-1.342 3-3 3a2.998 2.998 0 0 1-2.574-1.457l-1.714 1.03A5.001 5.001 0 0 0 12 17z"/></svg></span>
</template>