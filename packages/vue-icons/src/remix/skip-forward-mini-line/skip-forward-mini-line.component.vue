<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-skip-forward-mini-line')
export default class IconRemixSkipForwardMiniLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '7 6 11 12' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M12.032 12 9 9.86v4.28L12.032 12zM7.5 17.535a.5.5 0 0 1-.5-.5V6.965a.5.5 0 0 1 .788-.409l7.133 5.036a.5.5 0 0 1 0 .816l-7.133 5.036a.5.5 0 0 1-.288.091zM16 7a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0V7z"/></svg></span>
</template>