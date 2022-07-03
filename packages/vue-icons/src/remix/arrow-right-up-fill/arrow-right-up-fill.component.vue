<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-arrow-right-up-fill')
export default class IconRemixArrowRightUpFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '5.98 6 12.02 12.02' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m13.05 12.36-5.656 5.658-1.414-1.415 5.657-5.656-4.95-4.95H18V17.31z"/></svg>
</template>