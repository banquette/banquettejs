<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-drag-move-fill')
export default class IconRemixDragMoveFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span style="line-height: 0"><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '2 2 20 20' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m12 22-4-4h8l-4 4zm0-20 4 4H8l4-4zm0 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM2 12l4-4v8l-4-4zm20 0-4 4V8l4 4z"/></svg></span>
</template>