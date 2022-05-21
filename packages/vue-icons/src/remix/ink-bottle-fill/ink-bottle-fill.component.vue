<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-ink-bottle-fill')
export default class IconRemixInkBottleFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span style="line-height: 0"><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '3 3 18 19' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m16 9 4.371 1.749a1 1 0 0 1 .629.928V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.323c0-.409.249-.777.629-.928L8 9h8zm4 5H8v5h12v-5zM16 3a1 1 0 0 1 1 1v4H7V4a1 1 0 0 1 1-1h8z"/></svg></span>
</template>