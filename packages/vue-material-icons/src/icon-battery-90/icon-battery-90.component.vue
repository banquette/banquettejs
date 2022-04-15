<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('icon-battery-90')
export default class IconBattery90 {
    @Prop({type: [String, Number], default: 24}) public size!: string|number;
    @Prop({type: String, default: null}) public color!: string;
}
</script>
<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" :fill="color" viewBox="0 0 24 24"><path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V8h10V5.33z"/><path d="M7 8v12.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V8H7z"/></svg>
</template>