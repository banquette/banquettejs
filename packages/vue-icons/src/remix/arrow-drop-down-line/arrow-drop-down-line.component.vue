<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-arrow-drop-down-line')
export default class IconRemixArrowDropDownLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '7.76 9.34 8.49 5.66' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m12 15-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"/></svg></span>
</template>