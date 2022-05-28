<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-arrow-drop-right-fill')
export default class IconRemixArrowDropRightFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '10 8 4 8' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m14 12-4 4V8z"/></svg>
</template>