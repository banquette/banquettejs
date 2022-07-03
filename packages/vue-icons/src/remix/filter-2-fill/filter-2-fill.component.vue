<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-filter-2-fill')
export default class IconRemixFilter2Fill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '4 3 16 19' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M10 14 4 5V3h16v2l-6 9v6l-4 2z"/></svg>
</template>