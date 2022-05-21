<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-h-6')
export default class IconRemixH6 {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span style="line-height: 0"><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '2 4 20.5 16.5' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m21.097 8-2.598 4.5a4 4 0 1 1-3.453 1.981L18.788 8h2.309zM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2zm14.5 10.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 18.5 14.5z"/></svg></span>
</template>