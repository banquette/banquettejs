<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-check-line')
export default class IconRemixCheckLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '3.64 5.98 16.97 12.02' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m10 15.172 9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"/></svg>
</template>