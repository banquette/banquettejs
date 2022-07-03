<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-book-3-fill')
export default class IconRemixBook3Fill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '3 2 18 20' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 4H7a2 2 0 1 0 0 4h14v13a1 1 0 0 1-1 1H7a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h13a1 1 0 0 1 1 1v1zm-1 3H7a1 1 0 1 1 0-2h13v2z"/></svg>
</template>