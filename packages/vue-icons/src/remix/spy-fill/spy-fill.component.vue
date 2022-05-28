<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-spy-fill')
export default class IconRemixSpyFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '2 3 20 18' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 13a4 4 0 1 1 0 8c-2.142 0-4-1.79-4-4h-2a4 4 0 1 1-.535-2h3.07A3.998 3.998 0 0 1 17 13zM2 12v-2h2V7a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v3h2v2H2z"/></svg>
</template>