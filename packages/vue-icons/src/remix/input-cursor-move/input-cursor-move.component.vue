<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-input-cursor-move')
export default class IconRemixInputCursorMove {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '1 3 22 18' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M8 21v-2h3V5H8V3h8v2h-3v14h3v2H8zM18.05 7.05 23 12l-4.95 4.95-1.414-1.414L20.172 12l-3.536-3.536L18.05 7.05zm-12.1 0 1.414 1.414L3.828 12l3.536 3.536L5.95 16.95 1 12l4.95-4.95z"/></svg>
</template>