<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-filter-fill')
export default class IconRemixFilterFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span style="line-height: 0"><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '3 4 18 18' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 4v2h-1l-6 9v7h-4v-7L4 6H3V4z"/></svg></span>
</template>