<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-a-b')
export default class IconRemixAB {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span style="line-height: 0"><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '3 3 19.4 18' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M5 15v2c0 1.054.95 2 2 2h3v2H7a4 4 0 0 1-4-4v-2h2zm13-5 4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16 10h2zm-1 2.885L15.753 16h2.492L17 12.885zM3 3h6a3 3 0 0 1 2.235 5A3 3 0 0 1 9 13H3V3zm6 6H5v2h4a1 1 0 0 0 0-2zm8-6a4 4 0 0 1 4 4v2h-2V7a2 2 0 0 0-2-2h-3V3h3zM9 5H5v2h4a1 1 0 1 0 0-2z"/></svg></span>
</template>