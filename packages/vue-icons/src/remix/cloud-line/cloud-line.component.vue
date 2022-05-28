<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-cloud-line')
export default class IconRemixCloudLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '1 2 22.01 19' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 21H7A6 6 0 0 1 5.008 9.339a7 7 0 1 1 13.984 0A6 6 0 0 1 17 21zm0-12a5 5 0 1 0-9.994.243l.07 1.488-1.404.494A4.002 4.002 0 0 0 7 19h10a4 4 0 1 0-3.796-5.265l-1.898-.633A6.003 6.003 0 0 1 17 9z"/></svg>
</template>