<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-camera-switch-fill')
export default class IconRemixCameraSwitchFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '2 3 20 18' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4l2-2zm5.684 15.368-.895-1.79A4 4 0 0 1 8 13h2.001L7.839 8.677a6 6 0 0 0 6.845 9.69zM9.316 7.632l.895 1.79A4 4 0 0 1 16 13h-2.001l2.161 4.323a6 6 0 0 0-6.845-9.69z"/></svg>
</template>