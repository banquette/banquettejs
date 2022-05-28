<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-contrast-drop-2-fill')
export default class IconRemixContrastDrop2Fill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '3 0.27 18 21.73' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M5.636 6.636 12 .272l6.364 6.364a9 9 0 1 1-12.728 0zM12 3.101 7.05 8.05A6.978 6.978 0 0 0 5 13h14a6.978 6.978 0 0 0-2.05-4.95L12 3.1z"/></svg>
</template>