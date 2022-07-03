<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-sticky-note-fill')
export default class IconRemixStickyNoteFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '3 3 18 18' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m15 14-.117.007a1 1 0 0 0-.876.876L14 15v6H3.998A.996.996 0 0 1 3 20.007V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.447.993.999V14h-6zm6 2-5 4.997V16h5z"/></svg>
</template>