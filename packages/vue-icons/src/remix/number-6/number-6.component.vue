<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-number-6')
export default class IconRemixNumber6 {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '5.5 2 13 20.5' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m14.886 2-4.438 7.686A6.5 6.5 0 1 1 6.4 12.7L12.576 2h2.31zM12 11.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z"/></svg>
</template>