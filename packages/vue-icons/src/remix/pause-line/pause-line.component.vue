<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-pause-line')
export default class IconRemixPauseLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span style="line-height: 0"><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '6 5 12 14' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M6 5h2v14H6V5zm10 0h2v14h-2V5z"/></svg></span>
</template>