<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-book-open-line')
export default class IconRemixBookOpenLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '2 3 20 20' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 21v2h-2v-2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a3.99 3.99 0 0 1 3 1.354A3.99 3.99 0 0 1 15 3h6a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8zm7-2V5h-5a2 2 0 0 0-2 2v12h7zm-9 0V7a2 2 0 0 0-2-2H4v14h7z"/></svg>
</template>