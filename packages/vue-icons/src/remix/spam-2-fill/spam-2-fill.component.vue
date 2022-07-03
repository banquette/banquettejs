<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-spam-2-fill')
export default class IconRemixSpam2Fill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '2.5 2.5 19.4 19.4' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m16.218 2.5 5.683 5.682v8.036l-5.683 5.683H8.182l-5.683-5.683V8.182l5.683-5.683h8.036zM11 15v2h2v-2h-2zm0-8v6h2V7h-2z"/></svg>
</template>