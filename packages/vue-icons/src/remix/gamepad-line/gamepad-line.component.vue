<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-gamepad-line')
export default class IconRemixGamepadLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '1 4 22 16' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 4a6 6 0 0 1 6 6v4a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6v-4a6 6 0 0 1 6-6h10zm0 2H7a4 4 0 0 0-3.995 3.8L3 10v4a4 4 0 0 0 3.8 3.995L7 18h10a4 4 0 0 0 3.995-3.8L21 14v-4a4 4 0 0 0-3.8-3.995L17 6zm-7 3v2h2v2H9.999L10 15H8l-.001-2H6v-2h2V9h2zm8 4v2h-2v-2h2zm-2-4v2h-2V9h2z"/></svg>
</template>