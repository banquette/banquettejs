<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-phone-find-fill')
export default class IconRemixPhoneFindFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '5 2 15.66 20' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M18 2a1 1 0 0 1 1 1v8.529A6 6 0 0 0 9 16c0 3.238 2.76 6 6 6H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12zm-3 10a4 4 0 0 1 3.446 6.032l2.21 2.21-1.413 1.415-2.211-2.21A4 4 0 1 1 15 12zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg>
</template>