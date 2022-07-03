<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-image-edit-line')
export default class IconRemixImageEditLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '3 3 20.19 18' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 3a1 1 0 0 1 1 1v1.757l-2 2V5H5v8.1l4-4 4.328 4.329-1.415 1.413L9 11.93l-4 3.999V19h10.533l.708.001 1.329-1.33L18.9 19h.1v-2.758l2-2V20a1 1 0 0 1-1 1H4c-.55 0-1-.45-1-1V4a1 1 0 0 1 1-1h16zm1.778 4.808 1.414 1.414L15.414 17l-1.416-.002.002-1.412 7.778-7.778zM15.5 7a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 15.5 7z"/></svg>
</template>