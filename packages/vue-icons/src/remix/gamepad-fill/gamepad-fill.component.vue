<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-gamepad-fill')
export default class IconRemixGamepadFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '1 4 22 16' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 4a6 6 0 0 1 6 6v4a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6v-4a6 6 0 0 1 6-6h10zm-7 5H8v2H6v2h1.999L8 15h2l-.001-2H12v-2h-2V9zm8 4h-2v2h2v-2zm-2-4h-2v2h2V9z"/></svg>
</template>