<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-red-packet-fill')
export default class IconRemixRedPacketFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '3 2 18 20' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 5.937A11.985 11.985 0 0 1 14.194 9.8a2.5 2.5 0 0 0-4.388 0A11.985 11.985 0 0 1 3 5.937V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2.937zm0 2.787V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8.724A13.944 13.944 0 0 0 9.63 11.8a2.501 2.501 0 0 0 4.74 0A13.944 13.944 0 0 0 21 8.724z"/></svg>
</template>