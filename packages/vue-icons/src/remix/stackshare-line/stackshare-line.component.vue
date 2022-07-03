<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-stackshare-line')
export default class IconRemixStackshareLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '1.5 3 20.5 18' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M9.536 13H7.329a3 3 0 1 1 .001-2h2.206L13 5h3.17a3 3 0 1 1 .001 2h-2.017l-2.886 4.999L14.155 17h2.016a3 3 0 1 1 0 2H13l-3.464-6zM19 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM4.5 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM19 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>
</template>