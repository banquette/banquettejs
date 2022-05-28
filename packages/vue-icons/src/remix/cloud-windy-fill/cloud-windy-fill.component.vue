<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-cloud-windy-fill')
export default class IconRemixCloudWindyFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '1.52 3.09 21.47 18.91' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M14 18v-3.993H2.074a8 8 0 0 1 14.383-6.908A5.5 5.5 0 1 1 17.5 18h-3.499zm-8 2h10v2H6v-2zm-4-4h10v2H2v-2z"/></svg>
</template>