<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-device-recover-line')
export default class IconRemixDeviceRecoverLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '4 2 16 20' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14zm-1 2H6v16h12V4zm-6 3a5 5 0 0 1 2.628 9.254L12.5 12H15a3 3 0 1 0-3 3l.955 1.909A5 5 0 1 1 12 7z"/></svg>
</template>