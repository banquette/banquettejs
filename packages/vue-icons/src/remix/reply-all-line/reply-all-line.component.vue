<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-reply-all-line')
export default class IconRemixReplyAllLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '0 4.5 24 15.31' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M14 4.5V9c5.523 0 10 4.477 10 10 0 .273-.01.543-.032.81a9.003 9.003 0 0 0-7.655-4.805L16 15h-2v4.5L6 12l8-7.5zm-6 0v2.737L2.92 12l5.079 4.761L8 19.5 0 12l8-7.5zm4 4.616L8.924 12 12 14.883V13h4.034l.347.007c1.285.043 2.524.31 3.676.766A7.984 7.984 0 0 0 14 11h-2V9.116z"/></svg>
</template>