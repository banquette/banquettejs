<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-contrast-drop-line')
export default class IconRemixContrastDropLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '3 0.27 18 21.73' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 3.1 7.05 8.05a7 7 0 1 0 9.9 0L12 3.1zm0-2.828 6.364 6.364a9 9 0 1 1-12.728 0L12 .272zM12 18V8a5 5 0 0 1 0 10z"/></svg>
</template>