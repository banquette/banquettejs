<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-douban-line')
export default class IconRemixDoubanLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '3 3 18 18' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M15.273 15H5V7h14v8h-1.624l-1.3 4H21v2H3v-2h4.612L6.8 16.5l1.902-.618L9.715 19h4.259l1.3-4zM3.5 3h17v2h-17V3zM7 9v4h10V9H7z"/></svg>
</template>