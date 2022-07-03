<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-volume-vibrate-line')
export default class IconRemixVolumeVibrateLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '2 3.16 18.8 17.68' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m19.39 3.161 1.413 1.414-2.475 2.475 2.475 2.475L18.328 12l2.475 2.476-2.475 2.475 2.475 2.475-1.414 1.414-3.889-3.89 2.475-2.474L15.5 12l2.475-2.475L15.5 7.05l3.89-3.889zm-6.503.578a.5.5 0 0 1 .113.316v15.89a.5.5 0 0 1-.817.387L6.89 15.999 3 16a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .704.07zM11 7.22 7.603 9.999H4V14l3.603-.001L11 16.779V7.22z"/></svg>
</template>