<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-flow-chart')
export default class IconRemixFlowChart {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '2.5 1.76 19.74 19.74' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M6 21.5A3.5 3.5 0 1 1 9.355 17H15v-2h2V9.242L14.757 7H9v2H3V3h6v2h5.757L18 1.756 22.243 6 19 9.241V15h2v6h-6v-2H9.355A3.501 3.501 0 0 1 6 21.5zm0-5a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 6 16.5zm13 .5h-2v2h2v-2zM18 4.586 16.586 6 18 7.414 19.414 6 18 4.586zM7 5H5v2h2V5z"/></svg>
</template>