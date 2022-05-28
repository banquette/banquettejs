<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-pages-fill')
export default class IconRemixPagesFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '3 2 18 20' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 22H4a1 1 0 0 1-1-1V8h18v13a1 1 0 0 1-1 1zm1-16H3V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v3zM7 11v4h4v-4H7zm0 6v2h10v-2H7zm6-5v2h4v-2h-4z"/></svg>
</template>