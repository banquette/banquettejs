<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-reply-line')
export default class IconRemixReplyLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '1 4 20 16' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 20 1 12l10-8v5c5.523 0 10 4.477 10 10 0 .273-.01.543-.032.81a9.003 9.003 0 0 0-7.655-4.805L13 15h-2v5zm-2-7h4.034l.347.007c1.285.043 2.524.31 3.676.766A7.984 7.984 0 0 0 11 11H9V8.161L4.202 12 9 15.839V13z"/></svg>
</template>