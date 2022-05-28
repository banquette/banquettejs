<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-blur-off-fill')
export default class IconRemixBlurOffFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '1.39 0.27 21.21 22.34' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M5.432 6.846 1.393 2.808l1.415-1.415 19.799 19.8-1.415 1.414-3.038-3.04A9 9 0 0 1 5.432 6.848zM8.243 4.03 12 .272l6.364 6.364a9.002 9.002 0 0 1 2.05 9.564L8.244 4.03z"/></svg>
</template>