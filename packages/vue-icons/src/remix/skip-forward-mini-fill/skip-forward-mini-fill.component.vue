<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-skip-forward-mini-fill')
export default class IconRemixSkipForwardMiniFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '7 6 11 12' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.788 17.444A.5.5 0 0 1 7 17.035V6.965a.5.5 0 0 1 .788-.409l7.133 5.036a.5.5 0 0 1 0 .816l-7.133 5.036zM16 7a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0V7z"/></svg>
</template>