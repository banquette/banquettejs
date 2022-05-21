<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-menu-fold-fill')
export default class IconRemixMenuFoldFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span style="line-height: 0"><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '2 3.55 19 16.45' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 18v2H3v-2h18zM6.95 3.55v9.9L2 8.5l4.95-4.95zM21 11v2h-9v-2h9zm0-7v2h-9V4h9z"/></svg></span>
</template>